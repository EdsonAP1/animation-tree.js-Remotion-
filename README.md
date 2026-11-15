# Animation Three.js + Remotion

Base abierta de código y plantillas para que diferentes personas creen videos con sus propios personajes, guiones, fondos, narraciones y formatos. Incluye ejemplos concretos; su configuración no establece valores por defecto para otras producciones. La separación completa entre motor y proyectos sigue en desarrollo.

Este repositorio publica **solo código y documentación**. No incluye videos renderizados, narraciones, imágenes, modelos descargados, herramientas binarias ni dependencias instaladas. Los archivos locales de esos tipos se excluyen con `.gitignore`.

## Continuar desde otro chat

Abre este repositorio como carpeta de trabajo y comienza por [AGENTS.md](AGENTS.md), que recoge las reglas generales, y [ESTADO_PROYECTO.md](ESTADO_PROYECTO.md), que resume el estado técnico, las limitaciones y lo pendiente.

Mensaje sugerido: «Lee AGENTS.md y ESTADO_PROYECTO.md. Trabajaremos en la producción local que te indicaré; usa sus propias referencias y preferencias». La guía [Proyectos](docs/PROYECTOS.md) explica dónde guardar las decisiones de cada producción. Los recursos locales excluidos de Git deben aportarse por separado al trabajar desde otra computadora.

## Proyectos incluidos

| Carpeta | Contenido |
| --- | --- |
| `prueba-robot/` | Proyecto ejecutable de Remotion + Three.js, prueba de robot y motor de animación adaptado. |
| `video-sin-dormir/` | Documentación, lanzadores de Windows y organización del proyecto de YouTube. |
| `plantillas/` | Plantillas originales de Alejandro, puente, audio sintetizado y herramientas de revisión. |
| `herramientas/` | Medición de movimiento, cortes y color. |
| `realista/` | Ejemplos y documentación de Blender. |
| `referencias/` | Documentación escrita sobre el estilo visual. Las imágenes de referencia no se publican aquí. |

## Planificar el movimiento y la narración

La guía [Lenguaje visual](docs/LENGUAJE_VISUAL.md) explica cinco técnicas adaptables: revelar texto con máscaras, encadenar acciones, dirigir la cámara al foco, transformar objetos para unir escenas y sincronizar entradas con la voz. Incluye parámetros de planificación, revisión y una tabla del soporte real del código.

Copia la [plantilla de montaje](docs/PLANTILLA_MONTAJE.md) a tu producción local para registrar menciones, tiempos, cámaras, contactos y transiciones. Son herramientas de planificación; el montaje sigue requiriendo programación y revisión por producción.

## Instalar y probar el robot

Requiere Node.js y Google Chrome o Microsoft Edge. Instala las dependencias desde la raíz del repositorio:

```powershell
cd prueba-robot
npm.cmd ci
npm.cmd run render
```

La prueba del robot genera sus propios sonidos y exporta `prueba-robot/out/robot-5s.mp4`. También puedes abrir `prueba-robot/RENDERIZAR.bat` en Windows.

## Renderizar el proyecto de YouTube

El motor usa hojas de poses ilustradas y escenarios de Three.js. Antes de renderizar, aporta tus propios recursos en `video-sin-dormir/public/`:

- `narracion.mp3`: narración de unos 321.65 segundos para el montaje incluido.
- `personaje-poses-v2.png`: tres poses, en una fila de tres celdas cuadradas.
- `personaje-acciones.png`: seis poses, en tres columnas y dos filas de celdas cuadradas.
- `personaje-emociones.png`: tres poses, en una fila.
- `personaje-final.png`: tres poses del desenlace, en una fila.

Las hojas deben tener transparencia, celdas del mismo tamaño y márgenes para evitar recortes. El diseño y los prompts se documentan en `video-sin-dormir/ACTIVOS_Y_PROMPTS.md` y `video-sin-dormir/PRUEBA_V2.md`. La imagen de referencia y los recursos usados en la producción local no se incluyen en esta publicación.

En Windows, abre `video-sin-dormir/RENDERIZAR_COMPLETO.bat`. Desde una terminal:

```powershell
cd prueba-robot
node render-completo.mjs --stills
node render-completo.mjs
```

El resultado se guarda en `video-sin-dormir/out/sin-dormir-completo.mp4`. Para usar otra narración o duración, ajusta `prueba-robot/src/dormir-story.ts` y los tiempos de `render-completo.mjs`. La transcripción y las mediciones de voz del montaje original son recursos locales; no están publicadas. El script de voz contiene los valores medidos para esa narración y deben revisarse al sustituirla.

El código del montaje está en `dormir-story.ts`; los personajes y objetos en `dormir-components.tsx`; los escenarios en `dormir-world.tsx`; la composición, cámaras y transiciones en `sin-dormir-completo.tsx`. `qa-dormir.mjs` comprueba el MP4 generado. Ejecuta estos scripts desde `prueba-robot/`.

La animación de personajes usa ilustraciones con deformaciones suaves sobre mallas; las hojas de poses son parte del trabajo de preparación de cada personaje. No es un sistema automático que convierta cualquier imagen en un personaje articulado completo.

## Origen y créditos

Basado en [shorts-animados-claude de Crea con LuisPa](https://github.com/luispablovillasenor-afk/shorts-animados-claude), a su vez basado en [claude-animated-shorts de Mr omi](https://github.com/mromidev/claude-animated-shorts).

Se conserva la licencia MIT y sus avisos de autoría en `LICENSE`. La documentación original se conserva en `README_ORIGINAL.md` y `SKILL.md`. Los enlaces a imágenes o videos de esa documentación se refieren a recursos no incluidos en esta copia de solo código; consulta el repositorio de origen para sus ejemplos.

Las dependencias y recursos externos tienen sus propias licencias. No se incluyen credenciales ni claves de proveedores de voz.
