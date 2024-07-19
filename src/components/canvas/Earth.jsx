import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import * as THREE from 'three';
import CanvasLoader from "../Loader";

const Earth = () => {
  // Create the torus geometry and material
  const geometry = new THREE.SphereGeometry( 15, 32, 16 ); 
  const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
  const ElliottTexture = new THREE.TextureLoader().load('src/assets/Elliott.jpg');
  const sphere = new THREE.Mesh( geometry, material ); 
  const Eliott = new THREE.Mesh(new THREE.SphereGeometry( 15, 32, 16 ), new THREE.MeshBasicMaterial({ map: ElliottTexture }));
  
  // Return the torus mesh object directly
  return <primitive object={Eliott} scale={0.12} position-y={0} rotation-y={0} />;
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 0]} intensity={1.5} castShadow />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
