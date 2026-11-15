# Plan de montaje de una producción

Copiar este documento a `proyectos-locales/<nombre>/MONTAJE.md` y completar allí. Es una plantilla de planificación; ningún renderizador la interpreta automáticamente. Consultar `docs/LENGUAJE_VISUAL.md` desde la raíz del repositorio.

## Datos de trabajo

- Producción:
- Formato y resolución:
- FPS:
- Archivo de narración y versión:
- Duración medida del audio:
- Duración de la composición:
- Referencias visuales y ficha del personaje:
- Estado: planificación / prueba / aprobado / exportado / verificado.

## Marcadores de narración

Registrar segundos desde el inicio del audio. Indicar si existe un desfase entre el audio y la composición. Convertir a fotogramas con `Math.round(segundos * fps)`.

| Concepto o frase exacta | Mención (s) | Inicio de entrada (s) | Elemento legible (s) | Salida (s) | Recurso visual |
| --- | --- | --- | --- | --- | --- |
| Completar | | | | | |

## Planos y continuidad

| Plano e intervalo | Objetivo de atención | Encuadre y movimiento | Texto y máscara | Acción que provoca la siguiente | Unión con el siguiente plano | Efecto sonoro |
| --- | --- | --- | --- | --- | --- | --- |
| Completar | | | | | | |

## Detalle de un movimiento

Repetir este bloque para los movimientos que necesiten precisión.

- Elemento iniciador y estado inicial:
- Inicio, contacto y final (fotogramas globales):
- Elemento receptor y reacción:
- Trayectoria, duración y suavizado:
- Objetivo de cámara y márgenes de lectura:
- Objeto puente y propiedad que se conserva:
- Fotograma de unión o cambio de contenido:
- Estado final y tiempo de lectura:
- Técnica omitida por claridad, si corresponde:

## Revisión y entrega

- [ ] Marcadores contrastados con el audio definitivo.
- [ ] Entradas legibles al mencionar cada concepto.
- [ ] Máscaras revisadas al comienzo, a mitad y al final.
- [ ] Contactos y reacciones sin saltos de posición.
- [ ] Cámara mantiene el objetivo y los textos dentro del encuadre.
- [ ] Unión entre escenas revisada en movimiento.
- [ ] Voz comprensible con los efectos activados.
- [ ] Capturas y prueba breve revisadas antes del render largo.
- [ ] Archivo final comprobado: duración, resolución, audio y decodificación.

Anotar resultados, archivos de evidencia, limitaciones y cambios aprobados en esta producción local.
