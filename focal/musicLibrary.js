/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 12 2023
-------------------------------------------------------------

Instruction

The goal of this exercise is to continue practicing your ability
to work with arrays and objects, this time with minimal help or
step-by-step instructions.

We'll be implementing a program that manages music playlists using
objects and arrays.

The program will consist of:

An object, the library, that will store all the information about
tracks and playlists
A collection of functions that will perform certain operations
on the library, for example addPlaylist

We will need to implement the following functions:

printPlaylists
printTracks
printPlaylist
addTrackToPlaylist
addTrack
addPlaylist
printSearchResults (stretch)
*/

const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  // it's now a method!
  printPlaylists: function () {
    let string = '';

    for (let playlist in library.playlists) {
      string += stringPlaylist(library.playlists[playlist]);
    }

    console.log(string);
  },

  // it's now a method!
  printTracks: function () {
    let string = '';

    for (let track in library.tracks) {
      string += stringSongs(library.tracks[track]);
    }

    console.log(string);
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
/*
const printPlaylists = function() {
  let string = '';

  for (let playlist in library.playlists) {
    string += stringPlaylist(library.playlists[playlist]);
  }

  console.log(string);
}*/


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
/*
const printTracks = function() {
  let string = '';

  for (let track in library.tracks) {
    string += stringSongs(library.tracks[track]);
  }

  console.log(string);
}*/


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  let string = '';

  //get playlist
  string += stringPlaylist(library.playlists[playlistId]);

  //get tracks
  for (let track of library.playlists[playlistId]['tracks']) {
    string += stringSongs(library.tracks[track]);
  }

  console.log(string);
}


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
}


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(8).substring(4);
}


// adds a track to the library
const addTrack = function(name, artist, album) {

  do {
    uniqueID = 't' + generateUid();
  } while (uniqueID in library.tracks)

  library.tracks[uniqueID] =  {
    'id': uniqueID ,
    'name': name ,
    'artist': artist,
    'album': album
  };
}

// adds a playlist to the library
const addPlaylist = function(name) {

  do {
    uniqueID = 'p' + generateUid();
  } while (uniqueID in library.tracks)

  library.playlists[uniqueID] =  {
    'id': uniqueID ,
    'name': name ,
    'tracks': []
  };
}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
// https://stackoverflow.com/questions/55458675/filter-is-not-a-function
const printSearchResults = function(query) {
  let prints = '';

  let filtered = Object.values(library.tracks).filter(track => {
    return find(track.name, query) ||
      find(track.artist, query) ||
      find(track.album, query)
  });

  for (let song of filtered) {
    prints += stringSongs(song);
  }

  console.log(prints);
}

// added helpers to scope

const stringSongs = function(song) {
  let string = `${song.id} : ${song.name} by`
      + ` ${song.artist}`
      + ` (${song.album}) \n`;
  return string;
}

const stringPlaylist = function(playlist) {
  let string = `${playlist.id} : ${playlist.name} - `
  + `${playlist.tracks.length} tracks \n`;
  return string;
}


const find = function(string, substring) {
  //if (string.includes(substring)){
  //console.log('found:',substring, ' in ' ,string);}
  return string.includes(substring);
}

library.printPlaylists();
library.printTracks();
printPlaylist('p01');
addTrackToPlaylist('t01', 'p02');
printPlaylist('p02');
addTrack('name', 'artist', 'album');
addTrack('Survivor', 'Queen B', 'A Hit');
addTrack('Re', 'Anon', 'Best Of');
addTrack('Turn', 'Hero', 'Brown Cow');
addTrack('Maybe', 'Found', 'Punk');
library.printTracks();
addPlaylist('Bangers');
addPlaylist('Maybe Disco');
library.printPlaylists();
printSearchResults('o');