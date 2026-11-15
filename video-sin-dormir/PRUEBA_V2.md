# Prueba revisada de diez segundos

Conserva la narración y la prueba anterior. Nueva hoja de poses derivada de la referencia original mediante la herramienta integrada de generación de imágenes (imagegen), sin CLI ni proveedor externo configurado por el usuario.

Activo: `public/personaje-poses-v2.png`. Tres poses con transparencia, colores saturados, sombras azules/violetas, manos y expresiones próximas al diseño original. No es un modelo 3D: son ilustraciones con deformaciones suaves de cabeza, cuerpo y brazos sobre mallas dentro del escenario 3D.

Edición: `../prueba-robot/src/sin-dormir-v2.tsx` y `../prueba-robot/render-dormir-v2.mjs`. Lanzador: `RENDERIZAR_PRUEBA_V2.bat`. Salida: `out/sin-dormir-prueba-10s-v2.mp4`.

Planos: 0–2.7 s primer plano frontal; 2.7–5.267 s contrapicado desde un lateral; 5.267–10 s plano general picado desde el lado opuesto. Desplazamiento suave de cámara en cada plano. Transiciones: barrido breve con desenfoque y destello; apertura/cierre circular dorado inspirado en el reloj.

La identidad visual y el nivel de movimiento quedan pendientes de revisión del usuario antes de extender el video.

## Prompt del activo

Use case: identity-preserve. Asset: animation character pose sheet, transparent background. Input image is the exact character identity and rendering style to preserve, not a loose inspiration. Create a wide image with THREE full-body drawings of THIS EXACT same cyan turquoise elastic stickman, each in its own equal-width column with generous empty transparent space between figures. Same round cyan head, large expressive white eyes with black pupils, thick clean BLACK outlines, saturated electric blue shadows and violet undershading, mint highlights, thin flexible torso, long rounded tubular limbs and expressive broad hands. Retain the glossy hand-painted comic illustration finish and full color saturation of the original. Not a flat vector redesign. Extend the cropped legs naturally to rounded simple feet. Left column: three-quarter front view, startled, hand reaches toward viewer like original, full body visible. Middle column: front three-quarter view, exuberant confident grin, left fist raised triumphantly, right hand pointing upward, full body. Right column: three-quarter SIDE view turned toward left, looking up with astonished wide eyes and mouth, both hands slightly out. All three clearly the same individual as reference. Every complete figure stays entirely inside its own third. Only the three characters, no props, no background, no lettering, no captions, no speed lines, no decorative sparks. Actual transparent alpha background. Matching scale and baseline. Wide landscape sheet.
