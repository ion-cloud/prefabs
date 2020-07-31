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
        '+': 'isDoorConnectable',
        '=': 'isDoor'
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
      if(!prefab.details.doors){
        error('no doors',index,prefab);
      }else{
        doors.push(prefab.details.doors);
      } //end if
      const illegalCharLine = prefab.data.find(line=>{
        return line.split('').find(char=> !allowedChars[char]);
      })
      if(illegalCharLine){
        const char = illegalCharLine.split('').find(char=>!allowedChars[char]);

        error(`illegal character: ${char}`,index,prefab);
      } //end if
      floors.push(prefab.details.floors);
      floorsSpecial.push(prefab.details.floorsSpecial);
      walls.push(prefab.details.walls);
      wallsSpecial.push(prefab.details.wallsSpecial);
      water.push(prefab.details.water);
      waterSpecial.push(prefab.details.waterSpecial);
      window.push(prefab.details.window);
      removed.push(prefab.details.removed);
      voids.push(prefab.details.void);
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
  'Total prefabs: '.cyan+
  (''+prefabs.length).yellow
);
console.log(
  '[name]'.padEnd(column1width).blue+
  '[minimum]'.padEnd(column2width).blue+
  '[maximum]'.padEnd(column3width).blue+
  '[average]'.blue
);
console.log(
  'height'.padEnd(column1width).cyan+
  (''+heightsMin).padEnd(column2width).yellow+
  (''+heightsMax).padEnd(column3width).yellow+
  heightsAverage.toFixed(4).yellow
);
console.log(
  'width'.padEnd(column1width).cyan+
  (''+widthsMin).padEnd(column2width).yellow+
  (''+widthsMax).padEnd(column3width).yellow+
  widthsAverage.toFixed(4).yellow
);
console.log(
  'doors'.padEnd(column1width).cyan+
  (''+doorsMin).padEnd(column2width).yellow+
  (''+doorsMax).padEnd(column3width).yellow+
  doorsAverage.toFixed(4).yellow
);
console.log(
  'floors'.padEnd(column1width).cyan+
  (''+floorsMin).padEnd(column2width).yellow+
  (''+floorsMax).padEnd(column3width).yellow+
  floorsAverage.toFixed(4).yellow
);
console.log(
  'floorsSpecial'.padEnd(column1width).cyan+
  (''+floorsSpecialMin).padEnd(column2width).yellow+
  (''+floorsSpecialMax).padEnd(column3width).yellow+
  floorsSpecialAverage.toFixed(4).yellow
);
console.log(
  'walls'.padEnd(column1width).cyan+
  (''+wallsMin).padEnd(column2width).yellow+
  (''+wallsMax).padEnd(column3width).yellow+
  wallsAverage.toFixed(4).yellow
);
console.log(
  'wallsSpecial'.padEnd(column1width).cyan+
  (''+wallsSpecialMin).padEnd(column2width).yellow+
  (''+wallsSpecialMax).padEnd(column3width).yellow+
  wallsSpecialAverage.toFixed(4).yellow
);
console.log(
  'water'.padEnd(column1width).cyan+
  (''+waterMin).padEnd(column2width).yellow+
  (''+waterMax).padEnd(column3width).yellow+
  waterAverage.toFixed(4).yellow
);
console.log(
  'waterSpecial'.padEnd(column1width).cyan+
  (''+waterSpecialMin).padEnd(column2width).yellow+
  (''+waterSpecialMax).padEnd(column3width).yellow+
  waterSpecialAverage.toFixed(4).yellow
);
console.log(
  'windows'.padEnd(column1width).cyan+
  (''+windowMin).padEnd(column2width).yellow+
  (''+windowMax).padEnd(column3width).yellow+
  windowAverage.toFixed(4).yellow
);
console.log(
  'removed'.padEnd(column1width).cyan+
  (''+removedMin).padEnd(column2width).yellow+
  (''+removedMax).padEnd(column3width).yellow+
  removedAverage.toFixed(4).yellow
);
console.log(
  'voids'.padEnd(column1width).cyan+
  (''+voidsMin).padEnd(column2width).yellow+
  (''+voidsMax).padEnd(column3width).yellow+
  voidsAverage.toFixed(4).yellow
);
