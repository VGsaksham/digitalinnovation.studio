@echo off
echo ========================================
echo   Digital Innovation Studio Simple Upload
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
echo Running simple upload script...
echo.
python simple-upload.py

echo.
echo Press any key to exit...
pause >nul