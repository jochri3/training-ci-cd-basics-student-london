import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [contacts, setContacts] = useState([]);

  async function fetchContacts() {
    const response = await axios.get("/api/contacts");
    setContacts(response.data);
  }

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <>
      <h1>Contacts</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <b>{contact.id}</b>&nbsp;{contact.name},&nbsp;{contact.age} years
            old
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
