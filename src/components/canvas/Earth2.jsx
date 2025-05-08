import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Decal, Float, useTexture } from "@react-three/drei";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader";
import CanvasLoader from "../Loader";

const EarthModel2 = () => {
  // const { scene } = 

  return (
    // <primitive object={scene} scale={2.5} position-y={0} rotation-y={0} />
    //scale = 地球大小
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
          <ambientLight intensity={0.25} />
          <directionalLight position={[0, 0, 0.05]} />
          <mesh castShadow receiveShadow scale={2.75}>
            <icosahedronGeometry args={[0.93, 10]} />
            {/* IcosahedronGeometry(radius : Float 球體大小 , detail : Integer 幾圓 ) */}
            <meshStandardMaterial color='#fff8eb' polygonOffset polygonOffsetFactor={-5} flatShading />
            {/* <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={decal} flatShading /> */}
          </mesh>
        </Float>
  );
};

const EarthCanvas2 = () => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      shadows
    >
      {/* <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      /> */}
      <Suspense fallback={<CanvasLoader />}>
        <EarthModel2 />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas2;
