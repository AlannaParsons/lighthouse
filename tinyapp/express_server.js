/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Jul 24 2023
-------------------------------------------------------------
Instruction

Add GET route to expressserver.js and render using accompanying template
Add POST route to expressserver.js to receive form submission
Update expressserver.js to store short-url and long-url key value pair to database when a POST request is received to /urls
Update expressserver.js to respond with a redirect from /urls to /urls/:id
Add validation

- data base is wiped when server is shut down
*/


const express = require("express");
const app = express();
const PORT = 8080; // default port 8080

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

app.get("/urls", (req, res) => {
  const templateVars = { urls: urlDatabase };
  res.render("urls_index", templateVars);
});

app.get("/urls/new", (req, res) => {
  res.render("urls_new");
});

//add for invalid id??
app.get("/u/:id", (req, res) => {
  const templateVars = { id: req.params.id, longURL: urlDatabase[req.params.id]};
  res.render("urls_show", templateVars);
});

app.post("/urls", (req, res) => {
//validation. could add pop up error message for user, or change redirect
  if (!Object.values(urlDatabase).includes(req.body.longURL)){
    const shortURL = generateRandomString();
    const goURL = `/u/${shortURL}`;

    urlDatabase[shortURL] = req.body.longURL;
    res.redirect(goURL);
  } else {
  //console.log('this url already exists');
  res.redirect("/urls/new");
  }
});

//https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
function generateRandomString() {
  const crypto = require("crypto");
  const id = crypto.randomBytes(4).toString('hex');
  return id;
}
