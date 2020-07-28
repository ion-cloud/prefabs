const titles = ['gentry','count','citizen','seigneur','countess','marquis','monseigneur','lady','lord','baron','marquess','duke','baroness','vassal king','vassal queen','scout','sovereign queen','emperor','empress','duchess','wood guard','sovereign king','wood captain','senior captain','guard','admiral','sentry','stone guard','private','commander','captain','stone captain','corporal','underling','bone fiend','fleshmonger','dread lord','bone guard','lieutenant','sargeant','overlord','general','blood guard','phalangite','hoplite','blood fiend','hoplomachos','lokhagos','bestiarii','taxiarchos','strategos','syntagma','dimachaeri','retiarii','mirmillones','velite','essedari','tagmatarkhis','andabatae','saggitarii','thrall','karl','hauld','huskarl','herse','thegn','jarl','arif','merkismathr','ra\'id','moqaddim','fariq','raqib','molazim','naqib','moshir','ghazi','bey','effendi','vizier','shah','agha','turai','khedive','padishah','rasal','samal','rasab','kama','seren','alam','ra\'al','arad','qarachu','nokud','bahadur','yurtchi','khan','boyan','worker','hunter','guardian','orlok','chieftain','slave','minion','sultan','overseer','student','dark one','scribe','worshiper','elder','librarian','ancient','fledgling','tormentor','prophet','savior','doomsayer','trainee','soldier','praetorian','field marshal','commander'];
const locational = [
  'of Tharsis', 'of Narsis', 'of New Saellem', 'of Crecia', 'of Dumasque', 'of Jewall', 'of Amari', 'of Esthar', 'of Menusia', 'of Moria','of the western strand','of bartle trading post','of the darkwood trading post','of the fortress of lost souls','of elderfall canyon','of darnum hill','of thornlift lake','of the temple of goad','of the swamp of cahar','of kinforge','of the altire caves','of moran veil','of kinforge mine','of crowsfeet spring','of elrin hills','of the fingers of the liche','of hatchet','of fae lake','of winebridge','gilden','of ridleah','of the outer reach','of harrow ridge','of the mellowdeep marsh','of hatchet forest','of the crest ridge minute post','of blithe','of jair pool','of the northern prairy','of darkwood','of the monastery of the yellow dragon','of the crimson river','of dupree','of demon tooth ridge','of the dwarven shrine','of urkin valley','of the dark peninsula','of thunder rock','of murkhill point','of the crecian highland','of carthage','of drummund','of maelo','of the rhinestone woodland','of the firan fields','of murkhill valley','of the jaspen flats','of the pixie encampment','of tarmaly','of the sprite encampment','of serpents lake','of virgil outpost','of lythantos\' shrine','of the shanto woodlands','of the cavern of whispers','of the monastery of the blue dragon','of the crystalline caverns','of the mirror shelf','of doonan','of the port of doonan','of the frozen wastes','of criss beach','of moran','of damien\'s peak','of crentin island','of the centaur encampment','of the moran wetlands','of dillon','of adlean beach','of the sea of mists','of the isle of derj','of lideah\'s belt','of fireforge chasm','of the forest of frost','of the blackened plain','of ironholde prison','of the tunnels of tyr','of the spirited highlands','of the gates of esthar','of mienous\' tears','of the crimson river','of the theatre noir','of the gnomish refuge camp','of mt. tyr','of the fallen palace','of dhiar flatland','of the esthar wetlands','of the endless plains of despair','of cirian swamp','of oakland grove','of the broken path of dhiar','of dhiar pines','of the plains of sedia','of the forgotten temple','of the hippodrome','of the ruined reservoir','of the jixti tribe','of the arbrest headland','of the quice tribe','of the polvi tribe','of the kipler drylands','of vhall oasis','of the hebna tribe','of the gevlar tribe','of the hopli tribe','of the toleer tribe','of the torni tribe','of the colleseum','of the ganti tribe','of the zemin tribe','of the lien grassland','of the sands of bone','of the fallen kingdom','of the monestary of the yellow dragon','of the great divide','of the morian range','of the monestary of the red dragon','of the kyrian range','of the mouth of mt. kyros','of the azrean blightland','of the kyros western flow','of the tilton drylands','of the kyros eastern flow','of the shrine of dekkashraen','of mt. kyros','of the iron sands','of the mines of kyros','of the loberian dryland','of traitors pass','of diegans cave','of lake meade','of the northern reach','of the morian desert','of lowland pass','of the balthier prominence','of dire clefs','of the molten flats','of the amari lowlands','of the ruins of ft. kilner','of the amari inlet','of tiegans belt','of jade beach','of kyra','of the twin river outlet','of warven hill','of twin river flats','of carvi strand','of port carvi','of verinton','of gorefell range','of the carvi upper strand','of the carvi lower strand','of the upper meaden','of the lower meaden','of ogler foothills','of the amari hinterlands','of crystal falls','of the eastern adelaid lowland','of the adelaid lowland','of the rolling hills','of brovost cave','of agiea spring','of the tirian caves','of the ruins of menus','of quirest highland','of the mirian caves','of the jirian caves','of the agiea river','of the lost city of amone','of crystal shoreside','of the tropics of dumit','of nitka rain forest'
];
const adjectives = ['Ad','Ae','Ara','Bal','Bei','Bi','Bry','Cai','Car','Chae','Cra','Da','Dae','Dor','Eil','El','Ela','En','Er','Fa','Fae','Far','Fen','Gen','Gil','Glyn','Gre','Hei','Hele','Her','Hola','Ian','Iar','Ili','Ina','Jo','Kea','Kel','Key','Kris','Leo','Lia','Lora','Lu','Mag','Mia','Mira','Mor','Nae','Neri','Nor','Ola','Olo','Oma','Ori','Pa','Per','Pet','Phi','Pres','Qi','Qin','Qui','Ralo','Rava','Rey','Ro','Sar','Sha','Syl','The','Tor','Tra','Tris','Ula','Ume','Uri','Va','Val','Ven','Vir','Waes','Wran','Wyn','Wysa','Xil','Xyr','Yel','Yes','Yin','Ylla','Zin','Zum','Zyl'];
const nouns =['balar','banise','bella','beros','can','caryn','ceran','cyne','dan','di','dithas','dove','faren','fiel','fina','fir','geiros','gella','golor','gwyn','hana','harice','hice','horn','jeon','jor','jyre','kalyn','kas','kian','krana','lamin','lana','lar','lee','len','leth','lynn','maer','maris','menor','moira','myar','mys','na','nala','nan','neiros','nelis','norin','peiros','petor','phine','phyra','qen','qirelle','quinal','ra','ralei','ran','rel','ren','ric','rie','rieth','ris','ro','rona','rora','roris','salor','sandoral','satra','stina','sys','thana','thyra','toris','tris','tumal','valur','varis','ven','vyre','warin','wenys','wraek','wynn','xalim','xidor','xina','xisys','yarus','ydark','ynore','yra','zana','zeiros','zorwyn','zumin'];
const badWords = new RegExp('\x73\x6C\x75\x74\x7C\x68\x6F\x65\x7C\x61\x6E\x61\x6C\x7C\x61\x6E\x75\x73\x7C\x61\x73\x73\x7C\x62\x61\x6E\x67\x7C\x62\x69\x74\x63\x7C\x62\x6F\x6E\x65\x72\x7C\x62\x75\x74\x74\x7C\x63\x6C\x69\x74\x7C\x63\x6F\x63\x6B\x7C\x63\x6F\x6F\x6E\x7C\x63\x72\x65\x61\x6D\x7C\x63\x75\x6E\x74\x7C\x64\x69\x63\x6B\x7C\x64\x69\x6C\x64\x7C\x64\x6F\x6C\x63\x7C\x65\x63\x63\x68\x7C\x65\x72\x6F\x74\x69\x7C\x65\x75\x6E\x75\x63\x7C\x66\x61\x67\x7C\x66\x65\x63\x61\x6C\x7C\x66\x65\x6C\x63\x68\x7C\x66\x69\x73\x74\x7C\x66\x75\x63\x6B\x7C\x67\x6F\x61\x74\x7C\x68\x65\x6E\x74\x61\x69\x7C\x68\x6F\x6E\x6B\x7C\x68\x75\x6D\x70\x7C\x69\x6E\x63\x65\x73\x74\x7C\x6A\x61\x63\x6B\x7C\x6D\x69\x6C\x66\x7C\x6E\x65\x67\x72\x7C\x6E\x69\x67\x67\x7C\x6E\x69\x67\x65\x7C\x6E\x75\x64\x65\x7C\x70\x61\x6B\x69\x7C\x70\x6F\x72\x6E\x7C\x70\x75\x73\x73\x7C\x73\x65\x78\x7C\x73\x68\x69\x74\x7C\x73\x6D\x75\x74\x7C\x73\x70\x69\x63\x7C\x74\x69\x74\x7C\x74\x77\x61\x74\x7C\x76\x75\x6C\x76\x7C\x76\x61\x67\x69','gi');
const vowels = [
  {value: 'a', weight: 8.167},
  {value: 'e', weight: 2.702},
  {value: 'ae', weight: 1.133},
  {value: 'ei', weight: 1.242},
  {value: 'ie', weight: 1.451},
  {value: 'oi', weight: 0.781},
  {value: 'io', weight: 0.862},
  {value: 'i', weight: 6.966},
  {value: 'o', weight: 6.507},
  {value: 'u', weight: 2.758},
  {value: 'y', weight: 0.974}
];
const consonants = [
  {value: 'b', weight: 12.492},
  {value: 'c', weight: 2.782},
  {value: 'd', weight: 4.253},
  {value: 'f', weight: 2.228},
  {value: 'g', weight: 1.015},
  {value: 'h', weight: 6.094},
  {value: 'j', weight: 0.153},
  {value: 'k', weight: 1.772},
  {value: 'l', weight: 9.025},
  {value: 'm', weight: 8.406},
  {value: 'n', weight: 2.749},
  {value: 'p', weight: 1.929},
  {value: 'q', weight: 0.095},
  {value: 'r', weight: 5.987},
  {value: 's', weight: 6.327},
  {value: 't', weight: 9.056},
  {value: 'v', weight: 0.978},
  {value: 'w', weight: 2.360},
  {value: 'x', weight: 0.150},
  {value: 'z', weight: 0.074}
];
const silentDigraphs = [
  {
    value: 'gn',
    weight: 1,
    wordEnd: false,
    wordStart: true,
    wordMiddle: false
  },{
    value: 'wr',
    weight: 1,
    wordEnd: false,
    wordStart: true,
    wordMiddle: false
  },{
    value: 'kn',
    weight: 1,
    wordEnd: false,
    wordStart: true,
    wordMiddle: false
  },{
    value: 'mn',
    weight: 1,
    wordEnd: false,
    wordStart: true,
    wordMiddle: false
  },{
    value: 'mb',
    weight: 1,
    wordEnd: true,
    wordStart: false,
    wordMiddle: false
  }
];
const digraphs = [
  {
    value: 'bl',
    weight: 2,
    wordEnd: false,
    wordStart: true,
    wordMiddle: true
  }, {
    value: 'br',
    weight: 2,
    wordEnd: false,
    wordStart: true,
    wordMiddle: true
  }, {
    value: 'ch',
    weight: 2,
    wordEnd: true,
    wordStart: true,
    wordMiddle: true
  }, {
    value: 'ck',
    weight: 2,
    wordEnd: true,
    wordStart: false,
    wordMiddle: true
  }, {
    value: 'cl',
    weight: 2,
    wordEnd: false,
    wordStart: true,
    wordMiddle: true
  }, {
    value: 'cr',
    weight: 2,
    wordEnd: false,
    wordStart: true,
    wordMiddle: true
  }, {
    value: 'dr',
    weight: 2,
    wordEnd: false,
    wordStart: true,
    wordMiddle: true
  }, {
    value: 'fl',
    weight: 2,
    wordEnd: false,
    wordStart: true,
    wordMiddle: true
  }, {
    value: 'fr',
    weight: 2,
    wordEnd: false,
    wordStart: true,
    wordMiddle: true
  }, {
    value: 'gh',
    weight: 2,
    wordEnd: true,
    wordStart: false,
    wordMiddle: true
  }, {
    value: 'gl',
    weight: 2,
    wordEnd: false,
    wordStart: true,
    wordMiddle: true
  }, {
    value: 'gr',
    weight: 2,
    wordEnd: false,
    wordStart: true,
    wordMiddle: true
  }, {
    value: 'ng',
    weight: 2,
    wordEnd: true,
    wordStart: false,
    wordMiddle: true
  }, {
    value: 'ph',
    weight: 2,
    wordEnd: true,
    wordStart: true,
    wordMiddle: false
  }, {
    value: 'pl',
    weight: 2,
    wordEnd: false,
    wordStart: true,
    wordMiddle: true
  }, {
    value: 'pr',
    weight: 2,
    wordEnd: false,
    wordStart: true,
    wordMiddle: true
  }, {
    value: 'qu',
    weight: 2,
    wordEnd: false,
    wordStart: true,
    wordMiddle: true
  }, {
    value: 'sc',
    weight: 2,
    wordEnd: false,
    wordStart: true,
    wordMiddle: true
  }, {
    value: 'sh',
    weight: 2,
    wordEnd: true,
    wordStart: true,
    wordMiddle: true
  }, {
    value: 'sk',
    weight: 2,
    wordEnd: true,
    wordStart: false,
    wordMiddle: true
  }, {
    value: 'sl',
    weight: 2,
    wordEnd: false,
    wordStart: true,
    wordMiddle: true
  }, {
    value: 'sm',
    weight: 2,
    wordEnd: false,
    wordStart: true,
    wordMiddle: true
  }, {
    value: 'sn',
    weight: 2,
    wordEnd: false,
    wordStart: true,
    wordMiddle: true
  }, {
    value: 'sp',
    weight: 2,
    wordEnd: false,
    wordStart: true,
    wordMiddle: true
  }, {
    value: 'st',
    weight: 2,
    wordEnd: false,
    wordStart: true,
    wordMiddle: true
  }, {
    value: 'sw',
    weight: 2,
    wordEnd: false,
    wordStart: true,
    wordMiddle: false
  }, {
    value: 'th',
    weight: 2,
    wordEnd: true,
    wordStart: true,
    wordMiddle: true
  }, {
    value: 'tr',
    weight: 2,
    wordEnd: false,
    wordStart: true,
    wordMiddle: true
  }, {
    value: 'tw',
    weight: 2,
    wordEnd: false,
    wordStart: true,
    wordMiddle: false
  }, {
    value: 'wh',
    weight: 2,
    wordEnd: false,
    wordStart: true,
    wordMiddle: false
  }, {
    value: 'fh',
    weight: 2,
    wordEnd: false,
    wordStart: true,
    wordMiddle: true
  }, { //elf only
    value: 'll',
    weight: 2,
    wordEnd: false,
    wordStart: false,
    wordMiddle: true
  }, { //elf only
    value: 'ss',
    weight: 2,
    wordEnd: false,
    wordStart: false,
    wordMiddle: true
  }, { //elf only
    value: 'sh',
    weight: 2,
    wordEnd: true,
    wordStart: true,
    wordMiddle: true
  }
];
const trigraphs = [
  {
    value: 'nth',
    weight: 2,
    wordEnd: true,
    wordStart: false,
    wordMiddle: false
  }, {
    value: 'sch',
    weight: 2,
    wordEnd: true,
    wordStart: true,
    wordMiddle: true
  }, {
    value: 'scr',
    weight: 2,
    wordEnd: false,
    wordStart: true,
    wordMiddle: true
  }, {
    value: 'shr',
    weight: 2,
    wordEnd: false,
    wordStart: true,
    wordMiddle: true
  }, {
    value: 'spl',
    weight: 2,
    wordEnd: false,
    wordStart: true,
    wordMiddle: true
  }, {
    value: 'spr',
    weight: 2,
    wordEnd: false,
    wordStart: true,
    wordMiddle: true
  }, {
    value: 'squ',
    weight: 2,
    wordEnd: false,
    wordStart: true,
    wordMiddle: false
  }, {
    value: 'str',
    weight: 2,
    wordEnd: false,
    wordStart: true,
    wordMiddle: false
  }, {
    value: 'thr',
    weight: 2,
    wordEnd: false,
    wordStart: true,
    wordMiddle: false
  }, { //elf only
    value: 'ves',
    weight: 18,
    wordEnd: true,
    wordStart: true,
    wordMiddle: false
  }, { //elf only
    value: 'ryn',
    weight: 18,
    wordEnd: true,
    wordStart: false,
    wordMiddle: false
  }, { //elf only
    value: 'las',
    weight: 18,
    wordEnd: true,
    wordStart: false,
    wordMiddle: false
  }, { //elf only
    value: 'ker',
    weight: 18,
    wordEnd: false,
    wordStart: true,
    wordMiddle: false
  }, { //elf only
    value: 'dar',
    weight: 18,
    wordEnd: false,
    wordStart: true,
    wordMiddle: false
  }, { //elf only
    value: 'thor',
    weight: 15,
    wordEnd: false,
    wordStart: false,
    wordMiddle: true
  }, { //elf only
    value: 'lyn',
    weight: 15,
    wordEnd: false,
    wordStart: true,
    wordMiddle: false
  }, { //elf only
    value: 'syn',
    weight: 15,
    wordEnd: true,
    wordStart: true,
    wordMiddle: true
  }, { //elf only
    value: 'kyl',
    weight: 15,
    wordEnd: true,
    wordStart: true,
    wordMiddle: true
  }, { //elf only
    value: 'hal',
    weight: 15,
    wordEnd: true,
    wordStart: true,
    wordMiddle: true
  }, { //elf only
    value: 'men',
    weight: 15,
    wordEnd: true,
    wordStart: true,
    wordMiddle: true
  }, { //elf only
    value: 'men',
    weight: 15,
    wordEnd: false,
    wordStart: false,
    wordMiddle: true
  }
];
const wordStart = [].concat(
  silentDigraphs.filter(c=>c.wordStart),
  consonants,
  digraphs.filter(c=>c.wordStart),
  trigraphs.filter(c=>c.wordStart)
);
const wordMiddle = [].concat(
  silentDigraphs.filter(c=>c.wordMiddle),
  consonants,
  digraphs.filter(c=>c.wordMiddle),
  trigraphs.filter(c=>c.wordMiddle)
);
const wordEnd = [].concat(
  silentDigraphs.filter(c=>c.wordEnd),
  consonants,
  digraphs.filter(c=>c.wordEnd),
  trigraphs.filter(c=>c.wordEnd)
);
const totalNames = 10;
const categories = [
  {
    name: 'small name 1',
    weight: 0.4,
    fn(){
      return `${generateWord('sve')}`;
    }
  },
  {
    name: 'small name 2',
    weight: 0.3,
    fn(){
      return `${generateWord('vev')}`;
    }
  },
  {
    name: 'small name 3',
    weight: 0.3,
    fn(){
      return `${generateWord('svm')}`;
    }
  },
  {
    name: 'medium name',
    weight: 0.5,
    fn(){
      return `${generateWord('svmv')}`;
    }
  },
  {
    name: 'medium name',
    weight: 0.5,
    fn(){
      return `${generateWord('vsve')}`;
    }
  },
  {
    name: 'long name',
    weight: 0.5,
    fn(){
      return `${generateWord('svmvme')}`;
    }
  }
];

// just get a random index of an array
function takeRandom(array){
  return array[Math.floor(Math.random()*array.length)];
} //end takeRandom()

// expects array of objects that contain attribute `weight` of type Number
function takeWeighted(array){
  let weightPool = array.map(c=>c.weight).reduce((p,c)=>p+c),
      randomWeight = Math.random()*weightPool;
  
  return array.find(option=>{
    let result = false;
    
    randomWeight-=option.weight;
    if(randomWeight<=0) result = option;
    return result;
  });
} //end takeWeighted()

// generates a word, makes sure it doesn't contain foul
// language (regenerates if necessary)
function generateWord(algorithm){
  let blueprint = algorithm.split(''), result;
  
  do{
    result = '';
    blueprint.forEach(action=>{
      if(action==='s'){ //start
        result += takeWeighted(wordStart).value;
      }else if(action==='m'){ //middle
        result += takeWeighted(wordMiddle).value;
      }else if(action==='e'){ //end
        result += takeWeighted(wordEnd).value;
      }else{ //vowel || 'v'
        result += takeWeighted(vowels).value
      }  //end if
    });
  }while(result.match(badWords));
  return result;
} //end generateWord()

module.exports = {
  generateName: function generateName(){
    return takeWeighted(categories).fn();
  } //end generateName()
};
