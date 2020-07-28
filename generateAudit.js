const {prefabs} = require('./index.js');
const fs = require('fs');
const colors = require('colors');

const nameMap = {},
      heights = [],
      widths = [],
      doors = [],
      floors = [],
      walls = [],
      wallsSpecial = [],
      water = [],
      waterSpecial = [],
      window = [],
      removed = [],
      voids = [];

prefabs.forEach((prefab,index)=>{

  // name audit
  if(!prefab.name){
    console.log(`ERROR [missing name]: @index=${index}`.red);
  }else if(nameMap[prefab.name]){
    console.log(`ERROR [duplicate name]: @index=${index},name=${prefab.name}`.red);
  }else{
    nameMap[prefab.name] = true;
  } //end if

  // audit of the sizes
  if(!prefab.data.length){
    console.log(`ERROR [data missing]: @index=${index},@name=${prefab.name}`.red);
  }else{
    heights.push(prefab.data.length);
    if(!prefab.data[0].length){
      console.log(`ERROR [width data missing]: @index=${index},@name=${prefab.name}`.red);
    }else{
      widths.push(
        prefab.data.reduce((max,cur)=> max>cur.length?max:cur.length,0)
      );
      const prefabDoors = prefab.data.reduce((cur,line)=> line.split('').reduce((cur,char)=> char==='+'?cur+1:cur,cur),0);

      if(!prefabDoors){
        console.log(`ERROR [no doors]: @index=${index},@name=${prefab.name}`.red);
      }else{
        doors.push(prefabDoors);
      } //end if
      floors.push(prefab.data.reduce((cur,line)=> line.split('').reduce((cur,char)=> char==='.'?cur+1:cur,cur),0));
      walls.push(prefab.data.reduce((cur,line)=> line.split('').reduce((cur,char)=> char==='#'?cur+1:cur,cur),0));
      wallsSpecial.push(prefab.data.reduce((cur,line)=> line.split('').reduce((cur,char)=> char==='%'?cur+1:cur,cur),0));
      water.push(prefab.data.reduce((cur,line)=> line.split('').reduce((cur,char)=> char==='~'?cur+1:cur,cur),0));
      waterSpecial.push(prefab.data.reduce((cur,line)=> line.split('').reduce((cur,char)=> char==='-'?cur+1:cur,cur),0));
      window.push(prefab.data.reduce((cur,line)=> line.split('').reduce((cur,char)=> char==='*'?cur+1:cur,cur),0));
      removed.push(prefab.data.reduce((cur,line)=> line.split('').reduce((cur,char)=> char==='x'?cur+1:cur,cur),0));
      voids.push(prefab.data.reduce((cur,line)=> line.split('').reduce((cur,char)=> char==='?'?cur+1:cur,cur),0));
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
      doorsAverage = doors.reduce((a,b)=>a+b,0)/doors.length,
      floorsMin = Math.min(...floors),
      floorsMax = Math.max(...floors),
      floorsAverage = floors.reduce((a,b)=>a+b,0)/floors.length,
      wallsMin = Math.min(...walls),
      wallsMax = Math.max(...walls),
      wallsAverage = walls.reduce((a,b)=>a+b,0)/wallsSpecial.length,
      wallsSpecialMin = Math.min(...wallsSpecial),
      wallsSpecialMax = Math.max(...wallsSpecial),
      wallsSpecialAverage = wallsSpecial.reduce((a,b)=>a+b,0)/wallsSpecial.length,
      waterMin = Math.min(...water),
      waterMax = Math.max(...water),
      waterAverage = water.reduce((a,b)=>a+b,0)/water.length,
      waterSpecialMin = Math.min(...waterSpecial),
      waterSpecialMax = Math.max(...waterSpecial),
      waterSpecialAverage = waterSpecial.reduce((a,b)=>a+b,0)/waterSpecial.length,
      windowMin = Math.min(...window),
      windowMax = Math.max(...window),
      windowAverage = window.reduce((a,b)=>a+b,0)/window.length,
      removedMin = Math.min(...removed),
      removedMax = Math.max(...removed),
      removedAverage = removed.reduce((a,b)=>a+b,0)/removed.length,
      voidsMin = Math.min(...voids),
      voidsMax = Math.max(...voids),
      voidsAverage = voids.reduce((a,b)=>a+b,0)/voids.length;

console.log('[name]      [minimum]  [maximum]  [average]'.cyan);
console.log(
  'height'.padEnd(12).brightCyan+
  (''+heightsMin).padEnd(11).yellow+
  (''+heightsMax).padEnd(11).yellow+
  (''+heightsAverage).yellow
);
console.log(
  'width'.padEnd(12).brightCyan+
  (''+widthsMin).padEnd(11).yellow+
  (''+widthsMax).padEnd(11).yellow+
  (''+widthsAverage).yellow
);
console.log(
  'doors'.padEnd(12).brightCyan+
  (''+doorsMin).padEnd(11).yellow+
  (''+doorsMax).padEnd(11).yellow+
  (''+doorsAverage).yellow
);
console.log(
  'floors'.padEnd(12).brightCyan+
  (''+floorsMin).padEnd(11).yellow+
  (''+floorsMax).padEnd(11).yellow+
  (''+floorsAverage).yellow
);
console.log(
  'walls'.padEnd(12).brightCyan+
  (''+wallsMin).padEnd(11).yellow+
  (''+wallsMax).padEnd(11).yellow+
  (''+wallsAverage).yellow
);
console.log(
  'wallsSpecial'.padEnd(12).brightCyan+
  (''+wallsSpecialMin).padEnd(11).yellow+
  (''+wallsSpecialMax).padEnd(11).yellow+
  (''+wallsSpecialAverage).yellow
);
console.log(
  'water'.padEnd(12).brightCyan+
  (''+waterMin).padEnd(11).yellow+
  (''+waterMax).padEnd(11).yellow+
  (''+waterAverage).yellow
);
console.log(
  'waterSpecial'.padEnd(12).brightCyan+
  (''+waterSpecialMin).padEnd(11).yellow+
  (''+waterSpecialMax).padEnd(11).yellow+
  (''+waterSpecialAverage).yellow
);
console.log(
  'windows'.padEnd(12).brightCyan+
  (''+windowMin).padEnd(11).yellow+
  (''+windowMax).padEnd(11).yellow+
  (''+windowAverage).yellow
);
console.log(
  'removed'.padEnd(12).brightCyan+
  (''+removedMin).padEnd(11).yellow+
  (''+removedMax).padEnd(11).yellow+
  (''+removedAverage).yellow
);
console.log(
  'voids'.padEnd(12).brightCyan+
  (''+voidsMin).padEnd(11).yellow+
  (''+voidsMax).padEnd(11).yellow+
  (''+voidsAverage).yellow
);
