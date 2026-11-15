# ¿Qué pasaría si nunca necesitaras dormir?

Video horizontal para YouTube, 1920 × 1080, 30 fps, 9650 fotogramas (5 min 21.667 s). Narración original del usuario, sin recortar la introducción ni cambiar el texto. El audio fuente dura 321.646 s; la imagen se extiende hasta el límite del siguiente fotograma.

## Resultado

`out/sin-dormir-completo.mp4` es el video final, renderizado y revisado. El registro de comprobaciones estará en `work/qa-final.json` y los metadatos en `work/metadata-final.json`. No confundir con los avances de diez segundos, que se conservan por separado.

87 tomas, 61 momentos del guion y 10 escenarios: dormitorio, estudio, cocina, reunión, calle, tren, hotel, jardín, oficina y espacio visual para explicar el tiempo. Apertura basada en la prueba V2 aprobada. Personaje de ilustración con 15 poses, deformaciones suaves y desplazamientos de cámara; no es un personaje 3D con articulación anatómica completa.

## Archivos y edición

- `public/narracion.mp3`: archivo de voz original, intacto.
- `public/personaje-referencia.jpg`: diseño original del usuario.
- `public/personaje-*.png`: hojas de poses para animación.
- `work/narracion.srt`, `work/narracion.json`: transcripción local y tiempos; sirven para montar, no se incrustan como subtítulos.
- `work/frases-con-tiempos.json`: 129 segmentos temporales detectados.
- `work/tomas.json`: cuadro de inicio y final de cada toma.
- `ACTIVOS_Y_PROMPTS.md`: procedencia y prompts de los activos nuevos.

El motor y las dependencias compartidas están en la carpeta hermana `prueba-robot`:

- `src/dormir-story.ts`: montaje y duración.
- `src/dormir-components.tsx`: personaje y objetos comunes.
- `src/dormir-world.tsx`: escenarios.
- `src/dormir-opening.tsx`: apertura aprobada.
- `src/sin-dormir-completo.tsx`: cámara, transiciones y composición.
- `render-completo.mjs`: render y ajuste final de nivel de voz.
- `qa-dormir.mjs`: comprobación de metadatos y decodificación de todos los fotogramas.

## Repetir el render

Doble clic en `RENDERIZAR_COMPLETO.bat`. Requiere Node.js, Chrome o Edge y las dependencias ya instaladas en la carpeta hermana `prueba-robot`. Muestra el progreso y conserva la ventana abierta al terminar. La exportación tarda más que las pruebas cortas.

Para reinstalar las dependencias, abre una terminal dentro de `prueba-robot` y ejecuta `npm.cmd ci`. Para revisar fotogramas: `node render-completo.mjs --stills`.

La transcripción se hizo localmente con [whisper.cpp](https://github.com/ggml-org/whisper.cpp), versión 1.8.2 y modelo multilingüe base. La descarga de esa herramienta queda en `tools/`, no se necesita para repetir el render. La transcripción automática puede contener errores de escritura; el montaje conserva el audio original y usa los tiempos de las frases.

La voz se ajusta en nivel al exportar, sin música añadida. El proyecto no publica ni sube el video a YouTube.

