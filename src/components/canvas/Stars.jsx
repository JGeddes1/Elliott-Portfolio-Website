import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, Preload } from "@react-three/drei";

const GridCubes = (props) => {
  const ref = useRef();
  const numCubesX = 10;
  const numCubesZ = 10;
  const spacing = 1.5;
  const cubes = [];

  for (let x = 0; x < numCubesX; x++) {
    for (let z = 0; z < numCubesZ; z++) {
      cubes.push([x * spacing, 0, z * spacing]);
    }
  }

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    ref.current.children.forEach((cube, index) => {
      const x = index % numCubesX;
      const z = Math.floor(index / numCubesX);
      const height = Math.sin((x + time) * 0.5) + Math.cos((z + time) * 0.5);
      cube.position.y = height;
    });
  });

  return (
    <group ref={ref} {...props}>
      {cubes.map((position, index) => (
        <Box key={index} position={position} args={[1, 1, 1]}>
          <meshStandardMaterial color='#FBD46D' />
        </Box>
      ))}
    </group>
  );
};

const GridCubesCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [10, 10, 10], fov: 50 }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <GridCubes />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default GridCubesCanvas;
