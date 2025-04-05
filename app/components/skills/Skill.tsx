"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Reveal from "../Reveal";

type Props = {
  icon: string;
  name: string;
};

const Skill = ({ icon, name }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const xDistance = useMotionValue(0);
  const yDistance = useMotionValue(0);
  const mask = useMotionTemplate`radial-gradient(100px 100px at ${xDistance}px ${yDistance}px, #000, transparent)`;

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    xDistance.set(e.clientX - rect.left);
    yDistance.set(e.clientY - rect.top);
  }, [xDistance, yDistance]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener("mousemove", handleMouseMove);
    return () => element.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <Reveal duration={1.5}>
    <div
      ref={ref}
      className="relative flex gap-2 p-2 border-primary border rounded-lg h-[46px] overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 border-2 border-purple-500 dark:border-purple-300 rounded-lg"
        style={{
          maskImage: mask,
          WebkitMaskImage: mask,
        }}
      />
      <img src={icon} alt={`${name} icon`} className="w-6 h-6" />
      <p className="text-lg">{name}</p>
    </div></Reveal>
  );
};

export default Skill;
