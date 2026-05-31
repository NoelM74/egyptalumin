$applicationsDir = "images/applications"
$blogDir = "images/blog"

# Mapping of uploaded file names to the TREE.md structure names
$appMappings = @{
    "4.1-aluminium-die-casting-automotive-engine-block-manufacturing.webp" = "application-die-casting-housings-01.webp"
    "4.2-aluminium-automotive-components-engine-parts-wheel-hub.webp" = "application-automotive-components-01.webp"
    "4.3-aluminium-aerospace-aircraft-fuselage-structural-components.webp" = "application-engineered-castings-01.webp"
    "4.4-aluminium-curtain-wall-facade-modern-building-construction.webp" = "application-construction-extrusions-01.webp"
    "4.5-aluminium-heat-sink-electronic-components-manufacturing.webp" = "application-ev-battery-housings-01.webp"
    "4.6-aluminium-packaging-cans-foil-beverage-food-industry.webp" = "application-packaging-and-foil-01.webp"
    "4.7-aluminium-power-cable-conductors-rail-transit-components.webp" = "application-electrical-conductors-01.webp"
    "4.8-aluminium-cnc-machined-parts-industrial-manufacturing.webp" = "application-industrial-machinery-01.webp"
}

$blogMappings = @{
    "6.1-guide-aluminium-ingot-grades-european-manufacturers.webp" = "blog-aluminium-ingot-grades-guide-01.webp"
    "6.2-cbam-2026-guide-european-aluminium-buyers.webp" = "blog-cbam-2026-guide-01.webp"
}

# Rename applications images
foreach ($mapping in $appMappings.GetEnumerator()) {
    $source = Join-Path $applicationsDir $mapping.Name
    $destination = Join-Path $applicationsDir $mapping.Value
    
    if (Test-Path $source) {
        Write-Host "Renaming $source to $destination"
        Move-Item -Path $source -Destination $destination -Force
    } else {
        Write-Host "Source file $source not found."
    }
}

# Rename blog images
foreach ($mapping in $blogMappings.GetEnumerator()) {
    $source = Join-Path $blogDir $mapping.Name
    $destination = Join-Path $blogDir $mapping.Value
    
    if (Test-Path $source) {
        Write-Host "Renaming $source to $destination"
        Move-Item -Path $source -Destination $destination -Force
    } else {
        Write-Host "Source file $source not found."
    }
}

Write-Host "Image folder cleanup complete."
