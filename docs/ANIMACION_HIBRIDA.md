# Animación híbrida con acciones y escenarios 3D

Flujo opcional para combinar personajes ilustrados y objetos volumétricos. Cada producción decide si lo usa y con qué personaje, herramientas y estilo. Esta guía documenta un método de trabajo; no instala un generador automático ni una biblioteca general de acciones.

## Definir qué se mueve

| Capa | Implementación posible | Límite que debe declararse |
| --- | --- | --- |
| Cabeza y torso ilustrados | Planos con textura y transparencia, atlas de expresiones y vistas aprobadas | No proporcionan volumen ni vistas que la ilustración no contiene |
| Extremidades y manos | Curvas o segmentos 3D articulados, puntos de hombro/codo/mano y cadera/rodilla/pie | Requieren trayectorias y revisión de articulaciones; no son un rig anatómico automático |
| Objetos de acción | Mallas 3D con pivotes, bisagras, agarres y materiales | El contacto y la reacción deben diseñarse explícitamente |
| Escenario | Suelo, paredes, mobiliario y luces con profundidad real | Una imagen fija puede complementar el escenario, pero no aporta por sí sola interacción volumétrica |
| Cámara | Posición, objetivo, lente y enfoque por plano | Debe respetar las vistas disponibles del personaje y evitar mostrar el canto de sus planos |

Three.js con Remotion y Blender permiten implementar estas capas. Elegir uno o combinarlos según los recursos del proyecto. Registrar qué motor produce cada tramo y su resolución de origen. Escalar una secuencia de menor resolución no añade detalle nativo.

## Preparación

1. Leer las referencias, ficha de personaje y estilo aprobado de la producción seleccionada. Copiar [PLANTILLA_ESTILO.md](PLANTILLA_ESTILO.md) al directorio local si hace falta.
2. Identificar el audio vigente, medirlo y preparar marcadores. Una transcripción automática ayuda a localizar frases, pero puede contener errores.
3. Dividir la historia en acciones visibles: alcanzar, coger, apartar, agacharse, girar, abrir, retroceder o reaccionar. Elegir las que pide la historia, sin imponer un catálogo a todos los videos.
4. Preparar un plan con [PLANTILLA_MONTAJE.md](PLANTILLA_MONTAJE.md) y las técnicas de [LENGUAJE_VISUAL.md](LENGUAJE_VISUAL.md).
5. Revisar una prueba proporcional a los movimientos nuevos. Reutilizar las aprobaciones aplicables al ampliar el montaje, conservando el método aprobado.

## Diseñar el contacto antes de animar

Para coger un objeto, definir su punto de agarre y el instante en que la mano lo alcanza. Desde ese momento, la mano y el objeto deben compartir la trayectoria de contacto hasta la liberación. Una bisagra gira alrededor de su eje, no alrededor del centro arbitrario del objeto.

Separar inicio, anticipación, contacto, desplazamiento, liberación y reacción. Usar continuidad de dirección, posición y velocidad al cortar entre un plano general y un detalle. Evitar manos que atraviesan superficies, objetos que flotan sin explicación y cambios de escala entre planos.

En brazos construidos con curvas, revisar el codo durante toda la extensión. Las tangentes automáticas pueden crear picos o bucles al cambiar de dirección. Ajustar tangentes, curvatura o articulaciones y guardar también sus controles al hornear una escena de Blender; guardar solo posiciones puede perder la corrección.

Revisar los planos transparentes contra suelo, paredes y mobiliario. Una silueta puede quedar detrás de un revestimiento o debajo de un escalón aunque su posición parezca cercana. Comprobar orden de profundidad, altura de superficie y sombras de contacto. Las sombras narrativas o estilizadas que se animan por separado deben documentarse como tales.

## Cámara y transiciones

Planificar un foco por plano: cara, mano, objeto, contacto, trayectoria o reacción. Usar generales para establecer el espacio, detalles para comprender la acción y reacciones para mostrar su consecuencia. Variar altura y distancia dentro de las vistas que el personaje permite.

El movimiento de cámara puede sugerir desplazamiento con poses sostenidas cuando ese recurso sea apropiado; no sustituye las articulaciones necesarias para coger o manipular un objeto. Evitar mantener al personaje gesticulando como presentador cuando se haya elegido una historia de acciones.

Conectar planos mediante miradas, continuidad de movimiento, oclusión por un objeto, barridos, cambios de luz o máscaras. Las transiciones deben ayudar a la historia. Reservar cortes simples y pausas cuando permitan entender una acción; no añadir un efecto distinto a cada corte por obligación.

## Sonido y montaje completo

Conservar el texto y la velocidad de la narración aportada, salvo una instrucción expresa para cambiarlos. Si llega otro archivo, volver a medirlo y ajustar los marcadores: no reutilizar silenciosamente los tiempos del anterior.

Situar efectos originales o con licencia adecuada en agarres, contactos, pasos y uniones. Mantener la voz comprensible; medir la mezcla final y comprobar que no satura. La normalización de mezcla no autoriza reescribir o acelerar la voz.

Al pedir una producción completa, exportar toda la narración vigente y la salida final acordada. Una prueba o una secuencia repetida no sustituye ese entregable. Un margen breve de entrada/salida debe registrarse; no recortar la última frase para ajustarse a una duración estimada.

## Verificar y registrar

- Revisar imágenes y movimiento de contactos, cambios de plano y revelaciones importantes antes del render largo.
- Comprobar duración, resolución de salida, fps, número de fotogramas y audio del MP4 final.
- Decodificar el archivo completo y detectar cuadros negros inesperados o congelaciones; distinguirlos de pausas y fundidos intencionales.
- Comprobar sincronía al principio, en el medio y al final. Una correlación entre voz fuente y mezcla puede detectar desfases, aunque no verifica que cada acción coincida con su frase.
- Conservar evidencia y limitaciones en la producción local. La validación técnica no equivale a aprobación artística.

## Soporte real del repositorio

El ejemplo público de `prueba-robot/` contiene planos ilustrados, objetos y cámaras Three.js. `realista/` y `plantillas/` incluyen ejemplos de Blender. Las acciones articuladas, puntos de agarre, sombras independientes y combinaciones entre motores requieren código y recursos adaptados por producción. Esta guía no añade esos sistemas al motor compartido ni hace que cualquier imagen se anime automáticamente.
