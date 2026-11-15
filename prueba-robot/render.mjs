import {bundle} from '@remotion/bundler';
import {selectComposition,renderMedia,renderStill} from '@remotion/renderer';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
process.chdir(path.dirname(fileURLToPath(import.meta.url)));
fs.mkdirSync('out',{recursive:true});
// Original synthesized sound: soft pad, greeting chirps and discovery shimmer.
const rate=44100, n=rate*5, data=Buffer.alloc(n*2);
const notes=[[.45,660,.12],[.64,880,.18],[2.5,523,.25],[2.7,659,.25],[2.9,784,.35],[3.15,1046,.8]];
for(let i=0;i<n;i++){
 const t=i/rate;let v=0;
 const fade=Math.min(1,t*4,(5-t)*3);
 for(const hz of [130.81,196,261.63])v+=.025*Math.sin(2*Math.PI*hz*t)*fade;
 for(const [start,hz,len] of notes){const a=t-start;if(a>=0&&a<len)v+=.18*Math.sin(2*Math.PI*hz*a)*Math.sin(Math.PI*a/len)*Math.exp(-a*3)}
 data.writeInt16LE(Math.round(Math.max(-1,Math.min(1,v*4.68))*32767),i*2);
}
const header=Buffer.alloc(44);header.write('RIFF');header.writeUInt32LE(36+data.length,4);header.write('WAVEfmt ',8);header.writeUInt32LE(16,16);header.writeUInt16LE(1,20);header.writeUInt16LE(1,22);header.writeUInt32LE(rate,24);header.writeUInt32LE(rate*2,28);header.writeUInt16LE(2,32);header.writeUInt16LE(16,34);header.write('data',36);header.writeUInt32LE(data.length,40);
fs.writeFileSync('public/sonido.wav',Buffer.concat([header,data]));
const serveUrl=await bundle({entryPoint:path.resolve('src/index.tsx')});
const browserExecutable=['C:/Program Files/Google/Chrome/Application/chrome.exe','C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find(p=>fs.existsSync(p));
const opts={serveUrl,browserExecutable,chromiumOptions:{gl:'angle'}};
const composition=await selectComposition({...opts,id:'Robot'});
if(process.argv.includes('--stills')){
 for(const frame of [20,60,105,145]){await renderStill({...opts,composition,frame,output:path.resolve(`out/foto-${frame}.png`)}); console.log(`Foto ${frame}`)}
}else{
 let last=-1;
 await renderMedia({...opts,composition,codec:'h264',crf:18,concurrency:2,outputLocation:path.resolve('out/robot-5s.mp4'),onProgress:({progress})=>{const p=Math.floor(progress*10)*10;if(p!==last){console.log(`Render ${p}%`);last=p}}});
 console.log('Video terminado: '+path.resolve('out/robot-5s.mp4'));
}
