const {prefabs} = require('./index.js');
const colors = require('colors');

const nameMap = {};

let warnings = 0;

prefabs.forEach(prefab=>{
  if(nameMap[prefab.name]){
    console.log(prefab.name);
    warnings++;
  }else{
    nameMap[prefab.name] = true;
  } //end if
});

if(warnings.length){
  console.log(
    'Finished parsing with '.yellow+
    (''+warnings).red+
    ' warnings.'.yellow
  );
}else{
  console.log(
    'Finished parsing with '.yellow+
    (''+warnings).green+
    ' warnings.'.yellow
  );
} //end if
