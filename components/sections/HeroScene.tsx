"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * The Monolith — Blanc's signature 3D form.
 * Rather than a literal glass-tower render (which reads as stock/generic at
 * primitive-geometry fidelity), the studio's identity is abstracted into a
 * set of offset stacked slabs: the language of massing studies architects
 * actually sketch with. Ember-lit edges pick out the joints between forms.
 */
function Slabs({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  const group = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  const slabs = useMemo(
    () => [
      { size: [3.2, 0.35, 2.0], pos: [0, 0, 0], rot: 0 },
      { size: [2.4, 0.35, 2.4], pos: [0.5, 0.55, -0.2], rot: 0.08 },
      { size: [2.8, 0.35, 1.6], pos: [-0.4, 1.1, 0.3], rot: -0.05 },
      { size: [1.8, 0.35, 2.0], pos: [0.7, 1.65, -0.4], rot: 0.14 },
      { size: [2.2, 0.35, 1.4], pos: [-0.3, 2.2, 0.1], rot: -0.1 },
    ],
    []
  );

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = t * 0.06 + mouse.current.x * 0.3;
    group.current.rotation.x = mouse.current.y * 0.08;
    group.current.position.y = -scrollProgress.current * 2.4 - 0.4;
    group.current.position.z = -scrollProgress.current * 1.5;
  });

  useMemo(() => {
    const handler = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handler);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", handler);
      }
    };
  }, []);

  return (
    <group ref={group} position={[0, -0.8, 0]}>
      {slabs.map((s, i) => (
        <group key={i} position={s.pos as [number, number, number]} rotation={[0, s.rot, 0]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={s.size as [number, number, number]} />
            <meshStandardMaterial
              color="#434834"
              metalness={0.4}
              roughness={0.35}
            />
          </mesh>
          <lineSegments>
            <edgesGeometry args={[new THREE.BoxGeometry(...(s.size as [number, number, number]))]} />
            <lineBasicMaterial color="#767A60" transparent opacity={0.55} />
          </lineSegments>
        </group>
      ))}
    </group>
  );
}

function Rig() {
  const { camera } = useThree();
  useFrame((state) => {
    camera.position.x += (state.pointer.x * 0.6 - camera.position.x) * 0.02;
    camera.position.y += (1.2 - state.pointer.y * 0.4 - camera.position.y) * 0.02;
    camera.lookAt(0, 0.8, 0);
  });
  return null;
}

export default function HeroScene({
  scrollProgress,
}: {
  scrollProgress: React.MutableRefObject<number>;
}) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [3.2, 1.4, 5.5], fov: 38 }}
      gl={{ antialias: true }}
    >
      <color attach="background" args={["#363B2B"]} />
      <fog attach="fog" args={["#363B2B", 6, 14]} />
      <ambientLight intensity={0.35} />
      <directionalLight
        position={[4, 6, 2]}
        intensity={1.4}
        castShadow
        color="#E9E2D2"
      />
      <pointLight position={[-3, 1, -2]} intensity={6} color="#767A60" distance={8} />
      <Slabs scrollProgress={scrollProgress} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.3, 0]} receiveShadow>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#363B2B" roughness={1} />
      </mesh>
      <Rig />
    </Canvas>
  );
}
