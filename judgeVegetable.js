/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs - prep work
Jan 20 2023
-------------------------------------------------------------
For this challenge, we'll need to implement a function called judgeVegetable()
that will decide which vegetable is best based on a given judging characteristic.
 Our function will receive two parameters: a list of veggies(as an array of 
  objects), and a characteristic to judge the veggies by (in the case of a
  tomato, either redness or plumpness).

Our function must return the name of the person who submitted 
(vegetables.submitter) the vegetable with the highest ranking in the provided
 category.
*/

const judgeVegetable = function (vegetables, metric) {
  var maxMetric = 0;
  var winner = '';
  for (var obj of vegetables){
    if (obj[metric] > maxMetric){
      maxMetric = obj[metric];
      winner = obj.submitter;
    }
  }
  return (winner);
}


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));