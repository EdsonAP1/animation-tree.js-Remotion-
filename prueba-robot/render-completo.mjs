import {bundle} from '@remotion/bundler';
import {selectComposition,renderMedia,renderStill,openBrowser} from '@remotion/renderer';
import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';import {spawnSync} from 'node:child_process';
process.chdir(path.dirname(fileURLToPath(import.meta.url)));
const out=path.resolve('../video-sin-dormir/out');fs.mkdirSync(path.join(out,'revision-completo'),{recursive:true});
fs.mkdirSync(path.resolve('../video-sin-dormir/work'),{recursive:true});
const browserExecutable=['C:/Program Files/Google/Chrome/Application/chrome.exe','C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find(p=>fs.existsSync(p));
const serveUrl=await bundle({entryPoint:path.resolve('src/sin-dormir-completo.tsx'),publicDir:path.resolve('../video-sin-dormir/public')});
const browserInstance=await openBrowser('chrome',{browserExecutable,chromiumOptions:{gl:'angle'}});
try{
 const opts={serveUrl,browserExecutable,puppeteerInstance:browserInstance,chromiumOptions:{gl:'angle'}};
 const composition=await selectComposition({...opts,id:'SinDormirCompleto'});
 if(process.argv.includes('--stills')){
  const times=process.argv.includes('--changes')?[32,235,239,297,307]:[1,12,18,25,32,49,63,74,83,89,96,115,130,144,151,162,171,185,190,203,218,239,254,266,277,289,297,307,320];
  for(const t of times){await renderStill({...opts,composition,frame:Math.floor(t*30),scale:.5,output:path.join(out,'revision-completo',`foto-${String(t).padStart(3,'0')}.png`)});console.log(`Foto ${t}s`)}
 }else{
  const started=Date.now();let last=-1;
  const base=path.resolve('../video-sin-dormir/work/master-base.mp4');
  await renderMedia({...opts,composition,codec:'h264',crf:18,concurrency:3,outputLocation:base,onProgress:({progress,renderedFrames})=>{const p=Math.floor(progress*100);if(p!==last){console.log(`Render ${p}% | ${renderedFrames}/9650 cuadros | ${Math.round((Date.now()-started)/1000)} s`);last=p}}});
  console.log('Ajustando nivel de la narración...');
  const mix=spawnSync(path.resolve('node_modules/@remotion/compositor-win32-x64-msvc/ffmpeg.exe'),['-y','-v','error','-i',base,'-i',path.resolve('../video-sin-dormir/public/narracion.mp3'),'-map','0:v:0','-map','1:a:0','-c:v','copy','-af','loudnorm=I=-14:TP=-1.5:LRA=11:measured_I=-23.86:measured_TP=-2.46:measured_LRA=2.40:measured_thresh=-34.26:offset=1.74:linear=false,apad','-t',String(9650/30),'-ar','48000','-c:a','aac','-b:a','256k','-movflags','+faststart',path.join(out,'sin-dormir-completo.mp4')],{stdio:'inherit'});
  if(mix.status!==0)throw new Error('Fallo al preparar audio final');
  console.log('VIDEO COMPLETO: '+path.join(out,'sin-dormir-completo.mp4'));
 }
}finally{await browserInstance.close({silent:true})}
