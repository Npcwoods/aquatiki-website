"use client";

import { motion } from "framer-motion";
import { PhotoSlot } from "./ui/PhotoSlot";
import { photos } from "@/lib/photos";

export function MasonryGallery() {
  const images = Object.values(photos);

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
      {images.map((img, i) => (
        <motion.div
          key={img.src}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
          className="break-inside-avoid rounded-[20px] overflow-hidden shadow-[0_10px_40px_-10px_rgba(14,42,69,0.3)] border border-navy/[0.04]"
        >
          <div className={i % 3 === 0 ? "aspect-[4/5]" : i % 2 === 0 ? "aspect-square" : "aspect-[5/4]"}>
            <PhotoSlot
              src={img.src}
              alt={img.alt}
              fallbackVariant={(i % 6) as any}
              fallbackLabel={img.alt.slice(0, 15).toLowerCase() + "..."}
              className="w-full h-full"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
