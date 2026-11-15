@echo off
cd /d "%~dp0..\prueba-robot"
where node >nul 2>&1
if errorlevel 1 goto falta
if not exist node_modules\@remotion\renderer goto falta
if not exist src\sin-dormir.tsx goto falta
if not exist "..\video-sin-dormir\public\narracion.mp3" goto falta
node render-dormir.mjs
if errorlevel 1 goto error
echo Resultado: %~dp0out\sin-dormir-prueba-10s.mp4
pause
exit /b 0
:falta
echo Faltan programas, dependencias o archivos del proyecto.
pause
exit /b 1
:error
echo El render fallo. Revisa el mensaje anterior.
pause
exit /b 1
