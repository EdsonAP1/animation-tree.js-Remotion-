# Narración, movimiento y continuidad

Guía reutilizable para planificar y revisar animaciones. Cada producción elige las técnicas que ayuden a explicar su contenido, con sus propios recursos, ritmo y estilo. Un plano quieto puede ser útil para leer o comprender: no es necesario animarlo todo ni aplicar todas las técnicas en cada escena.

Esta guía describe decisiones de montaje. **No es una función automática del motor.** Los tiempos, trayectorias, máscaras y transformaciones aún se programan por producción. Copiar [PLANTILLA_MONTAJE.md](PLANTILLA_MONTAJE.md) a `proyectos-locales/<nombre>/` para registrar esas decisiones.

## 1. Revelar texto mediante una máscara

Revelar el texto recortando su contenedor mientras el contenido se desplaza hasta su posición final. Mantener estable el tamaño de letra para evitar que el texto parezca estirarse. Una máscara por línea permite escalonar títulos sin alterar los saltos de línea.

Parámetros de planificación: inicio, duración, dirección del recorte, desplazamiento, separación entre líneas y tiempo de lectura. Como punto de partida, probar entradas de 0.3–0.6 segundos; ajustar al ritmo de la voz y al tamaño del texto.

En una capa HTML de Remotion se puede combinar `overflow: hidden` en el contenedor con `transform: translateY(...)` en el texto, o usar `clipPath: inset(...)`. Los valores deben calcularse desde el fotograma actual, con progreso limitado entre 0 y 1. Evitar transiciones CSS dependientes del reloj del navegador: el render debe producir el mismo resultado aunque solicite cuadros fuera de orden.

Revisar el recorte de acentos y descendentes, márgenes, contraste y lectura a tamaño de teléfono. El texto debe quedar completamente visible durante la explicación.

## 2. Encadenar acciones

Diseñar una relación visible entre movimientos: un elemento entra, toca o desplaza a otro y esa segunda acción introduce la siguiente información. Por ejemplo, una tarjeta empuja un indicador y el indicador abre un gráfico.

Registrar el fotograma de contacto y hacer que la reacción comience allí. Mantener la dirección, el punto de contacto y la continuidad de las posiciones. No basta con aplicar retrasos iguales a objetos sin relación visual.

Parámetros: elemento iniciador, trayectoria, contacto, elemento receptor, desplazamiento y asentamiento. Un solapamiento breve puede mantener el ritmo, siempre que la acción principal siga siendo legible. Este encadenamiento puede ser una coreografía programada; no requiere ni implica simulación física.

## 3. Hacer que la cámara siga lo importante

Elegir un objetivo de atención por tramo: personaje, objeto, dato o zona de un gráfico. Desplazar el encuadre hacia ese objetivo y acercarse cuando su detalle aporte información. Dar tiempo para leer antes de cambiar el foco.

En 3D, planificar por separado la posición de cámara y el objetivo de `lookAt`. En capas 2D, usar una transformación común del escenario y mantener los rótulos de interfaz fuera de ella cuando deban permanecer fijos. Las trayectorias deben evaluarse a partir del tiempo del plano, sin acumular movimientos entre fotogramas.

Parámetros: objetivo, encuadre inicial y final, duración, acercamiento y márgenes seguros. Evitar que el objetivo quede oculto por textos o que un zoom recorte etiquetas, ejes o fuentes. Una captura de gráfico exige comprobar legibilidad después del movimiento.

## 4. Transformar un objeto para introducir otra escena

Usar un objeto presente en la historia como puente visual. Por ejemplo, una tarjeta se expande hasta cubrir el encuadre y revela un panel; o un círculo se convierte en una ventana hacia el escenario siguiente.

Definir qué propiedad se conserva entre escenas: posición, contorno, color o dirección. Registrar el momento de cobertura o coincidencia y realizar allí el cambio de contenido. La transformación debe hacer comprensible la relación entre escenas.

Parámetros: objeto de origen, destino, propiedades iniciales y finales, punto de unión y duración. Expandir una forma o combinar un recorte con un corte es una transición válida; no equivale a transformar automáticamente dos mallas o imágenes arbitrarias. Una transformación geométrica compleja requiere recursos compatibles y trabajo específico.

## 5. Sincronizar entradas con la narración

Escuchar o transcribir el audio definitivo y marcar la primera mención de cada concepto importante. Hacer aparecer el elemento cuando se lo nombra; se puede anticipar ligeramente el movimiento para que alcance una posición legible en esa mención. Un número o conclusión que dependa del relato no debe revelarse demasiado pronto.

Registrar texto mencionado, segundo de la mención, inicio del movimiento, momento legible y salida. Para convertir segundos a fotogramas, usar `Math.round(segundos * fps)` con los fps reales de la composición. Distinguir tiempos globales de tiempos locales dentro de una `Sequence` o plano para evitar aplicar dos veces el desplazamiento temporal.

Respetar el archivo narrado y su duración. Si cambia la voz, la velocidad o las pausas, revisar los marcadores. Una transcripción ayuda a ubicarlos, pero necesita contraste con el audio, especialmente para cifras y nombres. Agregar efectos sonoros en contactos o uniones cuando aporten claridad, con nivel que permita entender la voz.

## Revisión antes de exportar

1. Comparar menciones y entradas con el audio definitivo, incluidos los números.
2. Revisar el comienzo, contacto, unión y final de cada movimiento nuevo.
3. Comprobar que texto, máscaras y cámara permiten leer sin recortes.
4. Verificar continuidad entre escenas y espacio para asimilar la información.
5. Escuchar voz y efectos juntos; revisar que el cambio de plano no tape palabras.
6. Tras exportar, comprobar duración, dimensiones, audio y decodificación del archivo final.

## Soporte actual del repositorio

| Técnica | Punto de partida | Trabajo pendiente por producción |
| --- | --- | --- |
| Máscaras de texto | El ejemplo usa `clipPath` para una transición circular en `prueba-robot/src/sin-dormir-completo.tsx`. | Preparar el contenedor, el recorte de texto y sus tiempos. No hay componente general de títulos. |
| Acciones encadenadas | Animaciones calculadas por fotograma en los ejemplos. | Diseñar contactos, reacciones y trayectorias. No hay sistema general de encadenamiento. |
| Cámara con objetivo | `World` en `sin-dormir-completo.tsx` y `Scene` en `dormir-opening.tsx` usan posición y `lookAt`. | Programar objetivos y encuadres de cada relato. No hay detección automática de lo importante. |
| Objeto como transición | Los ejemplos incluyen recorte circular, barrido, fundido y desenfoque. | Diseñar el objeto puente y la unión entre escenas. No hay transformación general entre objetos arbitrarios. |
| Sincronización con voz | Narración y cronología manual del ejemplo largo. | Medir cada audio y revisar sus marcadores. No hay montaje automático a partir del texto narrado. |

Estas técnicas son un catálogo de posibilidades. El estado de implementación del motor se conserva en [ESTADO_PROYECTO.md](../ESTADO_PROYECTO.md).
