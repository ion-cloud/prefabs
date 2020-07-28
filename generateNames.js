const {generateName} = require('./generateName.js');
const {prefabs} = require('./index.js');
const fs = require('fs');
const colors = require('colors');

prefabs.forEach(prefab=>{
  prefab.name = generateName();
});

fs.writeFileSync('output.json',JSON.stringify(prefabs,null,2));
console.log('Successfully wrote names to "output.json".'.green);
