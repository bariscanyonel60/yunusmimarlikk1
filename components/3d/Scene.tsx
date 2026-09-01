"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Room from "./Room";

export default function Scene() {
  return (
    <div className="relative h-full w-full">
      <Canvas
        shadows
        camera={{ position: [5, 2.4, 5], fov: 42 }}
        dpr={[1, 1.8]}
      >
        <Suspense fallback={null}>
          <Room />
        </Suspense>
      </Canvas>
    </div>
  );
}
