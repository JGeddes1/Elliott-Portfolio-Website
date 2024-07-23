import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload, useGLTF } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const artchitecture = useGLTF('./city-scape/scene2.gltf');
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    
    ref.current.rotation.y -= delta /15;
    
  });

  return (
    <mesh ref={ref}>
    <hemisphereLight intensity={3.15} groundColor="black" />
    <pointLight intensity={10} position={[-0,-1,2.5]}/>
    <spotLight position={[-30,50,10]} angle={0.15} penumbra={1} intensity={10000000}
    castShadow shadow-mapSize={1024} />
    <spotLight position={[30,-50,-10]} angle={-0.15} penumbra={1} intensity={10000000}
    castShadow shadow-mapSize={1024} />

    <primitive object={artchitecture.scene}
    scale={1}
    rotation={[0, 0, 0]}
    position={[-1, -13, -3]}
    />
  </mesh>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 12]  }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;