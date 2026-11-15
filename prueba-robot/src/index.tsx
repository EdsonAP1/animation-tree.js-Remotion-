import React, {useLayoutEffect, useMemo} from 'react';
import {AbsoluteFill, Audio, Composition, registerRoot, staticFile, useCurrentFrame} from 'remotion';
import {ThreeCanvas} from '@remotion/three';
import {useThree} from '@react-three/fiber';
import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

const ink = '#263443';
const smooth = (a:number,b:number,x:number) => {const v=Math.max(0,Math.min(1,(x-a)/(b-a)));return v*v*(3-2*v)};
function Box({size, color, position=[0,0,0], rotation=[0,0,0]}:any){
  const geo=useMemo(()=>new RoundedBoxGeometry(...size,3,0.09),[...size]);
  return <group position={position} rotation={rotation}><mesh geometry={geo}><meshToonMaterial color={color}/></mesh><mesh geometry={geo} scale={1.045}><meshBasicMaterial color={ink} side={THREE.BackSide}/></mesh></group>;
}
function Ball({position,scale=1,color}:any){return <mesh position={position} scale={scale}><sphereGeometry args={[1,24,16]}/><meshToonMaterial color={color}/></mesh>}
function World(){
  const f=useCurrentFrame(),t=f/30;
  const {camera}=useThree();
  const reveal=smooth(63,95,f), surprise=smooth(75,92,f);
  useLayoutEffect(()=>{camera.position.set(0.25+t*.055,3.05-t*.035,8.9-t*.11); camera.lookAt(0,1.65,0);camera.updateProjectionMatrix()},[f,camera]);
  const bounce=.045*Math.sin(t*4);
  const wave=smooth(8,22,f)*(1-smooth(51,65,f));
  const blink=(f>=48&&f<=51)||(f>=124&&f<=127);
  return <>
    <color attach="background" args={['#bce6df']}/><fog attach="fog" args={['#bce6df',13,29]}/>
    <ambientLight intensity={1.6}/><directionalLight position={[-3,7,5]} intensity={2.3}/>
    <mesh rotation={[-Math.PI/2,0,0]} position={[0,-.08,0]}><planeGeometry args={[100,100]}/><meshToonMaterial color="#8bc7b2"/></mesh>
    {[-1,1].map((s,i)=><group key={s} position={[s*5,0,-8-i*3]}><mesh rotation={[0,.3,0]}><coneGeometry args={[5,6,5]}/><meshToonMaterial color={i?'#67afa9':'#7bb5b0'}/></mesh><mesh position={[0,2.15,0]}><coneGeometry args={[1.43,1.8,5]}/><meshToonMaterial color="#ecf3d9"/></mesh></group>)}
    {[[-3,5,-9],[3,6,-12],[0,4.6,-14]].map((p,i)=><group key={i} position={p as any}><Ball color="#eff8e8" scale={[1.4,.35,.5]}/><Ball position={[.4,.2,0]} color="#eff8e8" scale={[.7,.45,.4]}/></group>)}
    <mesh position={[0,0,0]}><cylinderGeometry args={[2.25,2.4,.2,64]}/><meshToonMaterial color="#e8bd83"/></mesh>
    <mesh rotation={[-Math.PI/2,0,0]} position={[-.35,.111,0]} scale={[.65,.32,1]}><circleGeometry args={[1,48]}/><meshBasicMaterial color="#759487" transparent opacity={.27}/></mesh>
    {[-1,1].map((s)=><group key={s} position={[s*1.85,.12,-.7]}><Box size={[.35,.27,.3]} color="#78aaa1"/><mesh position={[.06,.37,0]} rotation={[0,0,s*.25]}><coneGeometry args={[.2,.65,5]}/><meshToonMaterial color="#448b7b"/></mesh></group>)}
    <group position={[-.35,bounce+.12,0]} rotation={[0,-.05-surprise*.18,0]}>
      {[-1,1].map(s=><group key={s} position={[s*.29,0,0]}><Box position={[0,.27,0]} size={[.25,.48,.28]} color="#335f70"/><Box position={[0,.12,.12]} size={[.43,.25,.61]} color="#f5a24d"/></group>)}
      <Box position={[0,1.04,0]} size={[.91,.92,.53]} color="#f5a24d"/>
      <Box position={[0,1.12,.294]} size={[.48,.38,.055]} color="#fff0be"/>
      <Ball position={[0,1.13,.345]} scale={.09} color="#50c6c0"/>
      <Box position={[0,1.58,0]} size={[.25,.22,.23]} color="#335f70"/>
      <group position={[0,2.02,0]} rotation={[0,0,-surprise*.12+Math.sin(t*2)*.025]}>
        <Box size={[1.28,.86,.68]} color="#f6b350"/>
        <Box position={[0,0,.363]} size={[1.07,.63,.07]} color="#263443"/>
        {[-1,1].map(s=><group key={s} position={[s*.255,.055,.42]}><Ball color="#a5fff0" scale={[.115,blink?.015:.145+surprise*.025,.035]}/><Ball position={[-.025,.045,.026]} color="#effff4" scale={.025}/></group>)}
        <Box position={[0,-.18,.42]} size={[.20-surprise*.11,.035+surprise*.08,.025]} color="#9be9dc"/>
        <Box position={[0,.57,0]} size={[.055,.32,.055]} color="#335f70"/>
        <Ball position={[0,.77,0]} scale={.1} color={f>75?'#abfff2':'#f37561'}/>
        {[-1,1].map(s=><Ball key={s} position={[s*.72,0,0]} scale={[.13,.21,.21]} color="#498a94"/>)}
      </group>
      <group position={[-.55,1.38,0]} rotation={[0,0,-.13]}><Box position={[0,-.27,0]} size={[.23,.55,.28]} color="#498a94"/><Ball position={[0,-.6,0]} scale={.17} color="#f5a24d"/></group>
      <group position={[.55,1.38,0]} rotation={[0,0,wave*(2.1+.3*Math.sin(t*15))+.16+surprise*.6]}><Box position={[0,-.27,0]} size={[.23,.55,.28]} color="#498a94"/><Ball position={[0,-.6,0]} scale={.18} color="#f5a24d"/></group>
    </group>
    <group position={[.99,1.65+.22*Math.sin(t*3),.1]} scale={Math.max(.001,reveal*.84)}>
      <Ball color="#fff3a6" scale={.22}/>
      <mesh rotation={[Math.PI/2+.3,t*1.5,0]}><torusGeometry args={[.38,.018,8,64]}/><meshBasicMaterial color="#fff5b4"/></mesh>
      {[0,1,2,3,4,5].map(i=><mesh key={i} position={[Math.cos(i*1.047+t)*.5,Math.sin(i*1.047+t)*.5,0]}><octahedronGeometry args={[.035]}/><meshBasicMaterial color="#fffbe1"/></mesh>)}
    </group>
  </>;
}
function Robot(){return <AbsoluteFill><ThreeCanvas width={1080} height={1920} camera={{fov:35,position:[.25,3.05,8.9]}} gl={{antialias:true}}><World/></ThreeCanvas><Audio src={staticFile('sonido.wav')}/></AbsoluteFill>}
registerRoot(()=> <Composition id="Robot" component={Robot} durationInFrames={150} fps={30} width={1080} height={1920}/>);
