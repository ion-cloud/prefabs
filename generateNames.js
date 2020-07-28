const {generateName} = require('./generateName.js');
const {prefabs} = require('./index.js');
const fs = require('fs');

console.log('prefabs',prefabs.length);
console.log('isGenerateName?',typeof generateName);

prefabs.forEach(prefab=>{
  prefab.name = generateName();
});

fs.writeFileSync('output.json',JSON.stringify(prefabs,null,2));
