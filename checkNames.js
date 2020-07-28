const {prefabs} = require('./index.js');

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
console.log(`Finished parsing with ${warnings} warnings.`);
