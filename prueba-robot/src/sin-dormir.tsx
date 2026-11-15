import React,{useMemo,useLayoutEffect} from 'react';
import {AbsoluteFill,Audio,Composition,registerRoot,staticFile,useCurrentFrame} from 'remotion';
import {ThreeCanvas} from '@remotion/three';
import {useThree} from '@react-three/fiber';
import * as T from 'three';
import {RoundedBoxGeometry} from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

const ease=(a:number,b:number,f:number)=>{let x=Math.max(0,Math.min(1,(f-a)/(b-a)));return x*x*(3-2*x)};
const INK='#11132b';
function Box({p=[0,0,0],s=[1,1,1],c='#fff',r=[0,0,0]}:any){const g=useMemo(()=>new RoundedBoxGeometry(...s,2,.05),[...s]);return <group position={p} rotation={r}><mesh geometry={g}><meshToonMaterial color={c}/></mesh><mesh geometry={g} scale={1.025}><meshBasicMaterial color={INK} side={T.BackSide}/></mesh></group>}
function useCanvas(draw:(c:CanvasRenderingContext2D)=>void,w=800,h=1000){const v=useMemo(()=>{const canvas=document.createElement('canvas');canvas.width=w;canvas.height=h;const texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;return {canvas,texture}},[]);draw(v.canvas.getContext('2d')!);v.texture.needsUpdate=true;return v.texture}
function Character(){
 const f=useCurrentFrame();
 const tex=useCanvas(c=>{
  c.clearRect(0,0,800,1000);c.lineCap='round';c.lineJoin='round';
  const excited=ease(28,65,f),rise=ease(16,68,f); const sway=Math.sin(f/18)*5;
  function path(d:string,fill:string|CanvasGradient,stroke=INK,width=13){const p=new Path2D(d);c.fillStyle=fill;c.strokeStyle=stroke;c.lineWidth=width;c.fill(p);c.stroke(p)}
  const body=c.createLinearGradient(290,340,470,820);body.addColorStop(0,'#8cffd8');body.addColorStop(.33,'#00e1ed');body.addColorStop(.72,'#0096ed');body.addColorStop(1,'#7773e2');
  c.save();c.translate(sway,-Math.sin(f/13)*4);
  // Springy legs and broad cartoon feet.
  path('M365 625 Q335 728 308 854 Q300 885 266 894 Q243 910 256 933 Q270 951 313 941 Q352 932 362 899 L421 704 Z',body);
  path('M412 630 Q463 730 490 854 L532 899 Q551 921 531 938 Q509 954 487 934 L454 910 Q439 896 435 871 L379 710 Z',body);
  // A curved torso keeps the stickman silhouette from the reference.
  path('M367 355 Q354 459 370 530 Q374 580 343 646 Q384 686 441 649 Q421 593 429 526 Q437 434 413 355 Z',body);
  // Left arm gestures toward the clock; right arm rises in astonishment.
  c.save();c.translate(367,405);c.rotate(-.15-excited*.35);
  path('M0 0 Q-70 40 -120 91 Q-158 116 -181 75 L-195 54 Q-205 34 -222 46 Q-235 54 -226 76 L-208 115 Q-175 163 -127 143 Q-49 120 24 46 Z',body);
  path('M-214 70 Q-245 49 -247 24 Q-245 8 -232 16 L-218 36 L-223 1 Q-219 -17 -206 -4 L-193 29 L-188 -1 Q-177 -12 -171 3 L-169 38 Q-153 18 -146 33 Q-143 47 -160 76 L-183 89 Z',body,INK,10);
  c.restore();
  c.save();c.translate(418,410);c.rotate(-rise*.92+Math.sin(f/16)*.035);
  path('M0 0 Q67 30 85 114 Q93 157 122 156 L140 155 L145 195 Q67 220 42 149 Q20 81 -15 54 Z',body);
  path('M131 156 Q132 127 145 133 L153 153 L163 119 Q174 106 180 121 L177 149 L194 128 Q209 121 210 138 L191 166 Q214 154 222 166 Q227 180 203 190 L180 203 Q145 213 133 189 Z',body,INK,10);
  c.restore();
  // Oversized head, cyan highlights and expressive independently drawn face.
  c.save();c.translate(393,239);c.rotate(Math.sin(f/30)*.04-excited*.055);
  const head=c.createRadialGradient(-45,-65,8,0,0,164);head.addColorStop(0,'#a6ffe1');head.addColorStop(.48,'#13f1e6');head.addColorStop(.83,'#00b9f3');head.addColorStop(1,'#7979dc');
  c.beginPath();c.ellipse(0,0,154,153,0,0,Math.PI*2);c.fillStyle=head;c.fill();c.strokeStyle=INK;c.lineWidth=14;c.stroke();
  c.beginPath();c.ellipse(-30,-54,91,66,-.35,Math.PI,Math.PI*1.65);c.strokeStyle='#b1ffe5';c.lineWidth=9;c.stroke();
  const blink=(f%87>81)? .10:1;
  for(const s of [-1,1]){
   c.save();c.translate(s*58,-22);c.scale(1,blink);
   path('M-38 27 Q-46 -55 -6 -57 Q35 -58 40 27 Q5 12 -38 27 Z','#f5ffff',INK,8);
   c.beginPath();c.ellipse(8+excited*4,0,12,25,0,0,Math.PI*2);c.fillStyle='#080d18';c.fill();c.beginPath();c.ellipse(13,-10,4,7,0,0,Math.PI*2);c.fillStyle='white';c.fill();c.restore();
  }
  c.strokeStyle=INK;c.lineWidth=10;
  c.beginPath();c.moveTo(-103,-85);c.quadraticCurveTo(-70,-112-excited*9,-32,-83);c.stroke();
  c.beginPath();c.moveTo(30,-90);c.quadraticCurveTo(70,-120-excited*9,103,-83);c.stroke();
  path(`M-67 56 Q0 ${86+excited*35} 69 40 Q58 ${119+excited*15} 0 117 Q-48 113 -67 56 Z`,'#101020',INK,8);
  path('M-55 62 Q0 86 54 50 L43 74 Q-4 94 -47 76 Z','#fff',INK,2);
  c.beginPath();c.ellipse(20,108,27,10,-.18,Math.PI,Math.PI*2);c.fillStyle='#f572a5';c.fill();
  c.restore();c.restore();
 });
 return <mesh position={[0,1.85,1.1]}><planeGeometry args={[2.96,3.70]}/><meshBasicMaterial map={tex} transparent side={T.DoubleSide}/></mesh>
}
function Clock(){const f=useCurrentFrame(),show=ease(20,50,f);const tex=useCanvas(c=>{c.clearRect(0,0,800,1000);c.translate(400,500);c.fillStyle='#fff3c1';c.strokeStyle=INK;c.lineWidth=15;c.beginPath();c.arc(0,0,250,0,Math.PI*2);c.fill();c.stroke();c.strokeStyle='#e9ac49';c.lineWidth=12;c.beginPath();c.arc(0,0,224,-Math.PI/2,-Math.PI/2+Math.PI*2*ease(18,75,f));c.stroke();for(let i=0;i<12;i++){c.save();c.rotate(i*Math.PI/6);c.fillStyle=INK;c.fillRect(-4,-202,8,17);c.restore()}c.font='bold 142px Arial';c.textAlign='center';c.fillStyle=INK;c.fillText('+8',0,30);c.font='bold 31px Arial';c.fillStyle='#855e42';c.fillText('HORAS',0,93);c.setTransform(1,0,0,1,0,0)});
 return <group position={[2.05,2.85+Math.sin(f/22)*.065,.65]} scale={Math.max(.001,show)}><mesh><planeGeometry args={[2.8,3.5]}/><meshBasicMaterial map={tex} transparent/></mesh>{Array.from({length:9},(_,i)=><mesh key={i} position={[Math.cos(i*.7+f/110)*1.13,Math.sin(i*.7+f/110)*1.13,.05]} rotation={[0,0,f/25+i]} scale={.035+.015*Math.sin(i+f/9)}><octahedronGeometry/><meshBasicMaterial color="#ffe59b"/></mesh>)}</group>
}
function Calendar(){const f=useCurrentFrame(),a=ease(162,190,f);const tex=useCanvas(c=>{c.clearRect(0,0,800,1000);c.lineJoin='round';c.lineWidth=12;c.strokeStyle=INK;c.fillStyle='#fff2e1';c.beginPath();c.roundRect(155,240,490,490,25);c.fill();c.stroke();c.fillStyle='#f26789';c.fillRect(163,248,474,100);c.font='bold 38px Arial';c.fillStyle='white';c.textAlign='center';c.fillText('CADA NOCHE',400,315);c.fillStyle='#222344';c.font='bold 230px Arial';c.fillText(String(1+Math.floor(Math.max(0,f-169)/21)),400,593);c.font='bold 35px Arial';c.fillStyle='#806881';c.fillText('OTRAS 8 HORAS',400,665)});return <mesh position={[-2.18,2.55,.35]} scale={Math.max(.001,a)} rotation={[0,0,Math.sin(f/15)*.04]}><planeGeometry args={[2.25,2.8]}/><meshBasicMaterial map={tex} transparent/></mesh>}
function Room(){
 const f=useCurrentFrame(),{camera}=useThree();
 useLayoutEffect(()=>{camera.position.set(.7-f*.0014,3.55-f*.0008,10.65-f*.0014);camera.lookAt(0,1.95,0);camera.updateProjectionMatrix()},[camera,f]);
 return <>
  <color attach="background" args={['#242449']}/><ambientLight intensity={1.35}/><directionalLight position={[-3,7,5]} intensity={2.1} color="#d4e4ff"/><pointLight position={[3,2,0]} intensity={12} color="#ffbc91"/>
  <Box p={[0,-.12,0]} s={[12,.2,10]} c="#7a81b3"/>
  {Array.from({length:12},(_,i)=><Box key={i} p={[-5.5+i,.001,0]} s={[.018,.01,10]} c="#636b9d"/>)}
  <Box p={[0,2.8,-3]} s={[12,5.6,.2]} c="#797da9"/><Box p={[0,.17,-2.84]} s={[12,.3,.12]} c="#b8bce1"/>
  <Box p={[-2.65,3,-2.78]} s={[3.2,2.5,.16]} c="#292d57"/>
  <Box p={[-2.65,3,-2.67]} s={[2.91,2.22,.08]} c="#111d4e"/>
  <mesh position={[-3.3,3.5,-2.59]}><circleGeometry args={[.30,40]}/><meshBasicMaterial color="#fff1b9"/></mesh>
  {[[-1.7,3.6],[-2.1,2.4],[-3.6,2.6],[-2.6,3.8],[-1.6,2.9]].map(([x,y],i)=><mesh key={i} position={[x,y,-2.57]} rotation={[0,0,Math.PI/4]} scale={.027+.008*Math.sin(f/15+i)}><planeGeometry args={[1,1]}/><meshBasicMaterial color="#d6e8ff"/></mesh>)}
  <Box p={[-2.65,3,-2.53]} s={[.065,2.22,.08]} c="#c7c9e9"/><Box p={[-2.65,3,-2.53]} s={[2.91,.065,.08]} c="#c7c9e9"/>
  <Box p={[3.2,.5,-.4]} s={[2.8,.65,3.9]} c="#74598d"/><Box p={[3.2,.87,-.4]} s={[2.72,.35,3.8]} c="#f2d9df"/>
  <Box p={[3.2,1.08,-.03]} s={[2.77,.16,2.95]} c="#ad8ec1"/><Box p={[3.2,1.2,-1.7]} s={[1.65,.28,.72]} c="#fff0db"/><Box p={[3.2,1.1,-2.43]} s={[2.9,1.65,.15]} c="#816296"/>
  <Box p={[-3.45,1.12,.25]} s={[2.7,.18,1.35]} c="#e5b18c"/>
  {[-4.5,-2.4].map(x=><Box key={x} p={[x,.53,.27]} s={[.15,1.05,.95]} c="#51547d"/>)}
  <Box p={[-3.55,1.83,-.13]} s={[1.22,.86,.1]} c="#282c50"/><Box p={[-3.55,1.83,-.065]} s={[1.06,.68,.035]} c="#86c4df"/><Box p={[-3.55,1.29,-.12]} s={[.14,.34,.12]} c="#363754"/>
  <Box p={[-3.45,1.26,.60]} s={[1.0,.05,.34]} c="#444967"/>
  <mesh rotation={[-Math.PI/2,0,0]} position={[.1,.015,1]} scale={[1.4,.64,1]}><circleGeometry args={[1,64]}/><meshBasicMaterial color="#45436e" transparent opacity={.32}/></mesh>
  <Clock/><Calendar/><Character/>
 </>;
}
function Preview(){return <AbsoluteFill><ThreeCanvas width={1920} height={1080} camera={{fov:38,position:[.7,3.55,10.65]}} gl={{antialias:true}}><Room/></ThreeCanvas><Audio src={staticFile('narracion.mp3')}/></AbsoluteFill>}
registerRoot(()=> <Composition id="SinDormirPrueba" component={Preview} durationInFrames={300} fps={30} width={1920} height={1080}/>);
