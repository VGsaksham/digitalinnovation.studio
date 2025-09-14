@echo off
echo ========================================
echo   Digital Innovation Studio Auto-Upload
echo ========================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo Python is not installed or not in PATH!
    echo Please install Python and try again.
    echo.
    pause
    exit /b 1
)

REM Run the Python script
echo Running Python upload script...
echo.
python auto_upload.py

echo.
echo Press any key to exit...
pause >nul