import express from "express";
import path from "path";

const __dirname = path.resolve();

const app = express();

app.use(express.static(path.join(__dirname, "/frontend/build")));

const contacts = [
  { id: 1, name: "Jean-Cédrick Chapelier", age: 25 },
  { id: 2, name: "Jamilla Sam", age: 30 },
  { id: 3, name: "Jule Césare", age: 40 },
  { id: 4, name: "Alain Kaluitu Kadioko", age: 35 },
  { id: 5, name: "Mbala Mbuta Biscot", age: 30 },
  { id: 6, name: "Matumona Roum", age: 35 },
  { id: 7, name: "Mbayo Kibemba", age: 30 },
  { id: 8, name: "Felix Le Gouverneur", age: 35 },
  { id: 9, name: "Samy Kifaru", age: 30 },
  { id: 10, name: "Drozophilia Melanogaster", age: 35 },
];

app.get("/api/contacts", (req, res) => {
  res.send(contacts);
});

app.get("/api/contacts/:id", (req, res) => {
  const id = req.params.id;
  const contact = contacts.find((c) => c.id === id);
  if (contact) {
    res.send(contact);
    return;
  }
  res.sendStatus(404);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
