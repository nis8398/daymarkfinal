@echo off
title Daymark Local Web Server
echo ========================================================
echo               Daymark Web App Launcher
echo ========================================================
echo.
echo Notice: Modern web applications use ES Modules and require
echo a web server (http://) rather than the file:/// protocol.
echo.

where npx >nul 2>nul
if %errorlevel% equ 0 (
    echo [OK] Node.js found. Starting local server with npx serve...
    start http://localhost:3000
    npx serve -s . -l 3000
    goto end
)

where python >nul 2>nul
if %errorlevel% equ 0 (
    echo [OK] Python found. Starting local HTTP server on port 8000...
    start http://localhost:8000
    python -m http.server 8000
    goto end
)

where powershell >nul 2>nul
if %errorlevel% equ 0 (
    echo [OK] Starting local PowerShell HTTP server on port 8080...
    start http://localhost:8080
    powershell -NoProfile -Command "$listener = New-Object System.Net.HttpListener; $listener.Prefixes.Add('http://localhost:8080/'); $listener.Start(); Write-Host 'Server running at http://localhost:8080/ (Press Ctrl+C to stop)'; while ($listener.IsListening) { $ctx = $listener.GetContext(); $req = $ctx.Request.Url.LocalPath.TrimStart('/'); if ([string]::IsNullOrEmpty($req) -or $req -eq '/') { $req = 'index.html' }; $p = Join-Path (Get-Location) $req; if (Test-Path $p) { $b = [System.IO.File]::ReadAllBytes($p); $ctx.Response.ContentLength64 = $b.Length; $ctx.Response.OutputStream.Write($b, 0, $b.Length) } else { $ctx.Response.StatusCode = 404 }; $ctx.Response.OutputStream.Close() }"
    goto end
)

echo No local server runtime detected (Node.js, Python, or PowerShell).
echo.
echo To host this online for free:
echo 1. Drag and drop this folder into https://app.netlify.com/drop
echo 2. Or upload it to Vercel, Cloudflare Pages, or cPanel.
echo.
pause
:end
