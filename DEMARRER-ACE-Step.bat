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
REM Carte pre-Ampere (ex. RTX 2060) : le format float16 deborde et produit du
REM NaN (generation vide). float32 est plus large et corrige le calcul.
set "ACESTEP_DTYPE=float32"

REM --- Portabilite : corrige le chemin Python selon le disque courant ---
REM Une install "editable" fige un chemin absolu (ex. D:\...). Sur une autre
REM machine (E:\...) ce chemin est mort et le moteur ne demarre pas. On le
REM reecrit sur le dossier reel a chaque lancement (idempotent).
set "ACE_PTH=%~dp0python\Lib\site-packages\_editable_impl_ace_step.pth"
if exist "%ACE_PTH%" (
  > "%ACE_PTH%" echo %~dp0ACE-Step-1.5
  >>"%ACE_PTH%" echo %~dp0ACE-Step-1.5
)

echo ========================================
echo   ACE-Step demarre...
echo   Cette fenetre doit rester ouverte.
echo   L'interface va s'ouvrir dans ton navigateur :
echo   http://localhost:3470
echo ========================================
echo.

call "%~dp0run.bat"
