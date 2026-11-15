# Avance de apertura

Prueba de 300 fotogramas a 30 fps, horizontal 1920 × 1080. Incluye los primeros diez segundos de la narración original del usuario, sin acelerar ni cambiar la voz, sin música añadida.

Personaje reconstruido mediante dibujo vectorial en Canvas2D, con cabeza, cara, extremidades y gestos animados por fotograma. La textura se integra en un dormitorio 3D hecho con Three.js y se exporta mediante Remotion. Es una interpretación animable de la referencia, pendiente de revisión del usuario antes de extenderla al resto del video.

Acción: presentación del protagonista, aparición de un reloj con ocho horas extra, mirada y gesto hacia el reloj y calendario que avanza para representar las noches siguientes. La imagen usa las pausas de apertura detectadas en la narración; no se ha generado todavía una transcripción de todo el audio con tiempos por palabra.

Archivos de edición en la carpeta hermana `prueba-robot`, donde ya están instaladas las dependencias compartidas:

- `src/sin-dormir.tsx`: escena y personaje.
- `render-dormir.mjs`: exportación de la prueba.
- `../video-sin-dormir/public/narracion.mp3`: voz original.
- `../video-sin-dormir/out/sin-dormir-prueba-10s.mp4`: resultado.

Para repetir el render: doble clic en `RENDERIZAR_PRUEBA.bat` desde esta carpeta. No renderiza los cinco minutos restantes.
