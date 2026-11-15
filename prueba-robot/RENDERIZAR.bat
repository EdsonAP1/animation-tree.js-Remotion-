@echo off
cd /d "%~dp0"
where node >nul 2>&1
if errorlevel 1 goto falta
if not exist node_modules\@remotion\renderer goto falta
if not exist src\index.tsx goto falta
call npm.cmd run render
if errorlevel 1 goto error
echo Video guardado en: %~dp0out\robot-5s.mp4
pause
exit /b 0
:falta
echo Faltan Node.js, las dependencias o los archivos del proyecto.
pause
exit /b 1
:error
echo El render fallo. Revisa el error que aparece arriba.
pause
exit /b 1
