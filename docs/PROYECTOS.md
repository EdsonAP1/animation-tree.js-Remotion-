# Motor, ejemplos y producciones locales

El repositorio está dirigido a distintas personas. Sus reglas no fijan personajes, identidad visual de un canal, temas, proveedor de narración ni duración universal.

## Motor compartido

Contiene código, validaciones y documentación general. Actualmente sigue integrado con los ejemplos en `prueba-robot/`; su separación completa es una mejora pendiente. Consultar `ESTADO_PROYECTO.md` antes de asumir que existe una configuración automática.

## Ejemplos públicos

Muestran cómo resolver una producción concreta y pueden conservar su guion de ejemplo, escenarios y requisitos específicos. No se seleccionan como base implícita para todas las producciones nuevas. El ejemplo largo no funciona con cualquier audio o imagen sin adaptación.

## Producción local

Usar un directorio `proyectos-locales/<nombre>/`, excluido de Git, para conservar:

- Objetivo, guion, audiencia y formato elegido.
- Referencias y fichas de los personajes.
- Narración y decisiones de audio.
- Fondos, poses y recursos de la producción.
- Montaje, revisión visual y decisiones aprobadas.
- Estado de producción y archivos de salida.

Se puede copiar `PLANTILLA_PERSONAJE.md` a ese directorio. Esta organización documental todavía no conecta automáticamente una producción nueva con el renderizador: los scripts existentes conservan sus rutas de ejemplo.

## Continuar desde otro chat

Abrir el repositorio como carpeta de trabajo y solicitar: «Lee AGENTS.md y ESTADO_PROYECTO.md. Trabajaremos en la producción local que te indicaré; usa sus propias referencias y preferencias».

En otro equipo deberán aportarse los recursos locales. Las reglas públicas describen cómo trabajar; la información de una producción se lee únicamente cuando esa producción sea la seleccionada.
