import {bundle} from '@remotion/bundler';
import {selectComposition,renderMedia,renderStill} from '@remotion/renderer';
import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';
process.chdir(path.dirname(fileURLToPath(import.meta.url)));
const out=path.resolve('../video-sin-dormir/out');
const serveUrl=await bundle({entryPoint:path.resolve('src/sin-dormir-v2.tsx'),publicDir:path.resolve('../video-sin-dormir/public')});
const browserExecutable=['C:/Program Files/Google/Chrome/Application/chrome.exe','C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find(p=>fs.existsSync(p));
const opts={serveUrl,browserExecutable,chromiumOptions:{gl:'angle'}};
const composition=await selectComposition({...opts,id:'SinDormirV2'});
if(process.argv.includes('--stills')){for(const frame of [30,125,240]){await renderStill({...opts,composition,frame,output:path.join(out,`v2-foto-${frame}.png`)});console.log(`Foto ${frame}`)}}
else{let last=-1;await renderMedia({...opts,composition,codec:'h264',crf:18,concurrency:2,outputLocation:path.join(out,'sin-dormir-prueba-10s-v2.mp4'),onProgress:({progress})=>{let p=Math.floor(progress*10)*10;if(p!==last){console.log(`Render ${p}%`);last=p}}});console.log('Terminado')}
