import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import {Cone, Cylinder, Extrude} from './BaseGeometry.jsx';

function RocketGeomatry(props) {
  const mesh = useRef();
  useFrame((state, delta) => (mesh.current.rotation.y += 0.03));

  let geoFinShape = new THREE.Shape();
  let width, height;
  width = height = 130;

  geoFinShape.moveTo(0, 0);
  geoFinShape.lineTo(0, height);
  geoFinShape.lineTo(width * 0.7, height * 0.2);
  geoFinShape.lineTo(width * 0.7, -height * 0.2);
  geoFinShape.lineTo(0, 0);

  let finExtrudeSettings = {
    amount: 8,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 2,
    bevelSize: 1,
    bevelThickness: 1
  };

  return (
    <mesh {...props} ref={mesh}>
      <Cone args={[50, 70, 8]} color="#287fc2" position={[0, 220, 0]} />
      <Cylinder args={[50, 75, 80, 8]} color="#186fb2" position={[0, 145, 0]} />
      <Cylinder args={[75, 85, 80, 8]} color="#085fa2" position={[0, 65, 0]} />

      <Cylinder args={[85, 85, 200, 8]} color="#FE9" position={[0, -75, 0]} />

      <Cylinder args={[55, 55, 40, 8]} color="#4d4b54" position={[0, -175, 0]} />
      <Cylinder args={[55, 35, 30, 8]} color="#287fc2" position={[0, -195, 0]} />
      <Cylinder args={[35, 35, 30, 8]} color="#4d4b54" position={[0, -215, 0]} />

      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -60, 75]}>
        <Cylinder args={[55, 55, 40, 8]} color="#4d4b54" position={[0, 0, 0]} />
        <Cylinder args={[45, 45, 40, 8]} color="#4a6e8a" position={[0, 2, 0]} />
      </mesh>

      <Extrude args={[geoFinShape, finExtrudeSettings]} color="#085fa2" position={[80, -150, 0]} />
      <Extrude args={[geoFinShape, finExtrudeSettings]} color="#085fa2" position={[-80, -150, 0]} rotation={[0, Math.PI, 0]} />
    </mesh>
  )
}

export default function Rocket() {
  return (
    <Canvas camera={{fov: 60, near: 1, far: 1500, position: [0, 0, 500]}}>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={2} position={[500, 500, 100]} shadow-mapSize-width={2048} shadow-mapSize-height={2048} castShadow />
      <RocketGeomatry />
    </Canvas>
  )
}
