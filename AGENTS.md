# Instrucciones del proyecto

## Al comenzar una tarea

Lee `ESTADO_PROYECTO.md` y `README.md`, revisa el estado de Git y los archivos relevantes antes de cambiar el código. Las instrucciones actuales del usuario prevalecen sobre las preferencias históricas registradas aquí. No dependas de haber visto el chat anterior.

Habla en español claro. El usuario decide el tema, el guion, los personajes y el estilo. Trabaja sobre lo ya aprobado y evita repetir preguntas resueltas. Antes de pedir recursos, comprueba si existen localmente: muchos archivos están excluidos de Git a propósito.

## Propósito y decisiones vigentes

- Crear contenido animado para YouTube con Remotion y Three.js, usando personajes ilustrados sobre escenarios 3D.
- El usuario genera la narración en ElevenLabs y entrega el audio. Conserva la voz y el texto; adapta la imagen a su duración. No generes una voz de reemplazo sin que se solicite.
- Para el video actual se aprobó formato horizontal 16:9, 1920 × 1080, 30 fps. Otros formatos se eligen según el nuevo encargo.
- El personaje actual es un stickman turquesa, de cabeza redonda, ojos blancos expresivos, contornos negros gruesos, sombras azules/violetas y luces menta. Las hojas de poses V2 y posteriores fueron aprobadas.
- La primera versión vectorial simplificada fue rechazada: no sustituir silenciosamente el personaje de referencia por un diseño más sencillo. Revisar la referencia real antes de crear variantes.
- Variar poses, encuadres y transiciones con intención narrativa. Se aprobaron primeros planos, contrapicados, picados y movimientos suaves de cámara. Generar por fotogramas no garantiza por sí solo una animación expresiva.
- Para un personaje o estilo nuevo, preparar un avance corto de unos diez segundos para revisión antes de extenderlo al video completo. Una aprobación existente permite continuar dentro de ese alcance.
- El sistema actual usa ilustraciones con deformaciones suaves sobre mallas. No describirlo como un personaje 3D completamente articulado ni prometer animación automática de cualquier imagen.

## Recursos y privacidad del repositorio

- Publicar únicamente código y documentación. Mantener fuera de Git videos, audios, imágenes, miniaturas, herramientas binarias, modelos descargados, dependencias, cachés y temporales.
- Respetar `.gitignore`. No usar `git add -f` para incluir recursos excluidos sin una solicitud explícita que cambie esa regla.
- No guardar claves, tokens o credenciales en código, documentos ni commits.
- Conservar `LICENSE` y los créditos originales de Mr omi y Crea con LuisPa. `README_ORIGINAL.md` conserva la guía de origen.
- El remoto configurado identifica el destino del repositorio; realizar publicaciones según el alcance autorizado por el usuario en la tarea.
- Conservar las producciones y las pruebas locales. Crear versiones nuevas para cambios visuales y no borrar archivos ajenos a la tarea.

## Trabajo y validación

- Los scripts de Node se ejecutan desde `prueba-robot/`. Allí están `package.json`, el archivo de dependencias fijadas y el motor compartido. Consultar el README para los comandos y recursos requeridos.
- La prueba del robot sintetiza su audio y sirve como ejemplo independiente. El video completo requiere la narración y las hojas de poses locales.
- Revisar fotogramas de los escenarios afectados antes de un render largo. Validar duración, dimensiones, presencia de audio y decodificación del MP4 final. Distinguir revisión técnica de evaluación artística.
- Al cambiar narración o duración, revisar montaje, límites de fotogramas, normalización de voz y comprobaciones: actualmente contienen valores específicos del primer video.
- Comprobar programas y recursos disponibles antes de instalar o renderizar. No afirmar que se utilizó GPU sin evidencia.
- Para historias de hipótesis, separar lo imaginario de las afirmaciones comprobables. Investigar datos actuales y no presentar especulaciones como hechos.

## Continuidad entre chats

Después de un cambio importante, actualizar `ESTADO_PROYECTO.md` con el resultado, los archivos relevantes, las verificaciones efectivamente realizadas y lo pendiente. Distinguir propuestas de funciones implementadas. No afirmar que un video está publicado en YouTube solo porque el usuario dijo que iba a subirlo.

Mantener estas instrucciones breves y generales. Guardar detalles de producción en los documentos del video y los comandos de instalación en `README.md`.
