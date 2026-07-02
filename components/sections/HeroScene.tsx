"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * The Villa — a stylized, low-poly modern house built from primitives.
 * Procedural rather than an imported model: guarantees consistent
 * rendering with no external asset licensing or hosting dependency.
 * Scroll drives both the camera and a full day-to-dusk lighting cycle,
 * with warm window glow that switches on as the light fades.
 */
function Villa({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  const group = useRef<THREE.Group>(null);
  const windowGlow = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useMemo(() => {
    const handler = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    if (typeof window !== "undefined") window.addEventListener("mousemove", handler);
    return () => {
      if (typeof window !== "undefined") window.removeEventListener("mousemove", handler);
    };
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const p = scrollProgress.current;

    if (group.current) {
      group.current.rotation.y = t * 0.045 + mouse.current.x * 0.15;
    }

    if (windowGlow.current) {
      windowGlow.current.children.forEach((child) => {
        const mesh = child as THREE.Mesh;
        const mat = mesh.material as THREE.MeshStandardMaterial;
        mat.emissiveIntensity = p * 1.8;
      });
    }
  });

  const windows = useMemo(
    () => [
      [-1.15, 0.35, 1.001],
      [-0.35, 0.35, 1.001],
      [0.45, 0.35, 1.001],
      [1.15, 0.35, 1.001],
    ],
    []
  );

  const trees = useMemo(
    () => [
      { pos: [-3.2, 0, 1.4], h: 1.6 },
      { pos: [-2.7, 0, -1.6], h: 1.2 },
      { pos: [3.1, 0, -1.8], h: 1.4 },
      { pos: [3.4, 0, 1.2], h: 1.1 },
    ],
    []
  );

  return (
    <group ref={group} position={[0, -0.3, 0]}>
      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]} receiveShadow>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#C9BEA5" roughness={1} />
      </mesh>

      {/* Reflecting pool */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, 2.4]}>
        <planeGeometry args={[3.6, 1.4]} />
        <meshStandardMaterial color="#767A60" roughness={0.15} metalness={0.3} />
      </mesh>

      {/* Ground-floor volume */}
      <mesh position={[0, 0.6, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 1.2, 2]} />
        <meshStandardMaterial color="#E9E2D2" roughness={0.6} />
      </mesh>

      {/* Upper offset volume */}
      <mesh position={[-0.5, 1.55, -0.3]} castShadow receiveShadow>
        <boxGeometry args={[2, 0.9, 1.4]} />
        <meshStandardMaterial color="#A5AA89" roughness={0.55} />
      </mesh>

      {/* Roof overhang slabs */}
      <mesh position={[-0.5, 2.05, -0.3]} castShadow>
        <boxGeometry args={[2.3, 0.08, 1.7]} />
        <meshStandardMaterial color="#434834" roughness={0.4} />
      </mesh>
      <mesh position={[0, 1.25, 0]} castShadow>
        <boxGeometry args={[3.5, 0.08, 2.3]} />
        <meshStandardMaterial color="#434834" roughness={0.4} />
      </mesh>

      {/* Windows — emissive glow ramps up at dusk */}
      <group ref={windowGlow}>
        {windows.map((pos, i) => (
          <mesh key={i} position={pos as [number, number, number]}>
            <planeGeometry args={[0.55, 0.55]} />
            <meshStandardMaterial
              color="#363B2B"
              emissive="#C9BEA5"
              emissiveIntensity={0}
              roughness={0.2}
            />
          </mesh>
        ))}
      </group>

      {/* Simple cypress-style landscaping */}
      {trees.map((tr, i) => (
        <mesh key={i} position={[tr.pos[0], tr.h / 2, tr.pos[2]]} castShadow>
          <coneGeometry args={[0.35, tr.h, 8]} />
          <meshStandardMaterial color="#767A60" roughness={0.8} />
        </mesh>
      ))}
    </group>
  );
}

function SceneLights({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  const sunRef = useRef<THREE.DirectionalLight>(null);
  useFrame(() => {
    const p = scrollProgress.current;
    if (sunRef.current) {
      sunRef.current.position.set(4 - p * 6, 6 - p * 3.5, 3 + p * 2);
      sunRef.current.intensity = 1.6 - p * 0.9;
    }
  });
  return (
    <directionalLight
      ref={sunRef}
      position={[4, 6, 3]}
      intensity={1.6}
      color="#E9E2D2"
      castShadow
      shadow-mapSize={[1024, 1024]}
    />
  );
}

function Rig({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  const { camera } = useThree();
  useFrame(() => {
    const p = scrollProgress.current;
    camera.position.x += (4.5 - p * 1.5 - camera.position.x) * 0.03;
    camera.position.y += (2.4 - p * 0.6 - camera.position.y) * 0.03;
    camera.position.z += (7 - p * 3 - camera.position.z) * 0.03;
    camera.lookAt(0, 0.9, 0);
  });
  return null;
}

export default function HeroScene({
  scrollProgress,
}: {
  scrollProgress: React.MutableRefObject<number>;
}) {
  return (
    <Canvas shadows dpr={[1, 1.5]} camera={{ position: [4.5, 2.4, 7], fov: 36 }} gl={{ antialias: true }}>
      <color attach="background" args={["#363B2B"]} />
      <fog attach="fog" args={["#363B2B", 8, 20]} />
      <ambientLight intensity={0.5} />
      <SceneLights scrollProgress={scrollProgress} />
      <Villa scrollProgress={scrollProgress} />
      <Rig scrollProgress={scrollProgress} />
    </Canvas>
  );
}
