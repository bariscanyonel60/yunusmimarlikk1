"use client";

import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";

export default function Room() {
  return (
    <group>
      {/* Zemin — beton */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#8d8980" roughness={0.9} />
      </mesh>

      {/* Arka duvar — taş */}
      <mesh position={[0, 1.5, -3]} receiveShadow>
        <boxGeometry args={[10, 4, 0.2]} />
        <meshStandardMaterial color="#292824" roughness={0.85} />
      </mesh>

      {/* Yan duvar — ahşap panel */}
      <mesh position={[-3.5, 1.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[6, 4, 0.15]} />
        <meshStandardMaterial color="#a58a68" roughness={0.6} />
      </mesh>

      {/* Cam yüzey */}
      <mesh position={[3, 1.2, 0.5]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[4, 3]} />
        <meshPhysicalMaterial
          color="#f4f1eb"
          transmission={0.9}
          roughness={0.05}
          thickness={0.2}
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Modern mobilya — düşük poli koltuk bloğu */}
      <mesh position={[0, -0.1, 0.5]} castShadow>
        <boxGeometry args={[2.2, 0.7, 1]} />
        <meshStandardMaterial color="#171715" roughness={0.7} />
      </mesh>
      <mesh position={[0, 0.28, 1.05]} castShadow>
        <boxGeometry args={[2.2, 0.5, 0.15]} />
        <meshStandardMaterial color="#171715" roughness={0.7} />
      </mesh>

      {/* Sehpa */}
      <mesh position={[0, -0.25, -0.8]} castShadow>
        <cylinderGeometry args={[0.5, 0.5, 0.08, 32]} />
        <meshStandardMaterial color="#faf9f6" roughness={0.3} />
      </mesh>

      {/* Sıcak nokta ışık */}
      <pointLight position={[2, 2.5, 1]} intensity={20} color="#ffddaa" />
      <ambientLight intensity={0.35} />
      <directionalLight position={[-4, 5, 2]} intensity={0.6} castShadow />

      <ContactShadows position={[0, -0.49, 0]} opacity={0.5} blur={2} far={4} />
      <Environment preset="apartment" />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate={false}
        minDistance={4}
        maxDistance={9}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.9}
      />
    </group>
  );
}
