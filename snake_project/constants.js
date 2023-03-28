// constants.js for snake_project
/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 26 2023
-------------------------------------------------------------

Instruction
currently :
  IP,
  PORT,
  hotkeys,
  userName
 ** sass unused
*/

const IP = '10.0.2.15';
const PORT = 50541;
const userName = 'AGP';

const hotkeys = {
  w : "Move: up",
  a : "Move: left",
  s : "Move: down",
  d : "Move: right"
}

const sass = {
  z : "Say: zoots",
  x : "Say: xray",
  c : "Say: cup",
  v : "Say: very"
}

module.exports = {
  IP,
  PORT,
  hotkeys,
  userName
};