# Prueba: robot explorador

Animación original de cinco segundos, vertical 1080 × 1920, 30 fps.
Un robot saluda y descubre una esfera luminosa. Música y efectos sintetizados originales, sin narración ni recursos externos.

Usa el motor de la opción caricatura del repositorio: Remotion + Three.js.
Es una escena pequeña e independiente; las plantillas originales permanecen en sus carpetas.

- `out/robot-5s.mp4`: video final.
- `src/index.tsx`: personaje, escenario y animación.
- `render.mjs`: generación de sonido y exportación.
- `RENDERIZAR.bat`: doble clic para repetir el render en Windows.

Requiere Node.js y Chrome o Edge. Las dependencias están fijadas en `package-lock.json`.
Para reinstalarlas: `npm.cmd ci`. Para previsualizar: `npm.cmd run preview`.
Para sacar fotogramas: `node render.mjs --stills`.

Se eligió un robot porque permite evaluar poses, expresiones y cámara sin preparar un personaje humano complejo.
