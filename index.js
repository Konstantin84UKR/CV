let express = require("express");
// let bodyParser = require("body-parser");

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let artists = [
  {
    id: 1,
    artist: "Metallica",
  },
  {
    id: 2,
    artist: "Iron Maden",
  },
  {
    id: 3,
    artist: "AC/DC",
  },
];

app.get("/", function (req, res) {
  res.send("Hello Express");
});

app.get("/artists", function (req, res) {
  res.send(artists);
});

app.get("/artists/:id", function (req, res) {
  console.log(req.params);

  let artist = artists.find((artist) => {
    return artist.id === Number(req.params.id);
  });

  res.send(artist);
});

app.post("/artists", function (req, res) {
  let artist = {
    id: Date.now(),
    artist: req.body.name,
  };

  artists.push(artist);

  console.log(req.body);
  res.send(artists);
});

app.put("/artists/:id", function (req, res) {
  console.log(req.params);

  let artist = artists.find((artist) => {
    return artist.id === Number(req.params.id);
  });

  artist.artist = req.body.name;

  // res.send(artists);
  res.sendStatus(201);
});

app.delete("/artists/:id", (req, res) => {
  artists = artists.filter((item) => {
    return item.id !== Number(req.params.id);
  });

  res.send(artists);
});

app.listen(3000, function () {
  console.log("API app start");
});
