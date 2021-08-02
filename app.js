import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "/frontend/build")));

const contacts = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Bob", age: 40 },
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
