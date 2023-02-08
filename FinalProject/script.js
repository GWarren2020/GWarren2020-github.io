artists = d3.csv("https://media.githubusercontent.com/media/MuseumofModernArt/collection/master/Artists.csv")

artworks = d3.json("https://media.githubusercontent.com/media/MuseumofModernArt/collection/master/Artworks.json")


lookup = ConstituentIDToObjectIDLookup = d3.merge(
  artworks.map((d) =>
    d.ConstituentID.map((e) => {
      return { ConstituentID: e, ObjectID: d.ObjectID };
    })
  )
)

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






