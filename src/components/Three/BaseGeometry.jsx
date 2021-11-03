import React from 'react';

export function Box({args, color, ...props}) {
  return (
    <mesh {...props}>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export function Cone({args, color, ...props}) {
  return (
    <mesh {...props}>
      <coneGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export function Cylinder({args, color, ...props}) {
  return (
    <mesh {...props}>
      <cylinderGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export function Extrude({args, color, ...props}) {
  return (
    <mesh {...props}>
      <extrudeGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}