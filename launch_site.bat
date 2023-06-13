@echo off
cls
color 09
git add --all
git commit -m "Initial commit"
git push origin main
echo.
echo Done.
pause >nul