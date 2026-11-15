import {bundle} from '@remotion/bundler';
import {selectComposition,renderMedia,renderStill} from '@remotion/renderer';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
process.chdir(path.dirname(fileURLToPath(import.meta.url)));
const out=path.resolve('../video-sin-dormir/out');fs.mkdirSync(out,{recursive:true});
const serveUrl=await bundle({entryPoint:path.resolve('src/sin-dormir.tsx'),publicDir:path.resolve('../video-sin-dormir/public')});
const browserExecutable=['C:/Program Files/Google/Chrome/Application/chrome.exe','C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find(p=>fs.existsSync(p));
const opts={serveUrl,browserExecutable,chromiumOptions:{gl:'angle'}};
const composition=await selectComposition({...opts,id:'SinDormirPrueba'});
if(process.argv.includes('--stills')){
 for(const frame of [0,65,145,265]){await renderStill({...opts,composition,frame,output:path.join(out,`prueba-foto-${frame}.png`)});console.log(`Foto ${frame}`)}
}else{
 let last=-1;
 await renderMedia({...opts,composition,codec:'h264',crf:18,concurrency:2,outputLocation:path.join(out,'sin-dormir-prueba-10s.mp4'),onProgress:({progress})=>{const p=Math.floor(progress*10)*10;if(p!==last){console.log(`Render ${p}%`);last=p}}});
 console.log('Video terminado: '+path.join(out,'sin-dormir-prueba-10s.mp4'));
}
