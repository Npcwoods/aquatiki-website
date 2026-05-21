"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScreenQuad } from "@react-three/drei";
import * as THREE from "three";

// ScreenQuad vertex: pass through clip space + uv [0..1]
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

// Painterly sunset over lake: gold + coral horizon, navy water with caustics, soft sun disc.
const fragmentShader = `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2  uResolution;

  // ---- noise helpers ----
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p){
    vec2 i = floor(p); vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0,0.0));
    float c = hash(i + vec2(0.0,1.0));
    float d = hash(i + vec2(1.0,1.0));
    vec2 u = f*f*(3.0-2.0*f);
    return mix(a,b,u.x) + (c-a)*u.y*(1.0-u.x) + (d-b)*u.x*u.y;
  }
  float fbm(vec2 p){
    float v = 0.0;
    float a = 0.5;
    for(int i=0;i<5;i++){
      v += a * noise(p);
      p *= 2.04;
      a *= 0.5;
    }
    return v;
  }

  // brand palette — boosted for vivid sunset
  const vec3 NAVY      = vec3(0.020, 0.075, 0.150);
  const vec3 NAVY2     = vec3(0.050, 0.135, 0.230);
  const vec3 TEAL      = vec3(0.235, 0.713, 0.796);
  const vec3 GOLD      = vec3(1.000, 0.770, 0.280);
  const vec3 GOLD_HOT  = vec3(1.000, 0.880, 0.560);
  const vec3 HIBISCUS  = vec3(0.980, 0.310, 0.380);
  const vec3 BAMBOO    = vec3(0.725, 0.530, 0.315);
  const vec3 CREAM     = vec3(0.980, 0.960, 0.910);

  void main() {
    vec2 uv = vUv;
    float t = uTime * 0.06;

    // ---- SKY (top half) ----
    // horizon a bit below center for a "huge sky" feel
    float horizon = 0.42;
    float sky_t = smoothstep(horizon, 1.0, uv.y);

    // base sky gradient (deep navy at top → hot gold at horizon)
    vec3 sky = mix(GOLD_HOT, NAVY, pow(sky_t, 0.85));
    // coral band sitting on the horizon (wider, more vivid)
    float coralBand = exp(-pow((uv.y - (horizon + 0.08)) * 5.5, 2.0));
    sky = mix(sky, HIBISCUS, coralBand * 0.85);
    // gold halo just above horizon
    float halo = exp(-pow((uv.y - horizon) * 9.0, 2.0));
    sky += GOLD * halo * 0.55;

    // soft drifting clouds
    float cloud = fbm(vec2(uv.x * 3.0 + t * 0.6, uv.y * 4.0 - t * 0.2));
    cloud = smoothstep(0.45, 0.85, cloud) * smoothstep(0.55, 0.95, uv.y) * (1.0 - sky_t * 0.4);
    sky = mix(sky, CREAM, cloud * 0.18);

    // sun disc
    vec2 sunPos = vec2(0.68, horizon + 0.06 + sin(t * 0.7) * 0.003);
    float sunDist = distance(vec2(uv.x, uv.y * (uResolution.x / max(uResolution.y, 1.0))),
                             vec2(sunPos.x, sunPos.y * (uResolution.x / max(uResolution.y, 1.0))));
    float sunCore = smoothstep(0.052, 0.040, sunDist);
    float sunGlow = smoothstep(0.30, 0.0, sunDist) * 0.55;
    sky += GOLD_HOT * sunCore;
    sky += GOLD * sunGlow * 0.6;

    // ---- WATER (bottom half) ----
    // base navy with subtle gradient
    float waterT = smoothstep(0.0, horizon, uv.y);
    vec3 water = mix(NAVY * 0.65, NAVY2, waterT);

    // sun reflection column on the water
    float reflectionX = exp(-pow((uv.x - sunPos.x) * 4.5, 2.0));
    // shimmering bands across the column
    float bands = sin((uv.y * 60.0) + t * 4.0 + fbm(vec2(uv.x * 14.0, uv.y * 22.0 + t * 2.0)) * 6.0);
    bands = smoothstep(0.6, 1.0, bands) * (1.0 - waterT);
    water += GOLD * reflectionX * bands * 1.2;
    // soft warm wash on water under sun
    water = mix(water, GOLD * 0.6, reflectionX * (1.0 - waterT) * 0.18);

    // caustics-like ripples across whole water
    float ripple = fbm(vec2(uv.x * 8.0, uv.y * 26.0 + t * 1.4));
    ripple = pow(ripple, 2.0);
    water += TEAL * ripple * (1.0 - waterT) * 0.06;

    // a far shoreline silhouette near horizon (Blue Ridge mountains)
    float mtn = fbm(vec2(uv.x * 2.8 + 12.0, 4.5)) * 0.04;
    float mtnLine = smoothstep(horizon - 0.018 - mtn, horizon - 0.025 - mtn, uv.y);
    vec3 mountainColor = mix(NAVY * 0.55, BAMBOO * 0.35, smoothstep(0.0, 0.3, uv.x));
    vec3 sceneBeforeMountain = mix(water, sky, step(horizon, uv.y));
    vec3 scene = mix(sceneBeforeMountain, mountainColor, mtnLine * step(uv.y, horizon + 0.012));

    // vignette
    float vig = smoothstep(1.35, 0.35, distance(uv, vec2(0.5)));
    scene *= mix(0.78, 1.0, vig);

    // grain
    float grain = (hash(uv * uResolution + t * 100.0) - 0.5) * 0.035;
    scene += grain;

    gl_FragColor = vec4(scene, 1.0);
  }
`;

function SunsetPlane() {
  const ref = useRef<THREE.ShaderMaterial>(null);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
    }),
    [],
  );
  useFrame(({ clock, size }) => {
    if (ref.current) {
      ref.current.uniforms.uTime.value = clock.elapsedTime;
      ref.current.uniforms.uResolution.value.set(size.width, size.height);
    }
  });
  return (
    <ScreenQuad>
      <shaderMaterial
        ref={ref}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </ScreenQuad>
  );
}

export function HeroShader() {
  return (
    <div className="absolute inset-0" aria-hidden>
      <Canvas
        gl={{
          antialias: false,
          powerPreference: "high-performance",
          toneMapping: THREE.NoToneMapping,
          outputColorSpace: THREE.LinearSRGBColorSpace,
        }}
        dpr={[1, 1.5]}
        style={{ position: "absolute", inset: 0 }}
        flat
        linear
      >
        <SunsetPlane />
      </Canvas>
      {/* CSS gradient fallback for low-power / no-WebGL — sits behind canvas */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, #0E2A45 0%, #15375A 35%, #E84B5C 60%, #F5C24A 85%, #FAF5E8 100%)",
        }}
      />
    </div>
  );
}
