@echo off
title MM STONES - Local Server
color 0A
echo ======================================================
echo             MM STONES - WEBSITE LAUNCHER
echo ======================================================
echo.
echo Starting local development server...
echo Opening http://localhost:3000 in your browser...
echo.
cd /d "%~dp0"
start "" cmd /c "ping 127.0.0.1 -n 7 >nul & start http://localhost:3000"
npm run dev
pause

