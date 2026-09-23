# Warsztat informacyjny

Materiały do ćwiczeń prowadzonych przez dr. Marka Deję w roku akademickim 2026/2027.

Strona kursu: <https://marekdejauj.github.io/warsztat/>

Kod przedmiotu: `WZ.ZI-061` / `UJ.WZZINS.11.06689.26`

## Renderowanie strony

Źródła znajdują się w katalogu `site`. Stronę można odtworzyć poleceniem:

```r
Sys.setenv(RSTUDIO_PANDOC = "ścieżka-do-pandoc")
rmarkdown::render_site("site")
```
