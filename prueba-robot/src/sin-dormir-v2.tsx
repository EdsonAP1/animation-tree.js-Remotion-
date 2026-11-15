import React,{useMemo,useLayoutEffect} from 'react';
import {AbsoluteFill,Audio,Composition,registerRoot,staticFile,useCurrentFrame} from 'remotion';
import {ThreeCanvas} from '@remotion/three';
import {useLoader,useThree} from '@react-three/fiber';
import * as T from 'three';
import {RoundedBoxGeometry} from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
const smooth=(a:number,b:number,f:number)=>{const x=Math.max(0,Math.min(1,(f-a)/(b-a)));return x*x*(3-2*x)};
function Box({p=[0,0,0],s=[1,1,1],c='#fff'}:any){const g=useMemo(()=>new RoundedBoxGeometry(...s,2,.05),[...s]);return <group position={p}><mesh geometry={g}><meshToonMaterial color={c}/></mesh><mesh geometry={g} scale={1.023}><meshBasicMaterial color="#14162b" side={T.BackSide}/></mesh></group>}
function Clock({p,scale=1,offset=0}:any){const f=useCurrentFrame();return <group position={p} scale={scale}><mesh rotation={[Math.PI/2,0,0]}><cylinderGeometry args={[.65,.65,.10,64]}/><meshToonMaterial color="#f4c96a"/></mesh><mesh position={[0,0,.061]}><circleGeometry args={[.59,64]}/><meshBasicMaterial color="#fff2c9"/></mesh>{Array.from({length:12},(_,i)=><Box key={i} p={[Math.sin(i*Math.PI/6)*.49,Math.cos(i*Math.PI/6)*.49,.08]} s={[.025,.04,.02]} c="#22253d"/>)}<group rotation={[0,0,-f*.025+offset]}><Box p={[0,.16,.10]} s={[.045,.35,.025]} c="#2a2c42"/></group><group rotation={[0,0,-f*.003+offset]}><Box p={[.12,0,.13]} s={[.26,.045,.025]} c="#2a2c42"/></group><mesh position={[0,0,.15]}><sphereGeometry args={[.05,12,8]}/><meshBasicMaterial color="#d58c40"/></mesh></group>}
function Actor({pose}:any){const f=useCurrentFrame();const {camera}=useThree();const source=useLoader(T.TextureLoader,staticFile('personaje-poses-v2.png'));
 const texture=useMemo(()=>{const t=source.clone();t.colorSpace=T.SRGBColorSpace;t.repeat.set(1/3,1);t.offset.set(pose/3,0);t.needsUpdate=true;return t},[source,pose]);
 const g=useMemo(()=>new T.PlaneGeometry(3.35,3.35,48,48),[]);
 const base=useMemo(()=>Float32Array.from(g.attributes.position.array),[g]);
 useLayoutEffect(()=>{const a=g.attributes.position;for(let i=0;i<a.count;i++){let x=base[i*3],y=base[i*3+1];const head=smooth(.25,1.25,y)*(1-smooth(.55,1.0,Math.abs(x)));const arm=smooth(.35,1.15,Math.abs(x))*smooth(-.2,.7,y);const theta=Math.sin(f/16)*.035;const htheta=head*theta;const dx=x,dy=y-.6;x=dx*Math.cos(htheta)-dy*Math.sin(htheta);y=.6+dx*Math.sin(htheta)+dy*Math.cos(htheta);y+=Math.sin(f/10+x*2)*.055*arm; x+=Math.sin(f/21)*.015*smooth(-1.5,.8,y);a.setXYZ(i,x,y,0)}a.needsUpdate=true;g.computeVertexNormals()},[f,g,base]);
 const rotation=Math.atan2(camera.position.x, camera.position.z-1.1);
 return <mesh geometry={g} position={[0,1.72+Math.sin(f/12)*.028,1.1]} rotation={[0,rotation,Math.sin(f/29)*.012]}><meshBasicMaterial map={texture} transparent side={T.DoubleSide} alphaTest={.01}/></mesh>
}
function Scene(){const f=useCurrentFrame(),{camera}=useThree();const shot=f<81?0:f<158?1:2;const u=shot===0?f/80:shot===1?(f-81)/76:(f-158)/141;
 useLayoutEffect(()=>{if(shot===0){camera.position.set(.1+u*.20,2.73,5.1-u*.35);camera.lookAt(.02,2.48,1.1)}else if(shot===1){camera.position.set(-3.9+u*.35,1.35+u*.12,7.2-u*.45);camera.lookAt(.55,2.18,.55)}else{camera.position.set(4.0-u*.7,4.8-u*.25,9.2-u*.35);camera.lookAt(.25,1.85,.15)}camera.updateProjectionMatrix()},[f,camera]);
 return <><color attach="background" args={['#19233d']}/><ambientLight intensity={1.5}/><directionalLight position={[-4,7,5]} intensity={2} color="#c2deff"/><pointLight position={[3,2,-1]} intensity={22} color="#ffbd84"/>
 <Box p={[0,-.15,0]} s={[18,.25,18]} c="#7883ad"/><Box p={[0,4,-3.5]} s={[18,8,.2]} c="#7779a5"/>
 <Box p={[-6,3.5,0]} s={[.2,7,7]} c="#686f9a"/><Box p={[0,.17,-3.33]} s={[18,.3,.12]} c="#bac6e0"/>
 {Array.from({length:17},(_,i)=><Box key={i} p={[-8+i,0,0]} s={[.014,.01,16]} c="#616c93"/>)}
 <Box p={[-2.7,3.2,-3.27]} s={[3.5,2.8,.18]} c="#272c53"/><Box p={[-2.7,3.2,-3.15]} s={[3.18,2.48,.08]} c="#0c1945"/>
 <mesh position={[-3.38,3.7,-3.09]}><circleGeometry args={[.30,48]}/><meshBasicMaterial color="#fff0bd"/></mesh>
 {Array.from({length:20},(_,i)=><mesh key={i} position={[-4.1+(i*1.73%2.8),2.2+(i*.91%2),-3.06]} rotation={[0,0,.78]}><planeGeometry args={[.02,.02]}/><meshBasicMaterial color="#b9d8ff"/></mesh>)}
 <Box p={[-2.7,3.2,-3.01]} s={[.055,2.48,.09]} c="#c7c9e9"/><Box p={[-2.7,3.2,-3.01]} s={[3.18,.055,.09]} c="#c7c9e9"/>
 <Box p={[3.35,.48,-.55]} s={[2.8,.65,4.05]} c="#6d597e"/><Box p={[3.35,.89,-.55]} s={[2.75,.3,3.98]} c="#f4e3d6"/><Box p={[3.35,1.08,-.1]} s={[2.77,.16,2.99]} c="#a98fc3"/><Box p={[3.35,1.18,-2.05]} s={[1.8,.26,.7]} c="#ffeed6"/><Box p={[3.35,1.25,-2.65]} s={[2.95,1.9,.18]} c="#81688e"/>
 <Box p={[-3.5,1.12,.3]} s={[2.6,.16,1.3]} c="#dbaf8b"/>{[-4.5,-2.5].map(x=><Box key={x} p={[x,.53,.3]} s={[.13,1.04,1]} c="#4c527b"/>)}
 <Box p={[-3.5,1.85,-.05]} s={[1.2,.86,.1]} c="#222b49"/><Box p={[-3.5,1.85,.02]} s={[1.05,.7,.025]} c="#72bac9"/><Box p={[-3.5,1.29,-.02]} s={[.15,.34,.12]} c="#343953"/>
 <mesh position={[0,.016,1]} rotation={[-Math.PI/2,0,0]} scale={[1.4,.6,1]}><circleGeometry args={[1,64]}/><meshBasicMaterial color="#343354" opacity={.35} transparent/></mesh>
 <Clock p={[1.9,3.3,.4]} scale={shot===0?.001:1.25}/>
 {shot===2&&[-1,0,1].map((x,i)=><Clock key={x} p={[-2.2+x*1.25,3.6+i*.13,-.2-i*.4]} scale={.5+smooth(165+i*20,184+i*20,f)*.18} offset={i*2}/>)}
 <Actor pose={shot===0?0:shot===1?1:2}/>
 </>;
}
function Video(){const f=useCurrentFrame();const dist=Math.abs(f-81);const blur=dist<5?(1-dist/5)*9:0;const flash=dist<4?(1-dist/4)*.28:0;const iris=Math.max(0,1-Math.abs(f-158)/7);
 return <AbsoluteFill style={{background:'#19233d'}}><AbsoluteFill style={{filter:`blur(${blur}px)`,transform:`scale(${1+blur*.003}) translateX(${dist<5?Math.sin((f-81)*.7)*18:0}px)`}}><ThreeCanvas width={1920} height={1080} camera={{fov:40,position:[.1,2.73,5.1]}} gl={{antialias:true}}><Scene/></ThreeCanvas></AbsoluteFill><AbsoluteFill style={{background:'#d5eaff',opacity:flash,pointerEvents:'none'}}/>{iris>0?<AbsoluteFill style={{background:'#fff0bb',clipPath:`circle(${iris*130}% at 70% 35%)`,pointerEvents:'none'}}/>:null}<Audio src={staticFile('narracion.mp3')}/></AbsoluteFill>}
registerRoot(()=> <Composition id="SinDormirV2" component={Video} durationInFrames={300} fps={30} width={1920} height={1080}/>);
