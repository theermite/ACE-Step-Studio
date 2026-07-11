@echo off
chcp 65001 >nul
title ACE-Step - Generateur de musique IA
REM Lanceur simple pour usage sur une autre machine.
REM Force le mode developpement (CORS localhost) + un port stable, au cas ou
REM l'environnement Windows imposerait NODE_ENV=production ou un PORT global.
set "NODE_ENV=development"
set "PORT=3470"
set "FRONTEND_URL=http://localhost:3470"
REM Modele 2B (leger) : le seul compatible avec une carte 6 Go (RTX 2060).
REM Le moteur ACE-Step s'auto-configure selon la carte detectee (offload, INT8...).
set "DEFAULT_MODEL=acestep-v15-turbo"

echo ========================================
echo   ACE-Step demarre...
echo   Cette fenetre doit rester ouverte.
echo   L'interface va s'ouvrir dans ton navigateur :
echo   http://localhost:3470
echo ========================================
echo.

call "%~dp0run.bat"
