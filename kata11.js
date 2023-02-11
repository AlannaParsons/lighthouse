/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs - prep work
Feb 10 2023
-------------------------------------------------------------
Bouncy Castles
The attractions are each made up of a combination of several different s
hapes: cones, spheres and prisms. For example, the giant inflatable duck 
is made up of two spheres (the body and head) and a cone (the beak) 🦆.

Each shape has a different calculation for determining volume, so we'll 
need to create a few functions that will help us figure out the volume 
of the various inflatable attractions.
sphereVolume()will calculate the volume of a sphere given a radius
coneVolume() will calculate the volume of a cone given a radius and a height
prismVolume() will calculate the volume of a prism given a height, a width, and a depth
totalVolume() will receive an array containing the different shapes that make 
up a single attraction.

*/


const PI = 3.14159 ;

const sphereVolume = function (radius) {
  return ((4/3) * PI * Math.pow(radius, 3));
}

console.log('1: ', 4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  return  ((PI * radius * radius * height) / 3);  
}

console.log('2: ', 45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  return ( height * (width * depth));
}

console.log('3: ', prismVolume(3, 4, 5) === 60);


//expected:
//   input - 
//      solids : n array containing the different shapes
//   output - num, total volume of given shapes
const totalVolume = function (solids) {
  let total = 0;
  for (shape of solids){
    switch(shape.type){
      case 'sphere': 
        total += sphereVolume(shape.radius);
        break;
      case 'cone': 
        total += coneVolume(shape.radius, shape.height)
        break;
      case 'prism': 
        total += prismVolume(shape.height, shape.width, shape.depth) 
        break;
      default:
        console.log('not a shape');
    }
  }
  return total;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log('duck: ', 272000 < totalVolume(duck) && totalVolume(duck) < 275000);