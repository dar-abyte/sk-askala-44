
const EVENT_CONFIG = {
  name: "MOSIS BUWITASHAKTI",     // <-- change event name
  badge: "logo-askala.png",                  // <-- 2-3 letter pixel logo badge (swap for <img> if you have a real logo)
  tagline: "YOUR ROLE AWAITS",
  groupLink: ""                 // <-- optional: WhatsApp/Discord group link for "ENTER THE TEAM"
};

const DIVISION_TAGLINES = {
  "SIE ACARA":        "Gak revisi, Gak acara",
  "SIE PDD":          "Banyak revisi, Banyak rezeki",
  "SIE PERKAB":       "Ga perkab, Ga kuat",
  "SIE HUMAS":        "Humas kaya, Humas Jaya",
  "SIE KONSUMSI":     "Ga konsum, Ga Wareg",
  "SIE PENDANAAN":    "Anti Mines",
  "SIE KEAMANAN":     "Dar, der dor, Anti gedor",
  "SIE SPONSOR":      "Sponsor jaya, Mosis kaya"
};

const committeeData = {
  "ADARA28": {
  name: "Adara Kaila",
  divisions: [
    "Ketua Pelaksana",
    "SIE DEKDOK",
    "SIE PENDANAAN"
  ],
  positions: [
    "Ketua Pelaksana",
    "Anggota Sie Dekdok",
    "Anggota Sie Pendanaan"
  ]
},
  "AERO29": {
  name: "Aero Junior",
  divisions: [
    "WAKIL KETUA PELAKSANA",
    "SIE PENDANAAN"
  ],
  positions: [
    "Wakil Ketua Pelaksana",
    "& Anggota Sie Pendanaan"
  ]
},

  "THEO28": {
  name: "Theo Satria",
  divisions: [
    "SIE PERKAB",
    "SIE PENDANAAN"
  ],
  positions: [
    "Koor Sie Perkab",
    "& Anggota Sie Pendanaan"
  ]
},
  "FIRZA28": {
  name: "Firza Isfina",
  divisions: [
    "SEKRETARIS",
    "SIE PENDANAAN",
    "SIE SPONSOR"
  ],
  positions: [
    "Sekretaris 1",
    "Anggota Sie Pendanaan",
    "& Anggota Sie Sponsor"
  ]
},
"ADIA28": {
  name: "Adia Tsalltsa",
  divisions: [
    "BENDAHARA",
    "SIE PENDANAAN"
  ],
  positions: [
    "Bendahara 1",
    "Koor Sie Pendanaan"
  ]
},
"CHIELLO29": {
  name: "Chiello Cezar",
  divisions: [
    "SEKRETARIS",
    "SIE PENDANAAN"
  ],
  positions: [
    "Sekretaris 2",
    "& Anggota Sie Pendanaan"
  ]
},
"WAWA29": {
  name: "Najwa Alexandra",
  divisions: [
    "BENDAHARA",
    "SIE PENDANAAN"
  ],
  positions: [
    "Bendagara 2",
    "& Wakoor Sie Pendanaan"
  ]
},
"KEVIN28": {
  name: "Ahmad Kevin",
  divisions: [
    "SIE ACARA",
    "SIE PENDANAAN",
    "SIE SPONSOR",
  ],
  positions: [
    "Anggota Sie Acara",
    "Anggota Sie Pendanaan",
    "Anggota Sie Sponsor"
  ]
},
"BERLIN28": {
  name: "Berliana Aden",
  divisions: [
    "SIE KESEHATAN",
    "SIE PENDANAAN",
    "SIE KEAMANAN"
  ],
  positions: [
    "Koor Sie Kesehatan",
    "Anggota Sie Pendanaan",
    "Anggota Sie Keamanan"
  ]
},
"FATICHA28": {
  name: "Faticha Rahmadina",
  divisions: [
    "SIE KONSUMSI",
    "SIE PENDANAAN"
  ],
  positions: [
    "Koor Konsumsi",
    "& Anggota Sie Pendanaan"
  ]
},
"RESTU28": {
  name: "Arnita Restu",
  divisions: [
    "SIE ACARA",
    "SIE PENDANAAN"
  ],
  positions: [
    "Anggota Sie Acara",
    "& Anggota Sie Pendanaan"
  ]
},
"RAZEL28": {
  name: "Muhammad Razel",
  divisions: [
    "SIE KEAMANAN",
    "SIE ACARA"
  ],
  positions: [
    "Koor Sie Keamanan",
    "& Anggota Sie Acara"
  ]
},
"NANA28": {
  name: "Nashwa Anjani",
  divisions: [
    "SIE ACARA",
    "SIE SPONSOR"
  ],
  positions: [
    "Anggota Sie Acara",
    "& Anggota Sie Sponsor"
  ]
},
"NATHA28": {
  name: "Raissa Natha",
  divisions: [
    "SIE ACARA",
    "SIE SPONSOR"
  ],
  positions: [
    "Anggota Sie Acara",
    "& Anggota Sie Sponsor"
  ]
},
"FAUZAN28": {
  name: "Al Fauzan Siiraj",
  divisions: [
    "SIE SPONSOR",
    "SIE ACARA"
  ],
  positions: [
    "Koor Sie Sponsor",
    "& Anggota Sie Acara"
  ]
},
"AXEL28": {
  name: "Axel Assadullah",
  divisions: [
    "SIE HUMAS",
    "SIE DEKDOK"
  ],
  positions: [
    "Anggota Sie Humas",
    "& Anggota Sie Dekdok"
  ]
},
"RAKHA28": {
  name: "Mochammad Rakha",
  divisions: [
    "SIE PERKAB",
    "SIE KEAMANAN"
  ],
  positions: [
    "Anggota Sie Perkab",
    "& Anggota Sie Keamanan"
  ]
},
"ALBETH28": {
  name: "Albeth Octa",
  divisions: [
    "SIE PERKAB",
    "SIE KEAMANAN"
  ],
  positions: [
    "Anggota Sie Perkab",
    "& Anggota Sie Keamanan"
  ]
},
"KEYZA28": {
  name: "Keyza Indah",
  divisions: [
    "SIE KONSUMSI",
    "SIE SPONSOR"
  ],
  positions: [
    "Anggota Sie Konsumsi",
    "& Anggota Sie Sponsor"
  ]
},
"RICKO29": {
  name: "Ricko Ahmad",
  divisions: [
    "SIE ACARA",
    "SIE KESEHATAN"
  ],
  positions: [
    "Anggota Sie Acara",
    "& Wakoor Sie Kesehatan"
  ]
},
"YOVITA29": {
  name: "Yovita Krisnatan",
  divisions: [
    "SIE ACARA",
    "SIE SPONSOR"
  ],
  positions: [
    "Anggota Sie Acara",
    "& Anggota Sie Sponsor"
  ]
},
"ALICIA29": {
  name: "Alicia Az Zahra",
  divisions: [
    "SIE ACARA",
    "SIE KEAMANAN"
  ],
  positions: [
    "Anggota Sie Acara",
    "& Anggota Sie Keamanan"
  ]
},
"NINA29": {
  name: "Nina Nasywa",
  divisions: [
    "SIE HUMAS",
    "SIE SPONSOR"
  ],
  positions: [
    "Wakoor Sie Humas",
    "& Anggota Sie Sponsor"
  ]
},
"TAMEWA29": {
  name: "Muhammad Firstianufi",
  divisions: [
    "SIE PERKAB",
    "SIE KEAMANAN"
  ],
  positions: [
    "Anggota Sie Perkab",
    "& Anggota Sie Keamanan"
  ]
},
"GANI29": {
  name: "Fathagani Rizky",
  divisions: [
    "SIE PERKAB",
    "SIE SPONSOR"
  ],
  positions: [
    "Anggota Sie Perkab",
    "& Anggota Sie Sponsor"
  ]
},
"TARA29": {
  name: "Tara Kirana",
  divisions: [
    "SIE KEAMANAN",
    "SIE SPONSOR"
  ],
  positions: [
    "Anggota Sie Keamanan",
    "& Anggota Sie Sponsor"
  ]
},
"NEYSA29": {
  name: "Neysa Syifa",
  divisions: [
    "SIE KONSUMSI",
    "SIE KESEHATAN"
  ],
  positions: [
    "Anggota Sie Konsumsi",
    "& Anggota Sie Kesehatan"
  ]
},
"SHAKI29": {
  name: "Azka Ghina",
  divisions: [
    "SIE KONSUMSI",
    "SIE KESEHATAN"
  ],
  positions: [
    "Anggota Sie Konsumsi",
    "& Anggota Sie Kesehatan"
  ]
},
"ELVARETTA28": {
  name: "Elvaretta Zhi Zhi",
  divisions: [
    "SIE HUMAS",
  ],
  positions: [
    "Anggota Sie Humas",
  ]
},
"AFKAR28": {
  name: "Afkar Veynna",
  divisions: [
    "SIE KONSUMSI",
    "SIE KESEHATAN"
  ],
  positions: [
    "Anggota Sie Konsumsi",
    "& Anggota Sie Kesehatan"
  ]
},
"NASYA28": {
  name: "Nasya Syafilla",
  divisions: [
    "SIE HUMAS",
  ],
  positions: [
    "Anggota Sie Humas",
  ]
},
"KAINDRA28": {
  name: "Kaindra Widhi",
  divisions: [
    "SIE ACARA",
  ],
  positions: [
    "Koor Sie Acara",
  ]
},
"AZKA28": {
  name: "Fauzan Azka",
  divisions: [
    "SIE PERKAB",
  ],
  positions: [
    "Anggota Sie Perkab",
  ]
},
"RAMA28": {
  name: "Ramadhan Rais",
  divisions: [
    "SIE KEAMANAN",
  ],
  positions: [
    "Anggota Sie Keamanan",
  ]
},
"MUTIARA28": {
  name: "Mutiara Lindra",
  divisions: [
    "SIE HUMAS",
  ],
  positions: [
    "Koor Sie Humas",
  ]
},
"ALEX28": {
  name: "Alex Firdaus",
  divisions: [
    "SIE PERKAB",
  ],
  positions: [
    "Anggota Sie Perkab",
  ]
},
"DANEO28": {
  name: "Daneo Cahya",
  divisions: [
    "SIE PERKAB",
  ],
  positions: [
    "Anggota Sie Perkab",
  ]
},
"DJENAR28": {
  name: "Djenar Ayesa",
  divisions: [
    "SIE DEKDOK",
  ],
  positions: [
    "Anggota Sie Dekdok",
  ]
},
"SANNY28": {
  name: "Sanny Olivia",
  divisions: [
    "SIE HUMAS",
    "SIE KESEHATAN"
  ],
  positions: [
    "Anggota Sie Humas",
    "& Anggota Sie Kesehatan"
  ]
},
"NAYLA28": {
  name: "Nayla Putri",
  divisions: [
    "SIE KEAMANAN",
  ],
  positions: [
    "Anggota Sie Keamanan",
  ]
},
"MILA28": {
  name: "Putri Khumairotul",
  divisions: [
    "SIE DEKDOK",
  ],
  positions: [
    "Koor Sie Dekdok",
  ]
},
"WILIYAN28": {
  name: "Muhammad Wiliyan",
  divisions: [
    "SIE HUMAS",
  ],
  positions: [
    "Anggota Sie Humas",
  ]
},
"ELSA28": {
  name: "Elsa Ayunanda",
  divisions: [
    "SIE DEKDOK",
  ],
  positions: [
    "Anggota Sie Dekdok",
  ]
},
"SURYA28": {
  name: "Pasuryaning Arum",
  divisions: [
    "SIE KONSUMSI",
  ],
  positions: [
    "Anggota Sie Konsumsi",
  ]
},
"KIRANANOV29": {
  name: "Kirana Noviarista",
  divisions: [
    "SIE HUMAS",
  ],
  positions: [
    "Anggota Sie Humas",
  ]
},
"CITRA29": {
  name: "Arabela Citra",
  divisions: [
    "SIE HUMAS",
  ],
  positions: [
    "Anggota Sie Humas",
  ]
},
"KIRANA29": {
  name: "Kirana Kristy",
  divisions: [
    "SIE SPONSOR",
  ],
  positions: [
    "Wakoor Sie Sponsor",
  ]
},
"ELYON29": {
  name: "Elyon Putra",
  divisions: [
    "SIE DEKDOK",
  ],
  positions: [
    "Wakoor Sie Dekdok",
  ]
},
"CELLYA29": {
  name: "Cellya Anindita",
  divisions: [
    "SIE HUMAS",
  ],
  positions: [
    "Anggota Sie Humas",
  ]
},
"NASYWA29": {
  name: "Nasywa Ramadhani",
  divisions: [
    "SIE DEKDOK",
  ],
  positions: [
    "Anggota Sie Dekdok",
  ]
},
"SHAZIA29": {
  name: "Shazia Putri",
  divisions: [
    "SIE DEKDOK",
  ],
  positions: [
    "Anggota Sie Dekdok",
  ]
},
"KENICHI29": {
  name: "Kenichi Sean",
  divisions: [
    "SIE PERKAB",
  ],
  positions: [
    "Wakoor Sie Perkab",
  ]
},
"RIFDA29": {
  name: "Rifda Adinda",
  divisions: [
    "SIE DEKDOK",
  ],
  positions: [
    "Anggota Sie DEKDOK",
  ]
},
"NABILA29": {
  name: "Nabila Nuriya",
  divisions: [
    "SIE HUMAS",
  ],
  positions: [
    "Anggota Sie Humas",
  ]
},
"ERRINA29": {
  name: "Errina Rahmadhita",
  divisions: [
    "SIE KONSUMSI",
  ],
  positions: [
    "Wakoor Sie Konsumsi",
  ]
},
"HAIDAR29": {
  name: "Haidar Savero",
  divisions: [
    "SIE DEKDOK",
  ],
  positions: [
    "Anggota Sie Dekdok",
  ]
},
"HILDA29": {
  name: "Hild Fanesya",
  divisions: [
    "SIE KONSUMSI",
  ],
  positions: [
    "Anggota Sie Konsumsi",
  ]
},
"MUTIARA29": {
  name: "Mutiara Azmil",
  divisions: [
    "SIE KEAMANAN",
  ],
  positions: [
    "Anggota Sie Keamanan",
  ]
},
"TALITHA29": {
  name: "Talitha Zahra",
  divisions: [
    "SIE PERKAB",
  ],
  positions: [
    "Anggota Sie Perkab",
  ]
},
"FARREL29":  {
  name: "Farrel Kurniawan",
  divisions: [
    "SIE PERKAB",
  ],
  positions: [
    "Anggota Sie Perkab",
  ]
},
"AIDAH29":   {
  name: "Aidah Almassyifa",
  divisions: [
    "SIE DEKDOK",
  ],
  positions: [
    "Anggota Sie Dekdok",
  ]
},
"CILLO29":   {
  name: "Cillo Alvero",
  divisions: [
    "SIE ACARA",
  ],
  positions: [
    "Anggota Sie Acara",
  ]
},
"HAURA29":   {
  name: "Haura Hani",
  divisions: [
    "SIE ACARA",
  ],
  positions: [
    "Wakoor Sie Acara",
  ]
},
"DHEVYN29":  {
  name: "Dhevyn Ananda",
  divisions: [
    "SIE KONSUMSI",
  ],
  positions: [
    "Anggota Sie Konsumsi",
  ] 
},
"BAIHAQI29": {
  name: "Aqila Baihaqi",
  divisions: [
    "SIE KEAMANAN",
  ],
  positions: [
    "Wakoor Sie Keamanan",
  ]
},
"NADIA29":   {
  name: "Nadia Viranda",
  divisions: [
    "SIE KONSUMSI",
  ],
  positions: [
    "Anggota Sie Konsumsi",
  ]
},
"TAQI27":   {
  name: "Taqi Baihaqi",
  divisions: [
    "KETUPEL ASKALA 43",
  ],
  positions: [
    "Ketupel ASKALA 43",
  ]
},
"JILAN29":   {
  name: "Jilan Latifah",
  divisions: [
    "SIE DEKDOK",
  ],
  positions: [
    "Anggota Sie Dekdok",
  ]
},
"AVI29":   {
  name: "Avi Putri",
  divisions: [
    "SIE HUMAS",
  ],
  positions: [
    "Anggota Sie Humas",
  ]
},
"FARA29":   {
  name: "Andi Faradiva",
  divisions: [
    "SIE PERKAB",
  ],
  positions: [
    "Anggota Sie Perkab",
  ]
},
}
const PAL = {
  watermelon:"#E36D9B", canary:"#E7DD6A", limeade:"#A0CB75",
  emerald:"#10B183", royal:"#2B4789", dark:"#151831",
  cream:"#F3E9D2", skin:"#E8C39E", navy2:"#1F2545"
};

const Audio_ = (() => {
  let ctx = null, master = null, muted = false, bgmTimer = null, bgmStep = 0;
  function ensure(){
    if(!ctx){
      ctx = new (window.AudioContext||window.webkitAudioContext)();
      master = ctx.createGain(); master.gain.value = 0.35; master.connect(ctx.destination);
    }
  }
  function blip({freq=440, type='square', dur=0.12, gain=0.5, slide=0}){
    if(muted) return; ensure();
    const t0 = ctx.currentTime;
    const osc = ctx.createOscillator(); const g = ctx.createGain();
    osc.type = type; osc.frequency.setValueAtTime(freq, t0);
    if(slide) osc.frequency.exponentialRampToValueAtTime(Math.max(40,freq+slide), t0+dur);
    g.gain.setValueAtTime(gain, t0);
    g.gain.exponentialRampToValueAtTime(0.001, t0+dur);
    osc.connect(g); g.connect(master);
    osc.start(t0); osc.stop(t0+dur+0.02);
  }
  const SFX = {
    jump:      () => blip({freq:520, dur:0.10, slide:220, gain:0.35}),
    collect:   () => blip({freq:740, dur:0.09, slide:380, gain:0.4, type:'square'}),
    coin:      () => blip({freq:880, dur:0.08, slide:460, gain:0.4, type:'square'}),
    hit:       () => blip({freq:160, dur:0.18, slide:-80, gain:0.45, type:'sawtooth'}),
    boost:     () => blip({freq:300, dur:0.22, slide:520, gain:0.4, type:'sawtooth'}),
    checkpoint:() => blip({freq:600, dur:0.14, slide:120, gain:0.35}),
    complete:  () => { blip({freq:660,dur:0.12,gain:0.4}); setTimeout(()=>blip({freq:880,dur:0.18,gain:0.4}),90); },
    reveal:    () => { [520,660,880,1040].forEach((f,i)=>setTimeout(()=>blip({freq:f,dur:0.22,gain:0.4}),i*110)); },
    button:    () => blip({freq:380, dur:0.06, gain:0.3}),
    secret:    () => { [660,880,1180].forEach((f,i)=>setTimeout(()=>blip({freq:f,dur:0.1,gain:0.35}),i*70)); }
  };
  const SCALES = { 
    1: [392,440,523,587,659],
    2: [349,415,466,523,622],
    3: [294,349,392,466,523]
  };
  function startBgm(world){
    stopBgm(); ensure(); bgmStep = 0;
    const notes = SCALES[world]||SCALES[1];
    bgmTimer = setInterval(()=>{
      if(muted) return;
      const f = notes[bgmStep % notes.length];
      blip({freq:f, dur:0.35, gain:0.14, type:'triangle'});
      bgmStep++;
    }, 380);
  }
  function stopBgm(){ if(bgmTimer){ clearInterval(bgmTimer); bgmTimer=null; } }
  function setMuted(v){ muted = v; if(muted) stopBgm(); }
  return { SFX, startBgm, stopBgm, setMuted, get muted(){return muted;} };
})();


const Input = { left:false, right:false, jump:false, jumpEdge:false, boost:false, _prevJump:false };
function bindKey(code, prop){
  window.addEventListener('keydown', e=>{ if(e.code===code){ Input[prop]=true; if(['Space','ArrowLeft','ArrowRight'].includes(code)) e.preventDefault(); }});
  window.addEventListener('keyup',   e=>{ if(e.code===code){ Input[prop]=false; }});
}
bindKey('ArrowLeft','left'); bindKey('ArrowRight','right');
bindKey('Space','jump'); bindKey('ShiftLeft','boost'); bindKey('ShiftRight','boost');

function bindTouch(id, prop){
  const el = document.getElementById(id); if(!el) return;
  const on = e=>{ e.preventDefault(); Input[prop]=true; };
  const off= e=>{ e.preventDefault(); Input[prop]=false; };
  el.addEventListener('touchstart', on, {passive:false});
  el.addEventListener('touchend', off, {passive:false});
  el.addEventListener('touchcancel', off, {passive:false});
  el.addEventListener('mousedown', on);
  el.addEventListener('mouseup', off);
  el.addEventListener('mouseleave', off);
}
bindTouch('btn-left','left'); bindTouch('btn-right','right');
bindTouch('btn-jump','jump'); bindTouch('btn-boost','boost');
document.addEventListener('touchmove', e=>{ if(e.target.closest('.touch-controls')) e.preventDefault(); }, {passive:false});


const SPRITE_KEY = { '.':null, D:PAL.dark, B:PAL.royal, S:PAL.skin, P:PAL.watermelon, Y:PAL.canary, G:PAL.emerald, W:PAL.cream };
const SPRITES = {
  idle: [
    "..DDDD..",
    ".DYYYYD.",
    ".DSSSSD.",
    ".DSWSWD.",
    "..DSSD..",
    ".DBBBBD.",
    "DPBBBPD.",
    "DPBBBPD.",
    ".DBGBBD.",
    "..DGGD..",
    "..D..D..",
    ".DD..DD."
  ],
  walk1: [
    "..DDDD..",
    ".DYYYYD.",
    ".DSSSSD.",
    ".DSWSWD.",
    "..DSSD..",
    ".DBBBBD.",
    "DPBBBPD.",
    "DPBBBPD.",
    ".DBGBD..",
    ".DGD.D..",
    ".DD..DD.",
    "DD....D."
  ],
  walk2: [
    "..DDDD..",
    ".DYYYYD.",
    ".DSSSSD.",
    ".DSWSWD.",
    "..DSSD..",
    ".DBBBBD.",
    "DPBBBPD.",
    "DPBBBPD.",
    "..DBGBD.",
    "..D.DGD.",
    ".DD..DD.",
    "D....DD."
  ],
  jump: [
    "..DDDD..",
    ".DYYYYD.",
    ".DSSSSD.",
    ".DSWSWD.",
    "..DSSD..",
    "DDBBBBDD",
    "DPBBBPD.",
    ".DBBBD..",
    ".DBGBD..",
    "..DGGD..",
    ".D....D.",
    "D......D"
  ],
  hit: [
    "..DDDD..",
    ".DPPPPD.",
    ".DSSSSD.",
    ".DSPSPD.",
    "..DSSD..",
    ".DBBBBD.",
    "DPBBBPD.",
    "DPBBBPD.",
    ".DBGBBD.",
    "..DGGD..",
    ".DD..DD.",
    "D......D"
  ],
  victory: [
    "D.DDDD.D",
    ".DYYYYD.",
    ".DSSSSD.",
    ".DSWSWD.",
    "..DSSD..",
    "DDBBBBDD",
    "DPBBBPD.",
    "DPBBBPD.",
    ".DBGBBD.",
    "..DGGD..",
    ".D....D.",
    "D......D"
  ]
};
function drawSprite(ctx, frameKey, x, y, facing, px=2){
  const rows = SPRITES[frameKey] || SPRITES.idle;
  ctx.save();
  const w = rows[0].length * px, h = rows.length * px;
  if(facing < 0){ ctx.translate(x + w, y); ctx.scale(-1,1); } else { ctx.translate(x, y); }
  for(let r=0;r<rows.length;r++){
    for(let c=0;c<rows[r].length;c++){
      const key = rows[r][c];
      const color = SPRITE_KEY[key];
      if(color){ ctx.fillStyle = color; ctx.fillRect(c*px, r*px, px, px); }
    }
  }
  ctx.restore();
  return {w,h};
}

/* ========================================================================
   8. LEVEL DEFINITIONS
   Coordinates are in the internal low-res game space (W x H).
   Each factory returns a FRESH object so retries reset collectibles/hazards.
   ======================================================================== */
const GW = 384, GH = 216, GROUND_Y = GH - 24;

function groundStrip(width){ return {x:0, y:GROUND_Y, w:width, h:24}; }

function level1(){ // WORLD 1 — PIXEL MEADOW — "Collect the Energy"
  const width = 920;
  return {
    world:1, width,
    spawn:{x:20,y:GROUND_Y-20},
    checkpoint: width*0.5,
    ground: groundStrip(width),
    platforms:[
      {x:180,y:GROUND_Y-40,w:60,h:14},
      {x:340,y:GROUND_Y-64,w:60,h:14},
      {x:520,y:GROUND_Y-44,w:70,h:14},
      {x:700,y:GROUND_Y-70,w:60,h:14},
    ],
    collectibles:[
      {x:120,y:GROUND_Y-40,r:6,type:'energy',collected:false},
      {x:205,y:GROUND_Y-64,r:6,type:'energy',collected:false},
      {x:400,y:GROUND_Y-40,r:6,type:'energy',collected:false},
      {x:545,y:GROUND_Y-70,r:6,type:'energy',collected:false},
      {x:820,y:GROUND_Y-40,r:6,type:'energy',collected:false},
    ],
    obstacles:[
      {x:290,y:GROUND_Y-14,w:16,h:14,type:'spike'},
      {x:620,y:GROUND_Y-14,w:16,h:14,type:'spike'},
    ],
    boosts:[],
    goal:null,
    secret:{x:730,y:GROUND_Y-96,w:14,h:14,found:false}, // easter egg on the high hidden platform
    timeLimit:40
  };
}

function level2(){ // WORLD 2 — COIN VALLEY — "Coin Rush"
  const width = 820;
  return {
    world:2, width,
    spawn:{x:20,y:GROUND_Y-20},
    checkpoint: width*0.5,
    ground: groundStrip(width),
    platforms:[
      {x:150,y:GROUND_Y-30,w:220,h:14},
      {x:430,y:GROUND_Y-50,w:150,h:14},
      {x:640,y:GROUND_Y-30,w:140,h:14},
    ],
    collectibles:[
      {x:90,y:GROUND_Y-40,r:5,type:'coin',collected:false},
      {x:170,y:GROUND_Y-50,r:5,type:'coin',collected:false},
      {x:230,y:GROUND_Y-50,r:5,type:'coin',collected:false},
      {x:290,y:GROUND_Y-50,r:5,type:'coin',collected:false},
      {x:450,y:GROUND_Y-70,r:5,type:'coin',collected:false},
      {x:500,y:GROUND_Y-70,r:5,type:'coin',collected:false},
      {x:660,y:GROUND_Y-50,r5:5,r:5,type:'coin',collected:false},
      {x:720,y:GROUND_Y-50,r:5,type:'coin',collected:false},
      {x:560,y:GROUND_Y-40,r:7,type:'golden',collected:false},
    ],
    obstacles:[
      {x:380,y:GROUND_Y-14,w:14,h:14,type:'bump'},
    ],
    boosts:[],
    goal:null,
    secret:null,
    timeLimit:35
  };
}

function level3(){ // WORLD 3 — FINAL CASTLE — "Final Dash"
  const width = 940;
  return {
    world:3, width,
    spawn:{x:20,y:GROUND_Y-20},
    checkpoint: width*0.5,
    ground: groundStrip(width),
    platforms:[
      {x:260,y:GROUND_Y-30,w:120,h:14},
      {x:520,y:GROUND_Y-30,w:120,h:14},
    ],
    collectibles:[
      {x:300,y:GROUND_Y-50,r:6,type:'energy',collected:false},
      {x:560,y:GROUND_Y-50,r:6,type:'energy',collected:false},
    ],
    obstacles:[
      {x:440,y:GROUND_Y-14,w:16,h:14,type:'spike'},
    ],
    boosts:[
      {x:140,y:GROUND_Y-14,w:34,h:14},
      {x:700,y:GROUND_Y-14,w:34,h:14},
    ],
    goal:{x:width-70,y:GROUND_Y-84,w:44,h:84},
    secret:null,
    timeLimit:35
  };
}

const LEVEL_FACTORY = {1:level1, 2:level2, 3:level3};
const CHALLENGE_META = {
  1:{ key:'challenge1', mission:'MISSION: COLLECT THE ENERGY', counterLabel:'ENERGY', target:5, failLine:"Your role is still locked." },
  2:{ key:'challenge2', mission:'MISSION: COIN RUSH',          counterLabel:'COINS',  target:8, failLine:"Almost there!" },
  3:{ key:'challenge3', mission:'MISSION: FINAL DASH',         counterLabel:null,     target:1, failLine:"You're almost at the finish!" }
};

/* ========================================================================
   9. PROGRESS PERSISTENCE (per personalized id, this-session only)
   ======================================================================== */
let memberId = null;
let member = null;

function progressKey(){
  return `quest_progress_${memberId}`;
}

function loadProgress(){
  try{
    const raw = sessionStorage.getItem(progressKey());
    if(raw) return JSON.parse(raw);
  }catch(e){}

  return {
    challenge1:false,
    challenge2:false,
    challenge3:false
  };
}

function saveProgress(p){
  try{
    sessionStorage.setItem(progressKey(), JSON.stringify(p));
  }catch(e){}
}

let progress = {
  challenge1:false,
  challenge2:false,
  challenge3:false
};
/* ========================================================================
   10. GAME STATE / RUNTIME
   ======================================================================== */
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
canvas.width = GW; canvas.height = GH;

let runtime = null;      // per-attempt runtime state for the active challenge
let currentChallenge = 1;
let rafId = null;
let lastT = 0;
let particles = [];
let secretToastShown = false;

function freshRuntime(challengeNum){
  const level = LEVEL_FACTORY[challengeNum]();
  return {
    level,
    player:{ x:level.spawn.x, y:level.spawn.y, w:16, h:20, vx:0, vy:0, onGround:false, facing:1, hp:3, invuln:0, boostT:0 },
    camX:0,
    counter:0,
    goldenGot:false,
    timeLeft: level.timeLimit,
    finished:false,
    lastCheckpointX: level.spawn.x
  };
}

/* ========================================================================
   11. SCREEN MANAGEMENT
   ======================================================================== */
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
function updateProgressStrip(){
  const strip = document.getElementById('progress-strip');
  strip.classList.remove('hidden');
  [1,2,3].forEach(n=>{
    const dot = document.getElementById('dot-'+n);
    dot.classList.remove('done','current');
    const key = CHALLENGE_META[n].key;
    if(progress[key]) dot.classList.add('done');
    else if(n === currentChallenge) dot.classList.add('current');
  });
}

/* ---- INTRO ---- */
document.getElementById('event-name-label').textContent = EVENT_CONFIG.name;
document.getElementById('event-badge').innerHTML = `
  <img src="${EVENT_CONFIG.badge}" alt="Event Logo">
`;

document.getElementById('reveal-badge').innerHTML = `
  <img src="${EVENT_CONFIG.badge}" alt="Event Logo">
`;
document.getElementById('btn-start').addEventListener('click', ()=>{
  Audio_.SFX.button();

  const input = document.getElementById('member-id');

  if(!input){
    alert('ID input belum tersedia.');
    return;
  }

  const enteredId = input.value.trim().toUpperCase();

  if(!enteredId){
    alert('Please enter your ID.');
    return;
  }

  if(!committeeData[enteredId]){
    alert('ID tidak ditemukan. Silakan cek kembali ID kamu.');
    input.focus();
    return;
  }

  memberId = enteredId;
  member = committeeData[memberId];

  // Load progress khusus orang ini
  progress = loadProgress();

  currentChallenge =
    [1,2,3].find(n => !progress[CHALLENGE_META[n].key]) || 1;

  startChallenge(currentChallenge);
});
/* ---- MUTE ---- */
const btnMute = document.getElementById('btn-mute');
btnMute.addEventListener('click', ()=>{
  Audio_.setMuted(!Audio_.muted);
  btnMute.textContent = Audio_.muted ? '🔇' : '🔊';
});

/* ---- RETRY ---- */
document.getElementById('btn-retry').addEventListener('click', ()=>{
  Audio_.SFX.button();
  startChallenge(currentChallenge);
});

/* ---- REVEAL ACTIONS ---- */
document.getElementById('btn-again').addEventListener('click', ()=>{
  progress = {challenge1:false, challenge2:false, challenge3:false};
  saveProgress(progress);
  showScreen('screen-intro');
  document.getElementById('progress-strip').classList.add('hidden');
});
function showTeamScreen(){

  const myDivisions = member.divisions || [member.division];

  const teamList = document.getElementById('team-list');

  teamList.innerHTML = '';

  myDivisions.forEach(division => {

    const divisionTitle = document.createElement('h3');
    divisionTitle.className = 'team-division-title';
    divisionTitle.textContent = division;

    teamList.appendChild(divisionTitle);

    const teammates = Object.values(committeeData).filter(person => {

      if(person.divisions){
        return person.divisions.includes(division);
      }

      return person.division === division;
    });

    teammates.forEach(person => {

      const div = document.createElement('div');
      div.className = 'team-member';

      if(person.name === member.name){
        div.classList.add('you');
        div.textContent = `${person.name} — YOU`;
      } else {
        div.textContent = person.name;
      }

      teamList.appendChild(div);
    });

  });

  showScreen('screen-team');
}
document.getElementById('btn-enter').addEventListener('click', ()=>{
  Audio_.SFX.button();
  showTeamScreen();
});
document.getElementById('btn-team-back').addEventListener('click', ()=>{
  Audio_.SFX.button();
  showScreen('screen-reveal');
});
document.getElementById('btn-save').addEventListener('click', exportRevealCard);

/* ========================================================================
   12. CHALLENGE LIFECYCLE
   ======================================================================== */
function startChallenge(num){
  currentChallenge = num;
  runtime = freshRuntime(num);
  secretToastShown = false;
  const meta = CHALLENGE_META[num];
  document.getElementById('hud-mission').textContent = meta.mission;
  updateCounterHud();
  updateProgressStrip();
  showScreen('screen-game');
  Audio_.startBgm(num);
  lastT = performance.now();
  cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(loop);
}

function updateCounterHud(){
  const meta = CHALLENGE_META[currentChallenge];
  const label = document.getElementById('hud-counter');
  if(meta.counterLabel){
    label.textContent = `${meta.counterLabel} ${runtime.counter}/${meta.target}`;
  } else {
    label.textContent = `REACH THE FINAL GATE`;
  }
  const hearts = document.getElementById('hud-hearts');
  hearts.innerHTML = '';
  for(let i=0;i<3;i++){
    const d = document.createElement('div');
    d.className = 'heart' + (i < runtime.player.hp ? '' : ' empty');
    hearts.appendChild(d);
  }
  document.getElementById('timer-bar').style.width = Math.max(0,(runtime.timeLeft/runtime.level.timeLimit)*100) + '%';
}

function showToast(text, ms=1100){
  const t = document.getElementById('toast');
  t.textContent = text;
  t.classList.remove('hidden');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(()=> t.classList.add('hidden'), ms);
}

function failChallenge(){
  cancelAnimationFrame(rafId);
  Audio_.stopBgm();
  Audio_.SFX.hit();
  document.getElementById('fail-sub').textContent = CHALLENGE_META[currentChallenge].failLine;
  showScreen('screen-fail');
}

function completeChallenge(){
  cancelAnimationFrame(rafId);
  Audio_.stopBgm();
  Audio_.SFX.complete();
  progress[CHALLENGE_META[currentChallenge].key] = true;
  saveProgress(progress);
  updateProgressStrip();
  showToast('CHALLENGE COMPLETE!', 1000);
  setTimeout(()=>{
    if(currentChallenge < 3){
      startChallenge(currentChallenge + 1);
    } else {
      runGateSequence();
    }
  }, 1150);
}

/* ========================================================================
   13. PHYSICS / UPDATE LOOP
   ======================================================================== */
const GRAVITY = 0.62, JUMP_V = -9.6, MOVE_SPEED = 1.55, MAX_FALL = 8.2, BOOST_MULT = 1.7;

function rectsOverlap(a,b){ return a.x < b.x+b.w && a.x+a.w > b.x && a.y < b.y+b.h && a.y+a.h > b.y; }
function circleRectOverlap(cx,cy,r,rect){
  const nx = Math.max(rect.x, Math.min(cx, rect.x+rect.w));
  const ny = Math.max(rect.y, Math.min(cy, rect.y+rect.h));
  const dx = cx-nx, dy = cy-ny;
  return (dx*dx+dy*dy) < r*r;
}

function loop(t){
  const dt = Math.min(2, (t-lastT)/16.67); // frame-independent multiplier, capped
  lastT = t;
  update(dt);
  render();
  if(!runtime.finished) rafId = requestAnimationFrame(loop);
}

function update(dt){
  const lvl = runtime.level, p = runtime.player;

  // boost meter / speed
  const boosting = Input.boost && runtime.boostMeter !== 0;
  runtime.boostMeter = runtime.boostMeter ?? 100;
  let speed = MOVE_SPEED;
  if(Input.boost && runtime.boostMeter > 0){ speed *= BOOST_MULT; runtime.boostMeter = Math.max(0, runtime.boostMeter - 1.6*dt); }
  else runtime.boostMeter = Math.min(100, runtime.boostMeter + 0.6*dt);
  if(p.boostT > 0){ speed = MOVE_SPEED*BOOST_MULT*1.15; p.boostT -= dt; }

  // horizontal input
  let vx = 0;
  if(Input.left){ vx = -speed; p.facing = -1; }
  if(Input.right){ vx = speed; p.facing = 1; }
  p.vx = vx;

  // jump (edge-triggered)
  if(Input.jump && !Input._prevJump && p.onGround){
    p.vy = JUMP_V; p.onGround = false; Audio_.SFX.jump();
  }
  Input._prevJump = Input.jump;

  // gravity
  p.vy = Math.min(MAX_FALL, p.vy + GRAVITY*dt);

  // integrate X + collide
  p.x += p.vx*dt*2.2;
  p.x = Math.max(0, Math.min(lvl.width - p.w, p.x));
  collideAxis(p, lvl, 'x');

  // integrate Y + collide
  p.y += p.vy*dt*2.2;
  p.onGround = false;
  collideAxis(p, lvl, 'y');

  if(p.invuln > 0) p.invuln -= dt;

  // checkpoint pass
  if(p.x > runtime.lastCheckpointX && p.x < lvl.checkpoint+40 && p.x > lvl.checkpoint-4){
    if(runtime.lastCheckpointX < lvl.checkpoint){ runtime.lastCheckpointX = lvl.checkpoint; Audio_.SFX.checkpoint(); }
  }

  // pit fall
  if(p.y > GH + 30){
    respawn(p, lvl, true);
  }

  // obstacles
  if(p.invuln <= 0){
    for(const ob of lvl.obstacles){
      if(rectsOverlap({x:p.x,y:p.y,w:p.w,h:p.h}, ob)){
        hitPlayer(p, lvl);
        break;
      }
    }
  }

  // boost pads
  for(const b of lvl.boosts){
    if(rectsOverlap({x:p.x,y:p.y,w:p.w,h:p.h}, b) && p.boostT <= 0){
      p.boostT = 0.6*60/60 * 20; // ~0.6s worth of dt units
      p.boostT = 20;
      Audio_.SFX.boost();
      spawnBurst(p.x+p.w/2, p.y+p.h, PAL.canary, 6);
    }
  }

  // collectibles
  for(const c of lvl.collectibles){
    if(!c.collected && circleRectOverlap(c.x, c.y, c.r, {x:p.x,y:p.y,w:p.w,h:p.h})){
      c.collected = true;
      if(c.type === 'golden'){
        runtime.goldenGot = true;
        showToast('BONUS! ✨', 700);
      } else {
        runtime.counter++;
        Audio_.SFX[c.type==='coin'?'coin':'collect']();
        spawnBurst(c.x, c.y, c.type==='coin'?PAL.canary:PAL.emerald, 8);
      }
      updateCounterHud();
    }
  }

  // secret
  if(lvl.secret && !lvl.secret.found && rectsOverlap({x:p.x,y:p.y,w:p.w,h:p.h}, lvl.secret)){
    lvl.secret.found = true;
    Audio_.SFX.secret();
    if(!secretToastShown){ showToast('SECRET FOUND!', 1200); secretToastShown = true; }
    spawnBurst(lvl.secret.x+7, lvl.secret.y+7, PAL.watermelon, 10);
  }

  // goal (challenge 3)
  if(lvl.goal && rectsOverlap({x:p.x,y:p.y,w:p.w,h:p.h}, lvl.goal)){
    runtime.finished = true;
    showToast('FINAL GATE REACHED!', 900);
    setTimeout(completeChallenge, 500);
  }

  // win by counter
  const meta = CHALLENGE_META[currentChallenge];
  if(meta.counterLabel && runtime.counter >= meta.target && !runtime.finished){
    runtime.finished = true;
    setTimeout(completeChallenge, 150);
  }

  // timer
  runtime.timeLeft -= dt/60;
  if(runtime.timeLeft <= 0 && !runtime.finished){
    runtime.finished = true;
    failChallenge();
  }
  document.getElementById('timer-bar').style.width = Math.max(0,(runtime.timeLeft/lvl.timeLimit)*100) + '%';

  // camera
  const viewW = GW;
  runtime.camX = Math.max(0, Math.min(p.x - viewW/2, lvl.width - viewW));

  // particles
  particles.forEach(pt=>{ pt.x += pt.vx*dt; pt.y += pt.vy*dt; pt.vy += 0.15*dt; pt.life -= dt; });
  particles = particles.filter(pt=>pt.life > 0);

  updateHeartsIfChanged();
}

function collideAxis(p, lvl, axis){
  const solids = [lvl.ground, ...lvl.platforms];
  for(const s of solids){
    if(rectsOverlap({x:p.x,y:p.y,w:p.w,h:p.h}, s)){
      if(axis === 'x'){
        if(p.vx > 0) p.x = s.x - p.w;
        else if(p.vx < 0) p.x = s.x + s.w;
      } else {
        if(p.vy > 0){ p.y = s.y - p.h; p.vy = 0; p.onGround = true; }
        else if(p.vy < 0){ p.y = s.y + s.h; p.vy = 0; }
      }
    }
  }
}

function respawn(p, lvl, fromPit){
  p.x = runtime.lastCheckpointX;
  p.y = lvl.spawn.y;
  p.vx = 0; p.vy = 0;
  if(fromPit) hitPlayer(p, lvl, true);
}

function hitPlayer(p, lvl, silent){
  if(p.invuln > 0) return;
  p.hp -= 1;
  p.invuln = 60;
  p.vx = -p.facing*3;
  p.vy = -4;
  if(!silent) Audio_.SFX.hit();
  spawnBurst(p.x+p.w/2, p.y+p.h/2, PAL.watermelon, 6);
  updateCounterHud();
  if(p.hp <= 0){
    runtime.finished = true;
    failChallenge();
  }
}

let lastHeartCount = -1;
function updateHeartsIfChanged(){
  if(runtime.player.hp !== lastHeartCount){
    lastHeartCount = runtime.player.hp;
    updateCounterHud();
  }
}

function spawnBurst(x,y,color,n){
  for(let i=0;i<n;i++){
    const a = Math.random()*Math.PI*2;
    particles.push({x,y,vx:Math.cos(a)*1.6,vy:Math.sin(a)*1.6-0.6,life:26,color});
  }
}

/* ========================================================================
   14. RENDERING
   ======================================================================== */
function bgFor(world){
  if(world===1) return {sky:['#7FA8D9','#BFE0C9'], hill:PAL.limeade, hill2:PAL.emerald};
  if(world===2) return {sky:['#E9B98A','#F3D9A0'], hill:PAL.watermelon, hill2:PAL.canary};
  return {sky:['#0F1440','#2B4789'], hill:PAL.royal, hill2:PAL.navy2};
}

function render(){
  const lvl = runtime.level, p = runtime.player, cam = runtime.camX;
  const bg = bgFor(lvl.world);

  // sky
  const grad = ctx.createLinearGradient(0,0,0,GH);
  grad.addColorStop(0, bg.sky[0]); grad.addColorStop(1, bg.sky[1]);
  ctx.fillStyle = grad; ctx.fillRect(0,0,GW,GH);

  // world-3 stars
  if(lvl.world===3){
    ctx.fillStyle = PAL.canary;
    for(let i=0;i<18;i++){
      const sx = (i*57 - cam*0.15) % GW; const sy = (i*33)%110+6;
      ctx.fillRect(((sx%GW)+GW)%GW, sy, 2, 2);
    }
  }

  // parallax hills (world1/2) or castle towers (world3)
  ctx.fillStyle = bg.hill2;
  for(let i=0;i<6;i++){
    const hx = (i*180 - cam*0.35) % (GW+180) - 40;
    if(lvl.world===3){ ctx.fillRect(hx, GH-90, 34, 66); ctx.fillRect(hx+8, GH-104, 18, 14); }
    else ctx.beginPath(), ctx.ellipse(hx+90, GH-24, 90, 40, 0, Math.PI, 0), ctx.fill();
  }
  ctx.fillStyle = bg.hill;
  for(let i=0;i<7;i++){
    const hx = (i*140 - cam*0.55) % (GW+140) - 30;
    if(lvl.world===3){ ctx.fillRect(hx, GH-70, 26, 46); }
    else ctx.beginPath(), ctx.ellipse(hx+70, GH-24, 70, 30, 0, Math.PI, 0), ctx.fill();
  }

  ctx.save();
  ctx.translate(-cam, 0);

  // ground
  drawSolid(lvl.ground, lvl.world);
  lvl.platforms.forEach(pf=>drawSolid(pf, lvl.world));

  // checkpoint flag
  ctx.fillStyle = PAL.dark; ctx.fillRect(lvl.checkpoint, GROUND_Y-40, 3, 40);
  ctx.fillStyle = PAL.canary; ctx.fillRect(lvl.checkpoint+3, GROUND_Y-40, 14, 10);

  // boosts
  lvl.boosts.forEach(b=>{
    ctx.fillStyle = PAL.canary;
    ctx.fillRect(b.x, b.y+6, b.w, 4);
    ctx.fillStyle = PAL.dark;
    for(let i=0;i<3;i++) ctx.fillRect(b.x+6+i*8, b.y-2, 6, 6);
  });

  // obstacles
  lvl.obstacles.forEach(ob=>{
    ctx.fillStyle = PAL.dark;
    ctx.beginPath(); ctx.moveTo(ob.x,ob.y+ob.h); ctx.lineTo(ob.x+ob.w/2,ob.y); ctx.lineTo(ob.x+ob.w,ob.y+ob.h); ctx.fill();
    ctx.fillStyle = PAL.watermelon;
    ctx.fillRect(ob.x+ob.w/2-2, ob.y+ob.h-6, 4, 4);
  });

  // collectibles
  const time = performance.now()/1000;
  lvl.collectibles.forEach(c=>{
    if(c.collected) return;
    const pulse = 1 + Math.sin(time*4 + c.x)*0.15;
    ctx.save(); ctx.translate(c.x, c.y);
    if(c.type==='coin' || c.type==='golden'){
      const squish = Math.abs(Math.sin(time*4+c.x));
      ctx.scale(0.4+squish*0.6, 1);
      ctx.fillStyle = c.type==='golden' ? PAL.cream : PAL.canary;
      ctx.beginPath(); ctx.arc(0,0,c.r,0,Math.PI*2); ctx.fill();
      ctx.fillStyle = PAL.dark; ctx.beginPath(); ctx.arc(0,0,c.r-2.5,0,Math.PI*2); ctx.stroke();
    } else {
      ctx.fillStyle = PAL.emerald;
      ctx.beginPath(); ctx.arc(0,0,c.r*pulse,0,Math.PI*2); ctx.fill();
      ctx.strokeStyle = PAL.watermelon; ctx.lineWidth=1.5;
      ctx.beginPath(); ctx.arc(0,0,c.r*pulse+2,0,Math.PI*2); ctx.stroke();
    }
    ctx.restore();
  });

  // secret gem
  if(lvl.secret && !lvl.secret.found){
    ctx.save(); ctx.translate(lvl.secret.x+7, lvl.secret.y+7); ctx.rotate(Math.PI/4);
    ctx.fillStyle = PAL.watermelon; ctx.fillRect(-6,-6,12,12);
    ctx.strokeStyle = PAL.dark; ctx.strokeRect(-6,-6,12,12);
    ctx.restore();
  }

  // goal gate (world 3)
  if(lvl.goal){
    const g = lvl.goal;
    ctx.fillStyle = PAL.royal; ctx.fillRect(g.x, g.y, 10, g.h); ctx.fillRect(g.x+g.w-10, g.y, 10, g.h);
    const glow = 0.6+Math.sin(time*4)*0.4;
    ctx.fillStyle = `rgba(231,221,106,${glow})`;
    ctx.fillRect(g.x, g.y-6, g.w, 8);
    ctx.fillStyle = PAL.dark; ctx.fillRect(g.x, g.y, g.w, g.h+4);
    ctx.fillStyle = `rgba(16,177,131,${0.25+glow*0.2})`;
    ctx.fillRect(g.x+10, g.y+4, g.w-20, g.h-4);
  }

  // particles
  particles.forEach(pt=>{
    ctx.fillStyle = pt.color; ctx.globalAlpha = Math.max(0, pt.life/26);
    ctx.fillRect(pt.x-1.5, pt.y-1.5, 3, 3);
  });
  ctx.globalAlpha = 1;

  // player
  let frame = 'idle';
  if(p.invuln > 40) frame = 'hit';
  else if(!p.onGround) frame = 'jump';
  else if(Math.abs(p.vx) > 0.1) frame = (Math.floor(time*8)%2===0) ? 'walk1' : 'walk2';
  if(runtime.finished) frame = 'victory';
  if(p.invuln > 0 && Math.floor(p.invuln/6)%2===0 && frame!=='victory'){ /* blink handled by alpha below */ }
  ctx.globalAlpha = (p.invuln>0 && Math.floor(p.invuln/5)%2===0) ? 0.4 : 1;
  drawSprite(ctx, frame, p.x-2, p.y-4, p.facing, 1.6);
  ctx.globalAlpha = 1;

  ctx.restore();
}

function drawSolid(rect, world){
  ctx.fillStyle = PAL.dark; ctx.fillRect(rect.x-1, rect.y-1, rect.w+2, rect.h+2);
  ctx.fillStyle = world===3 ? PAL.royal : (world===2 ? PAL.canary : PAL.emerald);
  ctx.fillRect(rect.x, rect.y, rect.w, rect.h < 20 ? rect.h : 6);
  ctx.fillStyle = world===3 ? '#3a4a7a' : '#3c2e28';
  ctx.fillRect(rect.x, rect.y+ (rect.h<20?rect.h:6), rect.w, Math.max(0,rect.h-(rect.h<20?rect.h:6)));
}

/* ========================================================================
   15. GATE SEQUENCE / SUSPENSE / REVEAL
   ======================================================================== */
function runGateSequence(){
  showScreen('screen-gate');
  document.getElementById('gate-line-1').textContent = 'QUEST COMPLETE';
  const l2 = document.getElementById('gate-line-2');
  l2.textContent = '';
  setTimeout(()=>{ l2.textContent = 'You completed every challenge.'; }, 700);
  setTimeout(()=>{ l2.textContent = 'Your role is now unlocked.'; }, 2000);
  setTimeout(()=> runSuspenseSequence(), 3400);
}

function runSuspenseSequence(){
  showScreen('screen-suspense');
  const status = document.getElementById('suspense-status');
  const status2 = document.getElementById('suspense-status-2');
  const fill = document.getElementById('load-fill');
  const cd = document.getElementById('countdown');
  status.textContent = 'ACCESSING PERSONNEL FILE...';
  status2.textContent = '';
  cd.textContent = '';
  fill.style.width = '0%';

  let pct = 0;
  const iv = setInterval(()=>{
    pct += 6 + Math.random()*10;
    if(pct >= 100){ pct = 100; clearInterval(iv); afterLoad(); }
    fill.style.width = pct + '%';
  }, 90);

  function afterLoad(){
    status2.textContent = 'IDENTITY VERIFIED';
    setTimeout(()=>{ status2.textContent = 'ROLE DATABASE ACCESSED'; }, 650);
    setTimeout(()=> countdown(3), 1500);
  }
  function countdown(n){
    if(n<=0){ cd.textContent=''; flashAndReveal(); return; }
    cd.textContent = n;
    Audio_.SFX.button();
    setTimeout(()=> countdown(n-1), 650);
  }
}

function flashAndReveal(){
  document.body.style.transition = 'background .15s';
  document.body.style.background = '#fff';
  setTimeout(()=>{
    document.body.style.background = '';
    showReveal();
  }, 140);
}

function showReveal(){
  Audio_.SFX.reveal();
  const tagline = member.tagline || DIVISION_TAGLINES[member.division] || 'Welcome to the team.';
  const revealDivision = document.getElementById('reveal-division');

if(member.divisions){
  revealDivision.innerHTML = member.positions.join('<br>');
} else {
  revealDivision.textContent =
    member.position || member.division;
}
  document.getElementById('reveal-name').textContent = member.name;
  document.getElementById('reveal-tagline').textContent = `"${tagline}"`;
  document.getElementById('reveal-event').textContent = EVENT_CONFIG.name;
  document.getElementById('progress-strip').classList.add('hidden');
  showScreen('screen-reveal');
}

/* ---- exportable reveal card (SAVE MY ROLE) ---- */
function exportRevealCard(){
  Audio_.SFX.button();
  const c = document.getElementById('card-export');
  const cx = c.getContext('2d');
  const W=600,H=800;
  cx.fillStyle = PAL.royal; cx.fillRect(0,0,W,H);
  cx.fillStyle = PAL.dark; cx.fillRect(0,0,W,10); cx.fillRect(0,H-10,W,10);
  cx.fillRect(0,0,10,H); cx.fillRect(W-10,0,10,H);

  cx.fillStyle = PAL.emerald; cx.fillRect(W/2-40,50,80,80);
  cx.fillStyle = PAL.dark; cx.font = '900 22px monospace'; cx.textAlign='center';
  cx.fillText(EVENT_CONFIG.badge, W/2, 100);

  cx.fillStyle = PAL.canary; cx.font = '700 20px monospace';
  cx.fillText('QUEST COMPLETE', W/2, 190);

  cx.fillStyle = PAL.limeade; cx.font = '700 16px monospace';
  cx.fillText('YOUR ROLE', W/2, 260);

  cx.fillStyle = PAL.canary; cx.font = '900 40px monospace';
  wrapText(
  cx,
  member.divisions
  ? member.positions.join(' / ')
  : (member.position || member.division),
  W/2,
  320,
  W-80,
  46
);

  cx.fillStyle = PAL.cream; cx.font = '700 30px monospace';
  cx.fillText(member.name, W/2, 470);

  const tagline = member.tagline || DIVISION_TAGLINES[member.division] || 'yeay goodluck! bismillah ASKALA 44 2 Guest Star :D';
  cx.fillStyle = PAL.watermelon; cx.font = 'italic 22px monospace';
  wrapText(cx, `"${tagline}"`, W/2, 540, W-100, 30);

  cx.fillStyle = PAL.cream; cx.font = '700 16px monospace'; cx.globalAlpha=0.8;
  cx.fillText(EVENT_CONFIG.name, W/2, H-60);
  cx.globalAlpha=1;

  const link = document.createElement('a');
  link.download = `role-card-${memberId}.png`;
  link.href = c.toDataURL('image/png');
  link.click();
}
function wrapText(cx, text, x, y, maxWidth, lineHeight){
  const words = text.split(' ');
  let line=''; let lines=[];
  words.forEach(w=>{
    const test = line + w + ' ';
    if(cx.measureText(test).width > maxWidth && line){ lines.push(line); line = w+' '; }
    else line = test;
  });
  lines.push(line);
  const startY = y - (lines.length-1)*lineHeight/2;
  lines.forEach((l,i)=> cx.fillText(l.trim(), x, startY + i*lineHeight));
}

/* ========================================================================
   16. INITIAL STATE — resume mid-progress if the tab was reloaded
   ======================================================================== */
(function init(){
  updateProgressStrip();
  document.getElementById('progress-strip').classList.add('hidden');
  showScreen('screen-intro');
})();