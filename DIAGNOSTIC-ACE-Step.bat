@echo off
chcp 65001 >nul
title ACE-Step - DIAGNOSTIC (log a envoyer a Jay)

REM ============================================================
REM  Lanceur DIAGNOSTIC : identique au lanceur normal, mais
REM  capture TOUT (materiel + demarrage + generation) dans un
REM  seul fichier a renvoyer. Aucun copier-coller de terminal.
REM ============================================================

set "LOG=%~dp0DIAGNOSTIC-log.txt"

REM Meme environnement que le lanceur normal.
set "NODE_ENV=development"
set "PORT=3470"
set "FRONTEND_URL=http://localhost:3470"
set "DEFAULT_MODEL=acestep-v15-turbo"
REM Carte pre-Ampere (ex. RTX 2060) : float16 deborde (NaN). float32 corrige.
set "ACESTEP_DTYPE=float32"

REM Portabilite : corrige le chemin Python selon le disque courant.
set "ACE_PTH=%~dp0python\Lib\site-packages\_editable_impl_ace_step.pth"
if exist "%ACE_PTH%" (
  > "%ACE_PTH%" echo %~dp0ACE-Step-1.5
  >>"%ACE_PTH%" echo %~dp0ACE-Step-1.5
)

REM --- Entete du log : date + materiel ---
> "%LOG%" echo ===== DIAGNOSTIC ACE-Step =====
>>"%LOG%" echo Date: %DATE% %TIME%
>>"%LOG%" echo Dossier: %~dp0
>>"%LOG%" echo.
>>"%LOG%" echo ----- Carte graphique (nvidia-smi) -----
where nvidia-smi >nul 2>&1 && (nvidia-smi >>"%LOG%" 2>&1) || (>>"%LOG%" echo nvidia-smi introuvable)
>>"%LOG%" echo.
>>"%LOG%" echo ----- Memoire vive (RAM) -----
powershell -NoProfile -Command "$o=Get-CimInstance Win32_OperatingSystem; $t=[math]::Round($o.TotalVisibleMemorySize/1MB,1); $f=[math]::Round($o.FreePhysicalMemory/1MB,1); Write-Output ('Totale: '+$t+' Go / Libre au lancement: '+$f+' Go')" >>"%LOG%" 2>&1
>>"%LOG%" echo.
>>"%LOG%" echo ----- Sortie du moteur (demarrage + generation) -----
>>"%LOG%" echo.

REM --- Instructions a l'ecran (ne vont PAS dans le log) ---
echo ========================================
echo   DIAGNOSTIC ACE-Step en cours...
echo.
echo   1) Attends que le navigateur s'ouvre.
echo   2) Tente une generation (bouton Creer).
echo   3) Quand c'est termine OU en erreur, FERME cette fenetre.
echo   4) Envoie a Jay ce fichier :
echo      %LOG%
echo ========================================
echo.

REM --- Lance le moteur en capturant TOUTE sa sortie dans le log ---
call "%~dp0run.bat" >>"%LOG%" 2>&1
