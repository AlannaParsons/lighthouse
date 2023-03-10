/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs - prep work
Jan 19 2023
-------------------------------------------------------------
range should be an array of 2 numbers representing the start and 
  end values for the loop.
multiples should be an array of 2 numbers representing the multiples 
  you want to replace with words.
words should be an array of 2 strings representing the words that 
  will replace the multiples.
*/

function loopyLighthouse(range, multiples, words){
  for (let i = range[0]; i<=range[1]; i++){
    let temp = '';
    if (i%multiples[0] === 0){
      temp+= words[0];
    }
    if (i%multiples[1] === 0){
      temp+= words[1];
    }
    temp = !temp ? i : temp;
    console.log(temp);
  }

}

//TESTS
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

