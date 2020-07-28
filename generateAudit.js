const {prefabs} = require('./index.js');
const fs = require('fs');
const colors = require('colors');

const nameMap = {},
      allowedChars = {
        ' ': 'isEmpty',
        '.': 'isFloor',
        ',': 'isFloorSpecial',
        '#': 'isWall',
        '%': 'isWallSpecial',
        '~': 'isWater',
        '-': 'isWaterSpecial',
        '*': 'isWindow',
        'x': 'isRemoved',
        '?': 'isVoid',
        '+': 'isDoor'
      },
      heights = [],
      widths = [],
      floors = [],
      floorsSpecial = [],
      walls = [],
      wallsSpecial = [],
      water = [],
      waterSpecial = [],
      window = [],
      removed = [],
      voids = [],
      doors = [];

let errors = 0;

function error(name,index,prefab){
  errors++;
  console.log(`ERROR [${name}]: @index=${index},name=${prefab.name}`.red);
} //end error()

prefabs.forEach((prefab,index)=>{

  // name audit
  if(!prefab.name){
    error('missing name',index,prefab);
  }else if(nameMap[prefab.name]){
    error('duplicate name',index,prefab);
  }else{
    nameMap[prefab.name] = true;
  } //end if

  // audit of the sizes
  if(!prefab.data.length){
    error('height data missing',index,prefab);
  }else{
    heights.push(prefab.data.length);
    if(!prefab.data[0].length){
      error('width data missing',index,prefab);
    }else{
      widths.push(
        prefab.data.reduce((max,cur)=> max>cur.length?max:cur.length,0)
      );
      const prefabDoors = prefab.data.reduce((cur,line)=> line.split('').reduce((cur,char)=> char==='+'?cur+1:cur,cur),0);

      if(!prefabDoors){
        error('no doors',index,prefab);
      }else{
        doors.push(prefabDoors);
      } //end if
      const illegalCharLine = prefab.data.find(line=>{
        return line.split('').find(char=> !allowedChars[char]);
      })
      if(illegalCharLine){
        const char = illegalCharLine.split('').find(char=>!allowedChars[char]);

        error(`illegal character: ${char}`,index,prefab);
      } //end if
      floors.push(prefab.data.reduce((cur,line)=> line.split('').reduce((cur,char)=> char==='.'?cur+1:cur,cur),0));
      floorsSpecial.push(prefab.data.reduce((cur,line)=> line.split('').reduce((cur,char)=> char===','?cur+1:cur,cur),0));
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

if(errors>0){
  console.log(`Total errors: ${errors}`.red);
} //end if
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
      floorsSpecialMin = Math.min(...floorsSpecial),
      floorsSpecialMax = Math.max(...floorsSpecial),
      floorsSpecialAverage = floorsSpecial.reduce((a,b)=>a+b,0)/floorsSpecial.length,
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

const column1width = 14,
      column2width = 10,
      column3width = 10;

console.log(
  '[name]'.padEnd(column1width).cyan+
  '[minimum]'.padEnd(column2width).cyan+
  '[maximum]'.padEnd(column3width).cyan+
  '[average]'.cyan
);
console.log(
  'height'.padEnd(column1width).brightCyan+
  (''+heightsMin).padEnd(column2width).yellow+
  (''+heightsMax).padEnd(column3width).yellow+
  heightsAverage.toFixed(4).yellow
);
console.log(
  'width'.padEnd(column1width).brightCyan+
  (''+widthsMin).padEnd(column2width).yellow+
  (''+widthsMax).padEnd(column3width).yellow+
  widthsAverage.toFixed(4).yellow
);
console.log(
  'doors'.padEnd(column1width).brightCyan+
  (''+doorsMin).padEnd(column2width).yellow+
  (''+doorsMax).padEnd(column3width).yellow+
  doorsAverage.toFixed(4).yellow
);
console.log(
  'floors'.padEnd(column1width).brightCyan+
  (''+floorsMin).padEnd(column2width).yellow+
  (''+floorsMax).padEnd(column3width).yellow+
  floorsAverage.toFixed(4).yellow
);
console.log(
  'floorsSpecial'.padEnd(column1width).brightCyan+
  (''+floorsSpecialMin).padEnd(column2width).yellow+
  (''+floorsSpecialMax).padEnd(column3width).yellow+
  floorsSpecialAverage.toFixed(4).yellow
);
console.log(
  'walls'.padEnd(column1width).brightCyan+
  (''+wallsMin).padEnd(column2width).yellow+
  (''+wallsMax).padEnd(column3width).yellow+
  wallsAverage.toFixed(4).yellow
);
console.log(
  'wallsSpecial'.padEnd(column1width).brightCyan+
  (''+wallsSpecialMin).padEnd(column2width).yellow+
  (''+wallsSpecialMax).padEnd(column3width).yellow+
  wallsSpecialAverage.toFixed(4).yellow
);
console.log(
  'water'.padEnd(column1width).brightCyan+
  (''+waterMin).padEnd(column2width).yellow+
  (''+waterMax).padEnd(column3width).yellow+
  waterAverage.toFixed(4).yellow
);
console.log(
  'waterSpecial'.padEnd(column1width).brightCyan+
  (''+waterSpecialMin).padEnd(column2width).yellow+
  (''+waterSpecialMax).padEnd(column3width).yellow+
  waterSpecialAverage.toFixed(4).yellow
);
console.log(
  'windows'.padEnd(column1width).brightCyan+
  (''+windowMin).padEnd(column2width).yellow+
  (''+windowMax).padEnd(column3width).yellow+
  windowAverage.toFixed(4).yellow
);
console.log(
  'removed'.padEnd(column1width).brightCyan+
  (''+removedMin).padEnd(column2width).yellow+
  (''+removedMax).padEnd(column3width).yellow+
  removedAverage.toFixed(4).yellow
);
console.log(
  'voids'.padEnd(column1width).brightCyan+
  (''+voidsMin).padEnd(column2width).yellow+
  (''+voidsMax).padEnd(column3width).yellow+
  voidsAverage.toFixed(4).yellow
);
