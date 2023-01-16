
for (let i = 100; i<=200; i++){
  let temp = '';
  if (i%3 === 0){
    temp+= "loopy";
  }
  if (i%4 === 0){
    temp+= "lighthouse";
  }
  temp = !temp ? i : temp;
  console.log(temp);
}