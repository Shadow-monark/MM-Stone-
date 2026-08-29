@echo off
title MM STONE - Local Server
color 0A
echo ======================================================
echo             MM STONE - WEBSITE LAUNCHER
echo ======================================================
echo.
echo Freeing port 3000 if occupied...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000 ^| findstr LISTENING') do taskkill /f /pid %%a >nul 2>&1
echo.
echo Starting local development server...
echo Opening http://localhost:3000 in your browser...
echo.
cd /d "%~dp0"
start "" cmd /c "ping 127.0.0.1 -n 5 >nul & start http://localhost:3000"
npm run dev
pause

