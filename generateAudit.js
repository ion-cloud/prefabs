const {prefabs} = require('./index.js');
const fs = require('fs');

const nameMap = {},
      heights = [],
      widths = [],
      doors = [];

prefabs.forEach((prefab,index)=>{

  // name audit
  if(!prefab.name){
    console.log(`ERR [missing name]: @index=${index}`);
  }else if(nameMap[prefab.name]){
    console.log(`ERR [duplicate name]: @index=${index},name=${prefab.name}`);
  }else{
    nameMap[prefab.name] = true;
  } //end if

  // audit of the sizes
  if(!prefab.data.length){
    console.log(`ERR [data missing]: @index=${index},@name=${prefab.name}`);
  }else{
    heights.push(prefab.data.length);
    if(!prefab.data[0].length){
      console.log(`ERR [width data missing]: @index=${index},@name=${prefab.name}`);
    }else{
      widths.push(
        prefab.data.reduce((max,cur)=> max>cur.length?max:cur.length,0)
      );
      const prefabDoors = prefab.data.reduce((cur,line)=> line.split('').reduce((cur,char)=> char==='+'?cur+1+cur:cur,cur),0);

      if(!prefabDoors){
        console.log(`ERR [no doors]: @index=${index},@name=${prefab.name}`);
      }else{
        doors.push(prefabDoors);
      } //end if
    } //end if
  } //end if
});

const heightsMin = Math.min(...heights),
      heightsMax = Math.max(...heights),
      heightsAverage = heights.reduce((a,b)=>a+b,0)/heights.length,
      widthsMin = Math.min(...widths),
      widthsMax = Math.max(...widths),
      widthsAverage = widths.reduce((a,b)=>a+b,0)/widths.length,
      doorsMin = Math.min(...doors),
      doorsMax = Math.max(...doors),
      doorsAverage = doors.reduce((a,b)=>a+b,0)/doors.length;

console.log('Heights:');
console.log('  Minimum: ',heightsMin);
console.log('  Maximum: ',heightsMax);
console.log('  Average: ',heightsAverage);
console.log('Widths:');
console.log('  Minimum: ',widthsMin);
console.log('  Maximum: ',widthsMax);
console.log('  Average: ',widthsAverage);
console.log('Doors:');
console.log('  Minimum: ',doorsMin);
console.log('  Maximum: ',doorsMax);
console.log('  Average: ',doorsAverage);
