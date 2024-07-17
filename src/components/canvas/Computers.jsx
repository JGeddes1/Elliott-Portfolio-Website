import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF('./city-scape/scene.gltf');
  const computerRef = useRef();

  useFrame(() => {
    // Update the rotation of the model
    if (computerRef.current) {
      computerRef.current.rotation.y += 0.002; // Adjust the speed and direction as needed
    }
  });

  return (
    <mesh ref={computerRef}>
      <hemisphereLight intensity={3.15} groundColor="black" />
      <pointLight intensity={10} position={[-0,-1,2.5]}/>
      <spotLight position={[-30,50,10]} angle={0.15} penumbra={1} intensity={10000000}
      castShadow shadow-mapSize={1024} />
      <spotLight position={[30,-50,-10]} angle={-0.15} penumbra={1} intensity={10000000}
      castShadow shadow-mapSize={1024} />

      <primitive object={computer.scene}
      scale={1}
      rotation={[0, 15, 0]}
      position={[1, -9, 0]}
      />
    </mesh>
  );
}

const ComputersCanvas = () => {
  return (
    <Canvas frameloop="always" shadows camera={{ position: [0, -0, 10], fov: 35 }}
    gl={{preserveDrawingBuffer: true}}>

      <Suspense fallback={<CanvasLoader />} >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          // minAzimuthAngle={-Math.PI / 4} 
          // maxAzimuthAngle={Math.PI / 4}
        />
        <Computers/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas;
