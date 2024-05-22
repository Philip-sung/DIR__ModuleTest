@echo off

:check_pnpm
REM Is pnpm installed in global scope? [Y/N]
choice /C YN /N /M "Is pnpm installed in global scope? [Y/N]"
if errorlevel 3 goto invalid_input
if errorlevel 2 goto error
if errorlevel 1 goto check_root

:check_root
choice /C YN /N /M "Is batchfile executed in npm project root? [Y/N]"
if errorlevel 3 goto invalid_input
if errorlevel 2 goto error
if errorlevel 1 goto proceed

:proceed
REM delete npm
if exist "node_modules" (
	echo remove "node_modules" directory
	rmdir /S /Q "node_modules"
	if exist "package-lock.json" (
		echo remove "package-lock.json"
		del "package-lock.json"
	)
) else (
	echo not npm initialized project
)

REM install packages within pnpm
echo pnpm install
pnpm install
goto end

:error
echo [error]please check current status.
goto end

:invalid_input
echo [error]invalid input.
goto check_pnpm

:end
echo terminate process.
