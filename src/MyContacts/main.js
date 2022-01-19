// MY CONTACTS START CODE by Mr. V

// Global Variables
let contacts = [
  {
    name: "John Doe",
    phone: "555-5555",
    email: "johndoe@email.com",
  },
  {
    name: "Jane Doe",
    phone: "333-3333",
    email: "janedoe@email.com",
  },
];

// Event Listeners
document.getElementById("all-tab").addEventListener("click", displayAll);
document.getElementById("search-btn").addEventListener("click", searchByName);
document.getElementById("new-btn").addEventListener("click", newContact);
document.getElementById("delete-btn").addEventListener("click", deleteContact);

// Display All Contacts
function displayAll() {
  let outputStr = "";

  // add html template on every contacts iterable
  for (let i = 0; i < contacts.length; i++) {
    outputStr += `
      <h3>${contacts[i].name}</h3>
      <p>${contacts[i].phone}</p>
      <p>${contacts[i].email}</p>
    `;
  }

  document.getElementById("content").innerHTML = outputStr;
}

// Search Contact by Name
function searchByName() {
  const searchQuery = document.getElementById("search-input").value;
  for (let i = 0; i < contacts.length; i += 1) {
    // make search case-insensitive
    if (contacts[i].name.toLowerCase() === searchQuery.toLowerCase()) {
      document.getElementById("content").innerHTML = `
          <h3>Search by Name</h3>
          <p>Name: ${contacts[i].name}</p>
          <p>Phone: ${contacts[i].phone}</p>
          <p>Email: ${contacts[i].email}</p>
        `;
      return;
    }
  }
  document.getElementById("content").innerHTML = "<h3>Person Not Found</h3>";
}

// New Contact
function newContact() {
  // inputs
  const name = document.getElementById("name-input").value;
  const phone = document.getElementById("phone-input").value;
  const email = document.getElementById("email-input").value;
  contacts.push({ name, phone, email });
  document.getElementById("content").innerHTML = `
     <h3>New Contact</h3>
     <p>Name: ${name}</p>
     <p>Phone: ${phone}</p>
     <p>Email: ${email}</p>
    `;
}

// Delete Contact
function deleteContact() {
  const deleteQuery = document.getElementById("delete-input").value;
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].name === deleteQuery) {
      contacts.splice(i, 1);
      document.getElementById("content").innerHTML = `<h3>Deleted Contact</h3>`;
      return;
    }
  }
  document.getElementById("content").innerHTML = "<h3>Person Not Found</h3>";
}
