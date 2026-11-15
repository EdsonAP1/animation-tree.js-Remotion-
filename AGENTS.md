# Instrucciones generales del repositorio

## Propósito

Este repositorio es una base abierta para que diferentes personas creen sus propios videos. Cada producción elige personajes, temas, narración, estilo, fondos, duración y formato. Ningún personaje, canal, proveedor de voz ni nicho de un ejemplo se convierte en regla general.

## Al comenzar

Lee `README.md` y `ESTADO_PROYECTO.md`, revisa Git y el código relevante. Identifica si la tarea modifica el motor compartido, un ejemplo público o una producción local. Las instrucciones actuales de quien solicita el trabajo prevalecen sobre las decisiones históricas de los ejemplos.

Comunícate en el idioma de la solicitud. Comprueba recursos locales antes de pedirlos de nuevo. No dependas de haber leído un chat anterior ni supongas que existen imágenes o audios que Git excluye.

## Separación entre motor y producciones

- Mantener las reglas públicas limitadas a arquitectura, instalación, contribución y validación técnica.
- Guardar referencias visuales, rasgos de personajes concretos, guiones, preferencias de canal, temas elegidos y decisiones de una producción en su propio directorio local, excluido de Git.
- Usar `proyectos-locales/<nombre>/` para la documentación privada de una producción. Consultar el proyecto seleccionado por la solicitud; no elegirlo implícitamente a partir de otro ejemplo.
- No copiar preferencias de una persona a `AGENTS.md`, `ESTADO_PROYECTO.md` ni a valores por defecto compartidos.
- Los ejemplos específicos muestran implementaciones y limitaciones; no determinan el personaje, formato o estilo de una producción nueva.
- No afirmar que existe configuración general o automatización si el código todavía requiere adaptación manual. Documentar las limitaciones reales.

## Preparación visual y audio

- Seguir la referencia y las decisiones del proyecto activo. Registrar sus invariantes en una ficha local; `docs/PLANTILLA_PERSONAJE.md` ofrece una estructura genérica.
- Distinguir rasgos del personaje de accesorios circunstanciales, pose, fondo y efectos. Las vistas que no aparecen en una referencia requieren diseño y revisión.
- Una producción puede usar fondos ilustrados, capas con profundidad aparente, escenarios 3D o combinaciones, según el alcance solicitado y el soporte disponible.
- Elegir encuadres y transiciones según la narración. No sustituir una referencia por un personaje simplificado sin revisar esa decisión con quien encarga el video.
- Cuando el proyecto aporte narración, respetar el archivo y sincronizar el montaje con su duración. El proveedor de voz es libre; no exigir un servicio concreto.
- Para un diseño nuevo, preparar una prueba breve proporcional al cambio antes de un render largo, reutilizando aprobaciones que sigan siendo aplicables.
- Describir con precisión el método de animación. Las ilustraciones con deformaciones sobre mallas no equivalen a un modelo 3D completamente articulado.

## Git y recursos

- Publicar código, documentación general y ejemplos expresamente destinados a distribución.
- Mantener fuera de Git producciones privadas, referencias personales, videos, audios, imágenes, miniaturas, herramientas binarias, modelos descargados, dependencias, cachés, temporales y credenciales.
- Respetar `.gitignore`. No forzar la inclusión de recursos excluidos sin una solicitud explícita que cambie esa regla.
- Conservar la licencia MIT, los avisos de autoría y los créditos originales.
- Publicar cambios según el alcance autorizado en la tarea. No interpretar la existencia de un remoto como autorización ilimitada.
- Conservar producciones y archivos locales al modificar el motor o los ejemplos.

## Validación y continuidad

Actualmente los comandos de Node se ejecutan desde `prueba-robot/`; consultar el README. Verificar programas y recursos requeridos antes de instalar o renderizar. No afirmar uso de GPU sin evidencia.

Revisar fotogramas afectados antes de un render largo. Comprobar duración, dimensiones, audio cuando corresponda y decodificación del MP4 final. Separar la comprobación técnica de la evaluación artística. Repetir solo las verificaciones justificadas por el cambio.

Actualizar `ESTADO_PROYECTO.md` con estado técnico del motor, limitaciones y verificaciones. Guardar estado narrativo, aprobaciones visuales y publicación de cada video en su documentación local. Distinguir propuestas de funciones implementadas. Investigar afirmaciones comprobables del contenido cuando la tarea lo requiera.
