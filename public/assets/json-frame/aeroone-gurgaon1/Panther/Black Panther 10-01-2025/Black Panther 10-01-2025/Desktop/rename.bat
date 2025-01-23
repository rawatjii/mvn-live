@echo off
setlocal enabledelayedexpansion

REM Change to the directory where your files are located
cd /d "D:\sandeep\mvn-react\project\mvn-react-old-new-repository\public\assets\json-frame\aeroone-gurgaon1\Panther\Black Panther 10-01-2025\Black Panther 10-01-2025\Desktop"

REM Initialize counter
set counter=1

REM Loop through .webp files sorted numerically
for /f "tokens=*" %%f in ('dir /b /on *.webp') do (
    REM Generate new name based on the counter
    set newName=!counter!.webp

    REM Rename the file
    ren "%%f" "!newName!"

    REM Increment the counter
    set /a counter+=1
)

echo Files renamed sequentially in numerical order!
pause
