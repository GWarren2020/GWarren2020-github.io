import {arts} from "@observablehq/the-moma-collection-data"

db = DuckDBClient.of([
    FileAttachment("artworks.parquet"),
    FileAttachment("artists@1.parquet"),
    FileAttachment("lookup.parquet")
  ])

  

  arts = getArtworks('Pablo Picasso')

  Inputs.table(arts)

  Plot.plot({
    marks: [
      Plot.dot(artistCounts, { x: "BeginDate", y: "count", r: "count", fill: "count", title: "DisplayName" }),
    ],
    marginTop: 50,
    x: { line: true },
    y: { line: true }
  })






