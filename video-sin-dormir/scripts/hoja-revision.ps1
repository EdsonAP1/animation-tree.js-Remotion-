param([string]$Folder = 'revision-completo')
Add-Type -AssemblyName System.Drawing
$qaFolder = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot ('../out/' + $Folder)))
$qaFiles = Get-ChildItem -LiteralPath $qaFolder -Filter 'foto-*.png' | Sort-Object Name
$qaColumns = 4
$qaRows = [int][Math]::Ceiling($qaFiles.Count / $qaColumns)
$qaCanvas = [Drawing.Bitmap]::new(1600, $qaRows * 250)
$qaGraphics = [Drawing.Graphics]::FromImage($qaCanvas)
$qaGraphics.Clear([Drawing.Color]::FromArgb(25,30,45))
$qaFont = [Drawing.Font]::new('Arial',12)
for ($qaIndex=0; $qaIndex -lt $qaFiles.Count; $qaIndex++) {
 $qaImage = [Drawing.Image]::FromFile($qaFiles[$qaIndex].FullName)
 $qaX = ($qaIndex % $qaColumns) * 400
 $qaY = [int][Math]::Floor($qaIndex / $qaColumns) * 250
 $qaGraphics.DrawImage($qaImage,$qaX,$qaY,400,225)
 $qaGraphics.DrawString($qaFiles[$qaIndex].BaseName,$qaFont,[Drawing.Brushes]::White,$qaX+8,$qaY+227)
 $qaImage.Dispose()
}
$qaCanvas.Save((Join-Path $qaFolder 'hoja-revision.jpg'),[Drawing.Imaging.ImageFormat]::Jpeg)
$qaFont.Dispose()
$qaGraphics.Dispose()
$qaCanvas.Dispose()

