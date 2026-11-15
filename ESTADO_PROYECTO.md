# Estado del proyecto

Actualizado: 15 de noviembre de 2026.

## Objetivo

Producir videos animados para YouTube con un personaje consistente, narración aportada por el usuario, escenas variadas y un proceso cada vez más reutilizable. Repositorio: https://github.com/EdsonAP1/animation-tree.js-Remotion-

## Completado y aprobado

- Se descargó el repositorio de Crea con LuisPa y se conservaron sus plantillas y licencia MIT.
- Se instaló un proyecto funcional de Remotion + Three.js en `prueba-robot/` y se creó una prueba original de robot de cinco segundos.
- Se produjo el video «¿Qué pasaría si nunca necesitaras dormir?» con el audio del usuario y un personaje turquesa de referencia.
- El usuario rechazó la primera adaptación simplificada y aprobó la prueba V2, con dibujo más fiel, tres ángulos y dos transiciones.
- Se terminó el video completo: 321.666667 s, 1920 × 1080, 30 fps, 9650 fotogramas, 87 tomas, 61 momentos y 10 escenarios. El usuario aprobó el resultado.
- Se comprobó la decodificación de los 9650 fotogramas, la presencia de voz, la duración y muestras visuales de los escenarios. Detalles en `video-sin-dormir/REVISION_FINAL.md`. Esta comprobación corresponde al archivo producido localmente; no supone que una futura regeneración ya esté verificada.
- Se creó una miniatura aprobada. Título recomendado: «¿Y si NUNCA necesitaras dormir? El precio de ganar 8 horas». El usuario expresó intención de publicarlo en YouTube; no se ha comprobado esa publicación.
- Se publicó en `main` el código y la documentación, sin recursos audiovisuales ni dependencias. Primer commit: `9a253a9`.

## Dónde está cada cosa

- `README.md`: instalación, recursos omitidos y origen del proyecto.
- `AGENTS.md`: reglas de trabajo y preferencias aprobadas.
- `prueba-robot/src/dormir-story.ts`: montaje y tiempos específicos del video.
- `prueba-robot/src/dormir-components.tsx`: poses, personajes y objetos comunes.
- `prueba-robot/src/dormir-world.tsx`: escenarios.
- `prueba-robot/src/dormir-opening.tsx`: apertura aprobada.
- `prueba-robot/src/sin-dormir-completo.tsx`: composición, cámara y transiciones.
- `prueba-robot/render-completo.mjs`: render y ajuste de voz.
- `prueba-robot/qa-dormir.mjs`: comprobación del MP4.
- `video-sin-dormir/ACTIVOS_Y_PROMPTS.md`: activos generados y prompts.
- `video-sin-dormir/publicacion/TITULO_Y_MINIATURA.md`: propuesta de publicación.

## Recursos locales excluidos de Git

Las hojas de poses y la narración están en `video-sin-dormir/public/` en la computadora de producción. El video está en `video-sin-dormir/out/sin-dormir-completo.mp4`. La miniatura está en `video-sin-dormir/publicacion/`. Las pruebas se conservan en los directorios `out/`.

Una copia nueva desde GitHub no contiene esos archivos. El README describe nombres y distribución de las hojas de poses. Comprobar si existen en el equipo antes de pedirlos o intentar renderizar.

La transcripción se obtuvo con Whisper.cpp local, versión 1.8.2, modelo multilingüe base. Las herramientas descargadas y la transcripción de la producción están excluidas de Git. La transcripción no está integrada todavía en un comando general de producción.

## Limitaciones actuales

- Hay rutas, duración, conteos de fotogramas, mediciones de voz y recursos fijados para el primer video.
- El motor y los proyectos aún comparten la carpeta llamada `prueba-robot`.
- Las escenas y sus acciones se planificaron manualmente usando los tiempos de la narración.
- Las poses son ilustraciones con deformaciones suaves; no hay articulación completa ni sincronización labial general.
- Los renderizadores están preparados principalmente para Windows y buscan Chrome o Edge en rutas conocidas.
- Todavía no hay panel visual, configuración general por proyecto ni recuperación del render por escenas.

## Mejoras propuestas, todavía no implementadas

1. Configuración independiente por video: recursos, formato, duración y estilo.
2. Medición y transcripción automática del audio; normalización calculada para cada narración.
3. Render por escenas con reutilización de resultados y recuperación tras fallos.
4. Biblioteca de personajes, acciones, cámaras y escenarios con nombres claros.
5. Panel para preparar proyectos, editar el montaje y generar avances.
6. Paquete de publicación con miniatura, título y subtítulos opcionales.

Prioridad sugerida: configuración de proyectos, sincronización de audio y render recuperable. Esta lista es una propuesta; confirmar el alcance del siguiente encargo a partir de la solicitud actual del usuario.

## Exploración editorial en curso

El usuario quiere explorar ideas de contenido en dos ámbitos: finanzas/Bitcoin/inversiones e inteligencia artificial/tecnología. Todavía no se ha elegido un tema nuevo ni autorizado producir otro video. Las afirmaciones sobre ingresos o viralidad de estos nichos requieren evidencia; no asumir como hechos los rankings de una captura.
