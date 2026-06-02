@echo off
title Angielski z Ala
echo Uruchamiam aplikacje...

REM Sprawdz czy Node.js jest zainstalowany
where node >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo Znaleziono Node.js - uruchamiam serwer...
    start "" "http://localhost:3456"
    node server.js
    goto end
)

REM Sprawdz czy Python jest zainstalowany
where python >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo Znaleziono Python - uruchamiam serwer...
    start "" "http://localhost:3456"
    python -m http.server 3456
    goto end
)

REM Brak serwera - otworz bezposrednio
echo Nie znaleziono Node.js ani Python.
echo Otwieram aplikacje bezposrednio...
echo UWAGA: filmy YouTube moga nie dzialac.
echo Aby naprawic - zainstaluj Node.js z: https://nodejs.org
start "" "%~dp0index.html"
pause

:end
