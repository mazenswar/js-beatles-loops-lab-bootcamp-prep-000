// add solution here
function theBeatlesPlay(artist, instrument) {
  
  var arr=[];
  
  for (let i=0; i < artist.length; i++)  {
       arr.push(`${artist[i]} plays ${instrument[i]}`)

  }
return arr;
  
}



  /*for (let i=0; i < artist.length; i++) {
    for (let x=0; x < instrument.length; x++) {
      arr.push(`${artist} plays ${instrument[x]}`);
    }
  }*/