import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));


app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  const { street, pet } = req.body;
  const bandName = `${street} ${pet}`;
  console.log("Band name:", bandName);
  res.send(`Your band name is: <strong>${bandName}</strong>`);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});