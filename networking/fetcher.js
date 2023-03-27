// fetcher.js
/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 26 2023
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
Install and use the request library to make the HTTP request (We know this library is deprecated but it is still ok to use for our purposes.)
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

> node fetcher.js http://www.example.edu/ ./index.html
Downloaded and saved 3261 bytes to ./index.html
*/

'use strict';

const args = process.argv;
//const argArray = args.slice(2);
const URL = args[2];
const filePath = args[3];
