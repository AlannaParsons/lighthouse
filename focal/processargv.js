'use strict';

for (let j = 0; j < process.argv.length; j++) {
    console.log(j + ' -> ' + (process.argv[j]));
}

//making dict from args . ex:{ _: [], i: 'jacob', j: 45 }
const args = require('minimist')(process.argv.slice(2));

console.log(args);
console.log(args.i);
/*

const minimist = require('minimist');

let args = minimist(process.argv.slice(2), {
    alias: {
        h: 'help',
        v: 'version'
    }
});

console.log('args:', args);


const minimist = require('minimist');

let args = minimist(process.argv.slice(2), {
    default: {
        port: 8080
    },
});
*/

console.log('args:', args);