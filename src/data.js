export const employees = [
  {id:1,name:'Rafael Mendes',role:'Técnico de manutenção',initials:'RM',color:'sage',team:'Manutenção',base:2860,positive:1860,negative:240,pay:1200,bonus:50,status:'reviewed', note:'Horas conferidas com as ordens de serviço.'},
  {id:2,name:'Carlos Eduardo',role:'Eletricista de campo',initials:'CE',color:'sand',team:'Instalação',base:3300,positive:2520,negative:120,pay:1800,bonus:50,status:'reviewed', note:'Plantões de sábado incluídos no saldo.'},
  {id:3,name:'Juliana Costa',role:'Técnica de instalação',initials:'JC',color:'lavender',team:'Instalação',base:3080,positive:1440,negative:360,pay:1080,bonus:50,status:'pending',note:'Conferir apontamentos da última semana.'},
  {id:4,name:'André Oliveira',role:'Supervisor de campo',initials:'AO',color:'blue',team:'Operações',base:4400,positive:2880,negative:0,pay:2400,bonus:50,status:'reviewed',note:'Saldo validado pelo responsável da operação.'},
  {id:5,name:'Fernanda Lima',role:'Técnica de manutenção',initials:'FL',color:'rose',team:'Manutenção',base:2860,positive:960,negative:180,pay:780,bonus:50,status:'pending',note:''},
  {id:6,name:'Lucas Ferreira',role:'Auxiliar de campo',initials:'LF',color:'sage',team:'Operações',base:2200,positive:1320,negative:240,pay:900,bonus:50,status:'reviewed',note:''},
  {id:7,name:'Marcos Santos',role:'Eletricista de campo',initials:'MS',color:'sand',team:'Instalação',base:3300,positive:2100,negative:300,pay:1800,bonus:50,status:'pending',note:'Aguardando conferência das horas de deslocamento.'},
  {id:8,name:'Beatriz Almeida',role:'Técnica de segurança',initials:'BA',color:'lavender',team:'Operações',base:3520,positive:720,negative:120,pay:600,bonus:50,status:'reviewed',note:''}
];
export const money = value => value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
export const hours = minutes => `${Math.floor(Math.abs(minutes)/60)}h${String(Math.abs(minutes)%60).padStart(2,'0')}`;
export const amount = e => Math.round((e.pay / 60) * (e.base / 220) * (1 + e.bonus / 100)*100)/100;
export const balance = e => e.positive-e.negative;
