// fetcher.js
/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 27 2023
-------------------------------------------------------------
Instruction


It should take two command line arguments:

a URL
a local file path
It should download the resource at the URL to the local path on your machine.
Upon completion, it should print out a message like Downloaded and
saved 1235 bytes to ./index.html.

There are two operations in this problem which will take an unknown
amount of time:

- You need to make an http request and wait for the response.
- After the http request is complete, you need to take the data
you receive and write it to a file in your local filesystem.

implimentation
Install and use the request library to make the HTTP request
  (We know this library is deprecated but it is still ok to use for our purposes.)
Use Node's fs (file system) module to write the file
Use the callback based approach we've been learning so far
Do not use the pipe function
Do not use synchronous functions (see warning above)
stretch
What should happen if:

the local file already exists?
  If the file path already exists, right now your app will overwrite it!
  If you want to change this, let the user know and prompt them to
  type in Y(followed by the enter key) to overwrite the file, otherwise
  skip and exit the app. We suggest using the readline module, which we've
  previously used.
the local file path given is invalid?
  If the file path is invalid, the app should fail and let the user
  know about this issue.
the URL results in an error or non-200 result?
  If the URL is invalid, terminate the app explaining to the user
  what went wrong, and not write the response body to the file.

FORMAT OF EXPECTED INPUT
> node fetcher.js http://www.example.edu/ ./index.html

EXPECTED OUTPUT
  Downloaded and saved 3261 bytes to ./index.html

TEST VALS
  //const URL = 'http://www.example.edu/'
  //const filePath = './text_out/testing123.txt'
*/

'use strict';
const fs = require('fs');
const readline = require('readline');
const request = require('request');

/**
 * body() - gets args from user, checkinfo for successive callbacks to
 *  read from url and write to file
 *
 * @return {undefined}
*/
function body() {
  const args = process.argv;
  const URL = args[2];
  const filePath = args[3];

  fileCheck(filePath, URL);
}

/**
 * fileCheck(filePath) - check if file already exists. if so prompt user
 *  if they would like to overwrite. (only accepts y || Y for overwrite)
 *
 * used by - body()
 * calls - requestInfo(filePath, URL)
 *
 * @param {string} filePath
 * @return {undefined} if error occurs = program exit
*/
function fileCheck(filePath, URL) {

  if (fs.existsSync(filePath)) {
    let prompt = 'This file already exists. Would you like to overwrite it? (Y/N) :';

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(prompt, (answer) => {
      rl.close();

//maybe make terniary?
      if (answer.toUpperCase() !== 'Y') process.exit();
      else { requestInfo(filePath, URL); }
    });

  } else { requestInfo(filePath, URL); }
}

/**
 * requestInfo(filePath, URL) -
 *
 * used by - fileCheck(filePath)
 * calls - writing(body, filePath)
 *
 * @param {string} filePath
 * @param {string} URL
 * @return {undefined} if error occurs = program exit
*/
function requestInfo(filePath, URL) {
  request(URL, (error, response, body) => {
    if (error) {
      console.error('URL IS INVALID\n', error);
      process.exit();
    }
    writing(body, filePath);
  });
}

/**
 * writing(content, fileOut) - write content to file given by user
 *
 * used by - requestInfo(filePath, URL)
 *
 ** https://nodejs.dev/en/learn/writing-files-with-nodejs/
 ** https://stackoverflow.com/questions/9864662/how-to-get-the-string-length-in-bytes-in-nodejs
 *
 * @param {string} content
 * @param {string} fileOut
 * @return {undefined} endCase program exit
*/
function writing(content, fileOut) {
  fs.writeFile(fileOut, content, error => {
    if (error) {
      console.error('FILE PATH IS INVALID\n', error);
      process.exit();
    }
    console.log(`Downloaded and saved ${Buffer.byteLength(content, 'utf8')} bytes to ${fileOut}.`);
    process.exit();;
  });
}

body();
