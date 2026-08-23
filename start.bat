@echo off
title MM STONES — Next.js Server
color 0A

echo ======================================================
echo          MM STONES — NEXT.JS APP LAUNCHER
echo ======================================================
echo.
echo Starting local Next.js development server...
echo Your browser will open http://localhost:3000 in a few seconds...
echo.

cd /d "%~dp0"

:: Reliable 6-second wait before opening browser (using ping instead of timeout to prevent batch crashes)
start "" cmd /c "ping 127.0.0.1 -n 7 >nul & start http://localhost:3000"

:: Start Next.js dev server
npm run dev

pause

