# Estado técnico del repositorio

Actualizado: 15 de noviembre de 2026.

## Objetivo

Desarrollar una base abierta y reutilizable de animación para distintas personas, personajes, guiones, estilos y formatos. Las producciones concretas se mantienen separadas de las reglas del motor.

## Implementado

- Plantillas de Remotion + Three.js y ejemplos de Blender procedentes del repositorio original, con sus créditos y licencia MIT conservados.
- Proyecto ejecutable en `prueba-robot/`, con dependencias fijadas en `package-lock.json`.
- Ejemplo independiente de robot que genera sus propios sonidos.
- Ejemplo de video largo con personajes ilustrados sobre escenarios 3D, distintas poses, cinco tipos de encuadre y cuatro familias de transición.
- Scripts para revisar fotogramas, exportar H.264/AAC, ajustar voz y comprobar metadatos y decodificación.
- Lanzadores de Windows y documentación de instalación.
- Exclusiones de Git para recursos audiovisuales, producciones locales, dependencias y herramientas descargadas.
- Guía de lenguaje visual y plantilla de montaje para planificar máscaras de texto, acciones encadenadas, objetivos de cámara, transiciones mediante objetos y sincronización con la narración. Son documentación operativa; no añaden automatización al renderizador.

El ejemplo largo se ejecutó y se verificaron 9650 fotogramas a 1920 × 1080 y 30 fps, sin errores de decodificación. Ese resultado comprueba una producción concreta, no la compatibilidad automática con todos los posibles proyectos.

## Organización actual

- `AGENTS.md`: instrucciones generales para trabajar en el repositorio.
- `README.md`: instalación y ejecución de los ejemplos.
- `docs/PROYECTOS.md`: separación entre motor, ejemplos y producciones locales.
- `docs/PLANTILLA_PERSONAJE.md`: ficha genérica que se copia a una producción local.
- `docs/LENGUAJE_VISUAL.md`: técnicas de montaje, revisión y soporte real del código.
- `docs/PLANTILLA_MONTAJE.md`: planificación local de marcadores, planos y continuidad.
- `prueba-robot/src/dormir-components.tsx`: personaje ilustrado y objetos comunes del ejemplo largo.
- `prueba-robot/src/dormir-world.tsx`: escenarios del ejemplo.
- `prueba-robot/src/dormir-story.ts`: montaje específico del ejemplo.
- `prueba-robot/src/sin-dormir-completo.tsx`: composición, cámaras y transiciones del ejemplo.
- `prueba-robot/render-completo.mjs`: exportación y ajuste de voz del ejemplo.
- `prueba-robot/qa-dormir.mjs`: comprobaciones del MP4 del ejemplo.
- `plantillas/`, `herramientas/`, `realista/`, `referencias/`: plantillas y documentación de origen.

Los documentos bajo `video-sin-dormir/` describen el ejemplo ya distribuido. No son valores por defecto ni reglas de identidad para otras producciones.

## Limitaciones

- El motor compartido y los ejemplos aún están agrupados en `prueba-robot/`.
- El ejemplo largo contiene rutas, recursos, duración, conteos de fotogramas y mediciones de voz específicos.
- El montaje y la selección de acciones se preparan manualmente; no existe todavía un generador general de escenas a partir de cualquier narración.
- El renderizador espera hojas de poses con una distribución concreta. Cambiar de personaje requiere preparar recursos compatibles o adaptar el código.
- Las ilustraciones usan deformaciones suaves; no hay articulación anatómica completa ni sincronización labial general.
- Los scripts de render están orientados principalmente a Windows y buscan Chrome o Edge en rutas conocidas.
- No hay todavía panel visual, render recuperable por escenas ni selector general de fondos.
- La transcripción local se utilizó durante el desarrollo, pero no está integrada en un comando general de producción.
- Los recursos privados no se distribuyen; una copia nueva necesita sus propios materiales para ejecutar ejemplos que dependan de ellos.

## Próximas mejoras propuestas

1. Separar motor, ejemplos públicos y configuración de cada producción.
2. Definir configuración validada para duración, formato, personajes, fondos, narración y salida, sin valores personales implícitos.
3. Medir y transcribir cada audio, calculando su propia normalización y sus tiempos.
4. Renderizar por escenas con reutilización de resultados y recuperación tras fallos.
5. Catalogar acciones, cámaras, escenarios y fondos con nombres y capacidades claras.
6. Añadir un panel para proyectos, montaje, avances y exportación.

Estas mejoras están propuestas, no implementadas. El siguiente trabajo se concreta según la solicitud vigente; no asumir un tema, personaje, canal ni proveedor de voz universal.
