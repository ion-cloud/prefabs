const {prefabs} = require('./index.js');
const fs = require('fs');
const colors = require('colors');

prefabs.forEach(prefab=>{
  prefab.details = {
    height: prefab.data.length,
    width: prefab.data.reduce((max,cur)=> max>cur.length?max:cur.length,0),
    floors: prefab.data.reduce((cur,line)=> line.split('').reduce((cur,char)=> char==='.'?cur+1:cur,cur),0),
    floorsSpecial: prefab.data.reduce((cur,line)=> line.split('').reduce((cur,char)=> char===','?cur+1:cur,cur),0),
    walls: prefab.data.reduce((cur,line)=> line.split('').reduce((cur,char)=> char==='#'?cur+1:cur,cur),0),
    wallsSpecial: prefab.data.reduce((cur,line)=> line.split('').reduce((cur,char)=> char==='%'?cur+1:cur,cur),0),
    water: prefab.data.reduce((cur,line)=> line.split('').reduce((cur,char)=> char==='~'?cur+1:cur,cur),0),
    waterSpecial: prefab.data.reduce((cur,line)=> line.split('').reduce((cur,char)=> char==='-'?cur+1:cur,cur),0),
    window: prefab.data.reduce((cur,line)=> line.split('').reduce((cur,char)=> char==='*'?cur+1:cur,cur),0),
    removed: prefab.data.reduce((cur,line)=> line.split('').reduce((cur,char)=> char==='x'?cur+1:cur,cur),0),
    void: prefab.data.reduce((cur,line)=> line.split('').reduce((cur,char)=> char==='?'?cur+1:cur,cur),0),
    doors: prefab.data.reduce((cur,line)=> line.split('').reduce((cur,char)=> char==='+'?cur+1:cur,cur),0)
  };
});

fs.writeFileSync('output.json',JSON.stringify(prefabs,null,2));
console.log('Successfully wrote details to "output.json".'.green);
