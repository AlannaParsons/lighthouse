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


Over the next few exercises, we will modify our TinyURL app to allow people
to register for a user account with an email and a password. The app
will therefore have to properly store users as well.
*/


const express = require("express");
const app = express();
const PORT = 8080; // default port 8080

const cookieParser = require('cookie-parser');

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
//var app = express()
app.use(cookieParser())

const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

app.get("/urls", (req, res) => {
  //console.log('current user id??:',users[req.cookies["user_id"]]);
  const templateVars = { urls: urlDatabase, user: users[req.cookies["user_id"]] };
  res.render("urls_index", templateVars);
});

app.get("/urls/new", (req, res) => {
  const templateVars = { user: users[req.cookies["user_id"]] };
  res.render("urls_new", templateVars);
});

//add for invalid id??
app.get("/u/:id", (req, res) => {
  const templateVars = { id: req.params.id, longURL: urlDatabase[req.params.id], user: users[req.cookies["user_id"]]};
  res.render("urls_show", templateVars);
});

//check tempvars. used?
app.get("/register", (req, res) => {
  const templateVars = { id: req.params.id, longURL: urlDatabase[req.params.id], user: users[req.cookies["user_id"]]};
  res.render("urls_register", templateVars);
});

//check tempvars. used?
app.get("/login", (req, res) => {
  const templateVars = { id: req.params.id, longURL: urlDatabase[req.params.id], user: users[req.cookies["user_id"]]};
  res.render("urls_login", templateVars);
});

//header?
//login
app.post("/login", (req, res) => {

  //res.cookie('username', req.body.username);
  const inputEmail = req.body.email;
  //console.log('login print:',users);

  // temp will be null or id..user?
  let temp = exists('email', inputEmail);
  //existing user
  if (temp){
    res.cookie('user_id', temp.id);
    return res.redirect("/urls");

  }

  res.redirect("/register");

  //const result = users.find(({email}) => email === inputemail);


  //console.log('LOGIN RESULTS:',result);

});

//header???
//logout
app.post("/logout", (req, res) => {
  //res.clearCookie('username'); //only store user id as cookie moving forward
  res.clearCookie('user_id');
  res.redirect("/urls");
});

//header???
//POST /urls/:id/delete
//After the resource has been deleted, redirect the client back to the urls_index page ("/urls").
app.post("/urls/:id/delete", (req, res) => {
  delete urlDatabase[req.params.id]
  res.redirect("/urls");
})

//header???
//edit url
app.post("/u/:id", (req, res) => {
  urlDatabase[req.params.id] = req.body.newURL;
  res.redirect("/urls");
});

//header??
//add new long url
// add https and .com or request from user???
app.post("/urls/new", (req, res) => {
  longURLInput = 'http://www.' + req.body.longURL;
//validation. could add pop up error message for user, or change redirect
  if (!Object.values(urlDatabase).includes(longURLInput)){
    const shortURL = generateRandomString();
    const goURL = `/u/${shortURL}`;

    urlDatabase[shortURL] = longURLInput;
    //res.redirect(goURL);
    res.redirect("/urls");
  } else {
  //console.log('this url already exists');
  res.redirect("/urls/new");
  }
});

//header???
//auto login after register??
app.post("/register", (req, res) => {
  const password = req.body.password;
  const email = req.body.email;
  const found = exists('email', email);

  if (!password || !email || found) {
    return res.sendStatus(400);
  } else {
    console.log('recieved @ register:', email, password);
    const id = generateRandomString()

    users[id] = {
      id,
      email,
      password
    }

    res.cookie('user_id', id);
  }
  //console.log('@register print:',users)
  res.redirect("/urls");
});

//return if key? item exists in users (cannot use find, nested obj :()
//return id?? or user obj??
function exists(key, searchItem) {
  for (let id in users){
    if (users[id][key] === searchItem){
      //console.log('emAIL exists for login!!!');
      //res.cookie('user_id', users[id].id);
      console.log(searchItem, 'exists');
      return users[id];
    } //else {
      //console.log('no email exists @ login')
    //}

  }
  console.log(searchItem, 'doesnt exist');
  return null;
}

//https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
function generateRandomString() {
  const crypto = require("crypto");
  const id = crypto.randomBytes(4).toString('hex');
  return id;
}

//would prefer array of users...
const users = {
  userRandomID: {
    id: "userRandomID",
    email: "user@example.com",
    password: "purple-monkey-dinosaur",
  },
  user2RandomID: {
    id: "user2RandomID",
    email: "user2@example.com",
    password: "dishwasher-funk",
  },
  user3RandomID: {
    id: "user3RandomID",
    email: "test@test.com",
    password: "nonsensical",
  }
};
