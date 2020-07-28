const {prefabs} = require('./index.js');
const fs = require('fs');

prefabs.forEach(prefab=>{
  prefab.details = {
    height: prefab.data.length,
    width: prefab.data.reduce((max,cur)=> max>cur.length?max:cur.length,0),
    doors: prefab.data.reduce((cur,line)=> line.split('').reduce((cur,char)=> char==='+'?cur+1+cur:cur,cur),0)
  };
});

fs.writeFileSync('output.json',JSON.stringify(prefabs,null,2));
