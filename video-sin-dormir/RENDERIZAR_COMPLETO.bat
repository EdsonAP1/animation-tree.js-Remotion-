@echo off
cd /d "%~dp0..\prueba-robot"
where node >nul 2>&1
if errorlevel 1 goto falta
if not exist node_modules\@remotion\renderer goto falta
if not exist src\sin-dormir-completo.tsx goto falta
if not exist "..\video-sin-dormir\public\narracion.mp3" goto falta
if not exist "..\video-sin-dormir\public\personaje-acciones.png" goto falta
if not exist "..\video-sin-dormir\public\personaje-emociones.png" goto falta
if not exist "..\video-sin-dormir\public\personaje-final.png" goto falta
if not exist "..\video-sin-dormir\public\personaje-poses-v2.png" goto falta
node render-completo.mjs
if errorlevel 1 goto error
echo Resultado: %~dp0out\sin-dormir-completo.mp4
pause
exit /b 0
:falta
echo Faltan Node.js, dependencias o archivos del proyecto.
pause
exit /b 1
:error
echo No se completo el render. Revisa el mensaje anterior.
pause
exit /b 1
