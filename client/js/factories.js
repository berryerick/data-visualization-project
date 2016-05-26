project_week.factory('packageFactory', function($http, $location, $routeParams){
  var factory = {}
  // factory.packages = [{"type":"login","data":{"time":1464110036795}},{"type":"gameStart","data":{"name":"elimination","time":1464110037950}},{"type":"buttonPress","data":{"color":"rgb(212,112,189)","width":"grid-item--width2","height":"grid-item--height3","x":747,"y":174,"time":1464110039223}},{"type":"buttonPress","data":{"color":"rgb(108,211,199)","width":"grid-item--width2","height":"grid-item--height2","x":930,"y":150,"time":1464110039564}},{"type":"buttonPress","data":{"color":"rgb(244,100,43)","width":"grid-item--width2","height":"","x":889,"y":297,"time":1464110039927}},{"type":"buttonPress","data":{"color":"rgb(86,43,243)","width":"","height":"grid-item--height3","x":1154,"y":239,"time":1464110040439}},{"type":"buttonPress","data":{"color":"rgb(189,208,70)","width":"","height":"","x":1188,"y":111,"time":1464110040915}},{"type":"buttonPress","data":{"color":"rgb(31,244,193)","width":"","height":"grid-item--height3","x":1350,"y":247,"time":1464110041281}},{"type":"buttonPress","data":{"color":"rgb(176,175,15)","width":"","height":"grid-item--height3","x":1495,"y":228,"time":1464110041836}},{"type":"gameEnd","data":{"name":"elimination","time":1464110043037}},{"type":"gameStart","data":{"name":"elimination","time":1464110044128}},{"type":"buttonPress","data":{"color":"rgb(108,211,199)","width":"grid-item--width2","height":"grid-item--height2","x":864,"y":133,"time":1464110046724}},{"type":"buttonPress","data":{"color":"rgb(212,112,189)","width":"grid-item--width2","height":"grid-item--height3","x":635,"y":138,"time":1464110047037}},{"type":"buttonPress","data":{"color":"rgb(244,100,43)","width":"grid-item--width2","height":"","x":838,"y":265,"time":1464110047757}},{"type":"buttonPress","data":{"color":"rgb(126,69,27)","width":"","height":"","x":1000,"y":326,"time":1464110049325}},{"type":"buttonPress","data":{"color":"rgb(0,139,83)","width":"","height":"","x":865,"y":338,"time":1464110049847}},{"type":"buttonPress","data":{"color":"rgb(197,101,197)","width":"grid-item--width2","height":"","x":1391,"y":89,"time":1464110050754}},{"type":"buttonPress","data":{"color":"rgb(248,58,158)","width":"grid-item--width2","height":"grid-item--height3","x":431,"y":313,"time":1464110052865}},{"type":"buttonPress","data":{"color":"rgb(217,125,227)","width":"","height":"","x":762,"y":523,"time":1464110055378}},{"type":"buttonPress","data":{"color":"rgb(161,112,189)","width":"","height":"","x":609,"y":590,"time":1464110055933}},{"type":"buttonPress","data":{"color":"rgb(178,84,77)","width":"","height":"","x":1469,"y":605,"time":1464110056683}},{"type":"buttonPress","data":{"color":"rgb(238,135,148)","width":"","height":"","x":1500,"y":421,"time":1464110057179}},{"type":"gameEnd","data":{"name":"elimination","time":1464110058278}}]
  factory.packages = [{"_id":"574640e8b68c07a82aba61df","updatedAt":"2016-05-26T00:18:48.883Z","createdAt":"2016-05-26T00:18:48.883Z","_user":"5745f65952c8a5cc2a973cc6","__v":0,"activities":[{"type":"login","data":{"time":1464220399738}},{"type":"logout","data":{"time":1464221928873}}]},{"_id":"57464111b68c07a82aba61e0","updatedAt":"2016-05-26T00:19:29.364Z","createdAt":"2016-05-26T00:19:29.364Z","_user":"5745f65952c8a5cc2a973cc6","__v":0,"activities":[{"type":"login","data":{"time":1464221933710}},{"type":"gameStart","data":{"name":"guessing","time":1464221935058}},{"type":"buttonPress","data":{"correct":false,"size":2,"color":"#2b3ac4","time":1464221936305,"x":751,"y":98}},{"type":"buttonPress","data":{"correct":false,"size":2,"color":"#14759b","time":1464221936754,"x":724,"y":228}},{"type":"buttonPress","data":{"correct":false,"size":3,"color":"#714ee5","time":1464221937123,"x":851,"y":259}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#4e63c9","time":1464221937864,"x":718,"y":405}},{"type":"buttonPress","data":{"correct":false,"size":3,"color":"#3077e8","time":1464221938432,"x":1015,"y":268}},{"type":"buttonPress","data":{"correct":false,"size":4,"color":"#407ea5","time":1464221938919,"x":1168,"y":387}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#2937d1","time":1464221939540,"x":1028,"y":677}},{"type":"buttonPress","data":{"correct":true,"size":1,"color":"#11c5d6","time":1464221939910,"x":1033,"y":613}},{"type":"gameStart","data":{"name":"guessing","time":1464221935058}},{"type":"buttonPress","data":{"correct":false,"size":2,"color":"#2b3ac4","time":1464221936305,"x":751,"y":98}},{"type":"buttonPress","data":{"correct":false,"size":2,"color":"#14759b","time":1464221936754,"x":724,"y":228}},{"type":"buttonPress","data":{"correct":false,"size":3,"color":"#714ee5","time":1464221937123,"x":851,"y":259}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#4e63c9","time":1464221937864,"x":718,"y":405}},{"type":"buttonPress","data":{"correct":false,"size":3,"color":"#3077e8","time":1464221938432,"x":1015,"y":268}},{"type":"buttonPress","data":{"correct":false,"size":4,"color":"#407ea5","time":1464221938919,"x":1168,"y":387}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#2937d1","time":1464221939540,"x":1028,"y":677}},{"type":"buttonPress","data":{"correct":false,"size":4,"color":"#5defe3","time":1464221942730,"x":1067,"y":127}},{"type":"buttonPress","data":{"correct":false,"size":3,"color":"#3102dd","time":1464221943703,"x":851,"y":280}},{"type":"buttonPress","data":{"correct":false,"size":4,"color":"#0a9383","time":1464221944069,"x":1033,"y":336}},{"type":"buttonPress","data":{"correct":false,"size":3,"color":"#29c49a","time":1464221944467,"x":1326,"y":305}},{"type":"buttonPress","data":{"correct":false,"size":2,"color":"#68f988","time":1464221945001,"x":1297,"y":419}},{"type":"buttonPress","data":{"correct":false,"size":4,"color":"#d3192c","time":1464221946966,"x":607,"y":155}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#dd0684","time":1464221947493,"x":95,"y":105}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#a203c1","time":1464221948027,"x":94,"y":491}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#c90237","time":1464221948340,"x":210,"y":474}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#dd1a41","time":1464221949128,"x":691,"y":651}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#d63f37","time":1464221949807,"x":1488,"y":497}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#bf07b9","time":1464221950455,"x":1324,"y":670}},{"type":"buttonPress","data":{"correct":false,"size":2,"color":"#eded00","time":1464221950896,"x":1323,"y":564}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#f3f704","time":1464221951261,"x":1284,"y":498}},{"type":"buttonPress","data":{"correct":false,"size":2,"color":"#e5c750","time":1464221951641,"x":1098,"y":533}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#db945e","time":1464221952093,"x":1001,"y":583}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#4c009e","time":1464221952483,"x":995,"y":508}},{"type":"buttonPress","data":{"correct":true,"size":2,"color":"#bf6703","time":1464221952795,"x":873,"y":489}},{"type":"gameStart","data":{"name":"guessing","time":1464221935058}},{"type":"buttonPress","data":{"correct":false,"size":2,"color":"#2b3ac4","time":1464221936305,"x":751,"y":98}},{"type":"buttonPress","data":{"correct":false,"size":2,"color":"#14759b","time":1464221936754,"x":724,"y":228}},{"type":"buttonPress","data":{"correct":false,"size":3,"color":"#714ee5","time":1464221937123,"x":851,"y":259}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#4e63c9","time":1464221937864,"x":718,"y":405}},{"type":"buttonPress","data":{"correct":false,"size":3,"color":"#3077e8","time":1464221938432,"x":1015,"y":268}},{"type":"buttonPress","data":{"correct":false,"size":4,"color":"#407ea5","time":1464221938919,"x":1168,"y":387}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#2937d1","time":1464221939540,"x":1028,"y":677}},{"type":"buttonPress","data":{"correct":false,"size":4,"color":"#5defe3","time":1464221942730,"x":1067,"y":127}},{"type":"buttonPress","data":{"correct":false,"size":3,"color":"#3102dd","time":1464221943703,"x":851,"y":280}},{"type":"buttonPress","data":{"correct":false,"size":4,"color":"#0a9383","time":1464221944069,"x":1033,"y":336}},{"type":"buttonPress","data":{"correct":false,"size":3,"color":"#29c49a","time":1464221944467,"x":1326,"y":305}},{"type":"buttonPress","data":{"correct":false,"size":2,"color":"#68f988","time":1464221945001,"x":1297,"y":419}},{"type":"buttonPress","data":{"correct":false,"size":4,"color":"#d3192c","time":1464221946966,"x":607,"y":155}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#dd0684","time":1464221947493,"x":95,"y":105}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#a203c1","time":1464221948027,"x":94,"y":491}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#c90237","time":1464221948340,"x":210,"y":474}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#dd1a41","time":1464221949128,"x":691,"y":651}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#d63f37","time":1464221949807,"x":1488,"y":497}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#bf07b9","time":1464221950455,"x":1324,"y":670}},{"type":"buttonPress","data":{"correct":false,"size":2,"color":"#eded00","time":1464221950896,"x":1323,"y":564}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#f3f704","time":1464221951261,"x":1284,"y":498}},{"type":"buttonPress","data":{"correct":false,"size":2,"color":"#e5c750","time":1464221951641,"x":1098,"y":533}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#db945e","time":1464221952093,"x":1001,"y":583}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#4c009e","time":1464221952483,"x":995,"y":508}},{"type":"gameEnd","data":{"name":"guessing","time":1464221954491}},{"type":"gameStart","data":{"name":"elimination","time":1464221955636}},{"type":"buttonPress","data":{"size":6,"color":"#35bf33","time":1464221956291,"x":715,"y":208}},{"type":"buttonPress","data":{"size":1,"color":"#cc5788","time":1464221956677,"x":922,"y":227}},{"type":"buttonPress","data":{"size":6,"color":"#4a89c9","time":1464221957026,"x":911,"y":336}},{"type":"buttonPress","data":{"size":2,"color":"#63b52d","time":1464221957411,"x":1051,"y":211}},{"type":"buttonPress","data":{"size":2,"color":"#3af47e","time":1464221958523,"x":1148,"y":276}},{"type":"buttonPress","data":{"size":2,"color":"#55e0a4","time":1464221958882,"x":1196,"y":437}},{"type":"buttonPress","data":{"size":2,"color":"#e266a4","time":1464221959920,"x":707,"y":591}},{"type":"buttonPress","data":{"size":2,"color":"#99164a","time":1464221960397,"x":636,"y":660}},{"type":"buttonPress","data":{"size":2,"color":"#e266a4","time":1464221960781,"x":897,"y":622}},{"type":"buttonPress","data":{"size":1,"color":"#c45815","time":1464221961228,"x":969,"y":658}},{"type":"buttonPress","data":{"size":1,"color":"#0cd387","time":1464221961608,"x":889,"y":693}},{"type":"gameEnd","data":{"name":"elimination","time":1464221962372}},{"type":"gameStart","data":{"name":"elimination","time":1464221963664}},{"type":"buttonPress","data":{"size":4,"color":"#47dd39","time":1464221964907,"x":393,"y":286}},{"type":"buttonPress","data":{"size":2,"color":"#9846d6","time":1464221965263,"x":506,"y":305}},{"type":"gameEnd","data":{"name":"elimination","time":1464221965898}},{"type":"logout","data":{"time":1464221969351}}]},{"_id":"5746413eb68c07a82aba61e1","updatedAt":"2016-05-26T00:20:14.884Z","createdAt":"2016-05-26T00:20:14.884Z","_user":"5745f65952c8a5cc2a973cc6","__v":0,"activities":[{"type":"login","data":{"time":1464221980433}},{"type":"gameStart","data":{"name":"guessing","time":1464221981577}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#2d80b5","time":1464221983667,"x":846,"y":266}},{"type":"buttonPress","data":{"correct":false,"size":6,"color":"#74910b","time":1464221984017,"x":1000,"y":251}},{"type":"buttonPress","data":{"correct":false,"size":6,"color":"#2bc1ef","time":1464221984618,"x":1300,"y":273}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#364093","time":1464221985605,"x":1340,"y":85}},{"type":"buttonPress","data":{"correct":false,"size":2,"color":"#2f85fc","time":1464221986241,"x":685,"y":102}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#2d80b5","time":1464221987031,"x":867,"y":305}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#1a4591","time":1464221987595,"x":699,"y":473}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#c67537","time":1464221988379,"x":160,"y":597}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#0a84d6","time":1464221988850,"x":117,"y":594}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#5fef88","time":1464221989611,"x":381,"y":593}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#1fba98","time":1464221990259,"x":1133,"y":699}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#08d66b","time":1464221990658,"x":1283,"y":671}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#64c136","time":1464221991055,"x":1162,"y":567}},{"type":"buttonPress","data":{"correct":false,"size":2,"color":"#472189","time":1464221991519,"x":1334,"y":562}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#f2d243","time":1464221991856,"x":1285,"y":478}},{"type":"buttonPress","data":{"correct":false,"size":2,"color":"#47ad27","time":1464221992118,"x":1177,"y":470}},{"type":"buttonPress","data":{"correct":false,"size":6,"color":"#f43d1d","time":1464221992393,"x":1004,"y":473}},{"type":"buttonPress","data":{"correct":false,"size":2,"color":"#ff1eb7","time":1464221993506,"x":822,"y":163}},{"type":"buttonPress","data":{"correct":false,"size":2,"color":"#e5d332","time":1464221993928,"x":538,"y":205}},{"type":"buttonPress","data":{"correct":false,"size":4,"color":"#e58b37","time":1464221994350,"x":535,"y":340}},{"type":"buttonPress","data":{"correct":false,"size":6,"color":"#6ff79e","time":1464221994707,"x":325,"y":202}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#b9f96b","time":1464221995286,"x":80,"y":98}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#5d1ca8","time":1464221995598,"x":78,"y":191}},{"type":"buttonPress","data":{"correct":false,"size":3,"color":"#f48844","time":1464221996036,"x":91,"y":380}},{"type":"buttonPress","data":{"correct":false,"size":4,"color":"#163275","time":1464221996497,"x":372,"y":423}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#d1894b","time":1464221997575,"x":117,"y":682}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#c318cc","time":1464221997850,"x":273,"y":691}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#edc863","time":1464221998203,"x":365,"y":678}},{"type":"buttonPress","data":{"correct":false,"size":2,"color":"#5add80","time":1464221998680,"x":546,"y":586}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#ff6938","time":1464221999016,"x":550,"y":678}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#6f3bd6","time":1464221999442,"x":736,"y":707}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#9b0932","time":1464221999857,"x":739,"y":575}},{"type":"buttonPress","data":{"correct":true,"size":1,"color":"#bc3610","time":1464222000197,"x":841,"y":690}},{"type":"gameStart","data":{"name":"guessing","time":1464221981577}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#2d80b5","time":1464221983667,"x":846,"y":266}},{"type":"buttonPress","data":{"correct":false,"size":6,"color":"#74910b","time":1464221984017,"x":1000,"y":251}},{"type":"buttonPress","data":{"correct":false,"size":6,"color":"#2bc1ef","time":1464221984618,"x":1300,"y":273}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#364093","time":1464221985605,"x":1340,"y":85}},{"type":"buttonPress","data":{"correct":false,"size":2,"color":"#2f85fc","time":1464221986241,"x":685,"y":102}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#2d80b5","time":1464221987031,"x":867,"y":305}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#1a4591","time":1464221987595,"x":699,"y":473}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#c67537","time":1464221988379,"x":160,"y":597}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#0a84d6","time":1464221988850,"x":117,"y":594}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#5fef88","time":1464221989611,"x":381,"y":593}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#1fba98","time":1464221990259,"x":1133,"y":699}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#08d66b","time":1464221990658,"x":1283,"y":671}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#64c136","time":1464221991055,"x":1162,"y":567}},{"type":"buttonPress","data":{"correct":false,"size":2,"color":"#472189","time":1464221991519,"x":1334,"y":562}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#f2d243","time":1464221991856,"x":1285,"y":478}},{"type":"buttonPress","data":{"correct":false,"size":2,"color":"#47ad27","time":1464221992118,"x":1177,"y":470}},{"type":"buttonPress","data":{"correct":false,"size":6,"color":"#f43d1d","time":1464221992393,"x":1004,"y":473}},{"type":"buttonPress","data":{"correct":false,"size":2,"color":"#ff1eb7","time":1464221993506,"x":822,"y":163}},{"type":"buttonPress","data":{"correct":false,"size":2,"color":"#e5d332","time":1464221993928,"x":538,"y":205}},{"type":"buttonPress","data":{"correct":false,"size":4,"color":"#e58b37","time":1464221994350,"x":535,"y":340}},{"type":"buttonPress","data":{"correct":false,"size":6,"color":"#6ff79e","time":1464221994707,"x":325,"y":202}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#b9f96b","time":1464221995286,"x":80,"y":98}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#5d1ca8","time":1464221995598,"x":78,"y":191}},{"type":"buttonPress","data":{"correct":false,"size":3,"color":"#f48844","time":1464221996036,"x":91,"y":380}},{"type":"buttonPress","data":{"correct":false,"size":4,"color":"#163275","time":1464221996497,"x":372,"y":423}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#d1894b","time":1464221997575,"x":117,"y":682}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#c318cc","time":1464221997850,"x":273,"y":691}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#edc863","time":1464221998203,"x":365,"y":678}},{"type":"buttonPress","data":{"correct":false,"size":2,"color":"#5add80","time":1464221998680,"x":546,"y":586}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#ff6938","time":1464221999016,"x":550,"y":678}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#6f3bd6","time":1464221999442,"x":736,"y":707}},{"type":"buttonPress","data":{"correct":false,"size":1,"color":"#9b0932","time":1464221999857,"x":739,"y":575}},{"type":"gameEnd","data":{"name":"guessing","time":1464222001847}},{"type":"gameStart","data":{"name":"elimination","time":1464222002537}},{"type":"buttonPress","data":{"size":3,"color":"#4baaea","time":1464222003542,"x":605,"y":309}},{"type":"buttonPress","data":{"size":1,"color":"#5bffcb","time":1464222003807,"x":706,"y":308}},{"type":"buttonPress","data":{"size":2,"color":"#4fd1aa","time":1464222004269,"x":739,"y":193}},{"type":"buttonPress","data":{"size":1,"color":"#1a5191","time":1464222004694,"x":1032,"y":230}},{"type":"buttonPress","data":{"size":1,"color":"#e8c330","time":1464222004946,"x":1011,"y":314}},{"type":"buttonPress","data":{"size":3,"color":"#ce0ac8","time":1464222005284,"x":1132,"y":346}},{"type":"buttonPress","data":{"size":2,"color":"#97a815","time":1464222005810,"x":1021,"y":477}},{"type":"buttonPress","data":{"size":2,"color":"#4bedd4","time":1464222006092,"x":832,"y":526}},{"type":"buttonPress","data":{"size":1,"color":"#8c0604","time":1464222006806,"x":833,"y":681}},{"type":"buttonPress","data":{"size":1,"color":"#d313f9","time":1464222007145,"x":698,"y":692}},{"type":"buttonPress","data":{"size":1,"color":"#8aed34","time":1464222007459,"x":675,"y":533}},{"type":"buttonPress","data":{"size":2,"color":"#f4a666","time":1464222008199,"x":536,"y":485}},{"type":"buttonPress","data":{"size":1,"color":"#d3a54a","time":1464222008487,"x":572,"y":584}},{"type":"buttonPress","data":{"size":1,"color":"#cc6b2a","time":1464222008775,"x":677,"y":593}},{"type":"buttonPress","data":{"size":1,"color":"#ffea0a","time":1464222009616,"x":373,"y":554}},{"type":"buttonPress","data":{"size":1,"color":"#2151d3","time":1464222009979,"x":399,"y":503}},{"type":"buttonPress","data":{"size":1,"color":"#db5715","time":1464222010526,"x":380,"y":398}},{"type":"gameEnd","data":{"name":"elimination","time":1464222011952}},{"type":"logout","data":{"time":1464222014832}}]}]
  // FACTORY VARIABLES =============================
  //average colors clicked by chronological guess per game
  factory.colorGradientByGuess = []

  //average colors clicked by game
  factory.colorGradientByGame = []
  factory.buttonPresses = []
  factory.hues = []
  for (var i = 0; i < 18; i++) {
    factory.hues[i] = {count: 1, color: 'hsla('+ Math.floor(360*(i/18))  +', 90%, 50%, 1)'}
  }
  factory.maxHueCount = 0

  // HELPER FUNCTIONS ==============================


  // function convertHex(hex){
  //     hex = hex.replace('#','');
  //     r = parseInt(hex.substring(0,2), 16);
  //     g = parseInt(hex.substring(2,4), 16);
  //     b = parseInt(hex.substring(4,6), 16);
  //
  //     result = 'rgb('+r+','+g+','+b+','+opacity/100+')';
  //     return result;
  // }

  function colorToHex(color) {

    var digits = color.replace(/[^\d,]/g, '').split(',');
    // console.log(digits);

    var red = parseInt(digits[0]);
    var green = parseInt(digits[1]);
    var blue = parseInt(digits[2]);
    var h = rgbToHsl([red, green, blue])
    //add to hue values
    factory.hues[h].count ++
    if (factory.hues[h].count>factory.maxHueCount){
      factory.maxHueCount = factory.hues[h].count
    }


    var rgb = blue | (green << 8) | (red << 16);
    return '#' + rgb.toString(16);
  };

  function avgcolor(color1,color2){
      // console.log(color1, color2);
      var avg  = function(a,b){ return ((a*color1.count)+b)/(color1.count+1); },
          t16  = function(c){ return parseInt((''+c).replace('#',''),16) },
          hex  = function(c){ var t = (c>>0).toString(16);
                             return t.length == 2 ? t : '0' + t },
          hex1 = t16(color1.color),
          hex2 = t16(color2),
          r    = function(hex){ return hex >> 16 & 0xFF},
          g    = function(hex){ return hex >> 8 & 0xFF},
          b    = function(hex){ return hex & 0xFF},
          res  = '#' + hex(avg(r(hex1),r(hex2)))
                     + hex(avg(g(hex1),g(hex2)))
                     + hex(avg(b(hex1),b(hex2)));
          // console.log("average color", color1, color2, res);


          // console.log(hex1)

      return res;
    }
  //
  // hexToRGB = function(hex){
  //     var r = hex >> 16;
  //     var g = hex >> 8 & 0xFF;
  //     var b = hex & 0xFF;
  //     return [r,g,b];
  // }

  function rgbToHsl(arr){
      r = arr[0]/255, g = arr[1]/255, b = arr[2]/255;
      // r /= 255, g /= 255, b /= 255;
  		var max = Math.max(r, g, b), min = Math.min(r, g, b);
  		var h, s, l = (max + min) / 2;

  		if (max == min) { h = s = 0; }
  		else {
  			var d = max - min;
  			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

  			switch (max){
  				case r: h = (g - b) / d + (g < b ? 6 : 0); break;
  				case g: h = (b - r) / d + 2; break;
  				case b: h = (r - g) / d + 4; break;
  			}

  			h /= 6;
        //hue limited to 18 options
  		}
      h = Math.floor(h*18)|0

      console.log("HUE VALUE FIRST", h);

  		// return "hsla("+(h*100+0.5)|0 + ',' + ((s*100+0.5)|0) + '% ,' + ((l*100+0.5)|0) + '% , 1)';
  		return h
  	}

  // FACTOR METHODS ================================
  factory.getData = function(callback){
    callback({
      colorGradientByGuess: factory.colorGradientByGuess,
      colorGradientByGame: factory.colorGradientByGame,
      totalAvgColor: factory.totalAvgColor,
      buttonPresses: factory.buttonPresses,
      hues: factory.hues,
      maxHueCount: factory.maxHueCount,
    })
  }

  factory.parseData = function(data){
    for( x in data){

        if (data[x].type =="buttonPress"){

          // store color as hex string
          var packageColor = colorToHex(data[x].data["color"]);
          // console.log(packageColor);

          factory.buttonPresses.push(data[x])

          // add to average color by chronological guess
          if(factory.colorGradientByGuess[gameButtonCount]){
            factory.colorGradientByGuess[gameButtonCount].color = avgcolor(factory.colorGradientByGuess[gameButtonCount], packageColor)
            factory.colorGradientByGuess[gameButtonCount].count ++
          }else{
            factory.colorGradientByGuess[gameButtonCount] = {count: 1, color: packageColor}
          }

          //add to average color by game
          if(gameButtonCount == 0){
            factory.colorGradientByGame.push({count: 1, color: packageColor})
          }else {
            factory.colorGradientByGame[factory.colorGradientByGame.length-1].color = avgcolor(factory.colorGradientByGame[factory.colorGradientByGame.length-1], packageColor)
            factory.colorGradientByGame[factory.colorGradientByGame.length-1].count ++
          }

          // calc totalAvgColor
          // console.log(factory.totalAvgColor);
          if(!factory.totalAvgColor){
            factory.totalAvgColor = {count:1, color: packageColor}
          }else {
            factory.totalAvgColor.color = avgcolor(factory.totalAvgColor, packageColor)
            // console.log('adding color to total average', factory.totalAvgColor);
            factory.totalAvgColor.count ++
          }


          gameButtonCount++
        }
        else if (data[x].type == 'gameStart') {
          var gameButtonCount = 0
          var start = data[x].data.time
        }
        else if (data[x].type = 'gameEnd') {
        }
      }
    // factory.hues = factory.hues.sort()
  }






//
//
// //generate mock data
//   function getRandomColor() {
//       var letters = '0123456789ABCDEF'.split('');
//       var color = '#';
//       for (var i = 0; i < 6; i++ ) {
//           color += letters[Math.floor(Math.random() * 16)];
//       }
//       return color;
//   }
//   function package(){
//     var specs = {}
//     specs.colors = []
//     specs.positions = []
//     specs.attempts = Math.floor(Math.random()*30)
//     specs.timeTaken = Math.random()*30
//
//     for (var i = 0; i < specs.attempts; i++) {
//       specs.colors.push(getRandomColor())
//     }
//     for (var i = 0; i < specs.attempts; i++) {
//       specs.positions.push({x: Math.floor(Math.random()*500), y: Math.floor(Math.random()*500)})
//     }
//     return specs
//   }
//   function dataInit(num){
//     var data = []
//     for (var i = 0; i < num; i++) {
//       //push packages in to mock data
//
//       data.push(package())
//
//     }
//     return data
//   }
//
//   function avgcolor(color1,color2){
// //       var avg  = function(a,b){ return ((a*color1.count)+b)/(color1.count+1); },
// //           t16  = function(c){ return parseInt((''+c).replace('#',''),16) },
// //           hex  = function(c){ var t = (c>>0).toString(16);
// //                              return t.length == 2 ? t : '0' + t },
// //           hex1 = t16(color1.color),
// //           hex2 = t16(color2),
// //           r    = function(hex){ return hex >> 16 & 0xFF},
// //           g    = function(hex){ return hex >> 8 & 0xFF},
// //           b    = function(hex){ return hex & 0xFF},
// //           res  = '#' + hex(avg(r(hex1),r(hex2)))
// //                      + hex(avg(g(hex1),g(hex2)))
// //                      + hex(avg(b(hex1),b(hex2)));
// //
// //
// //
// //           // console.log(hex1)
// //
// //       return res;
// //     }
//
//   // factory.packages = dataInit(100)
//
//   factory.colorGradientByGuess = []
//
//   //get an array of average colors by attempt
//   for (package in factory.packages){
//     for( x in factory.packages[package].colors){
//       if(factory.colorGradient[x]){
//         factory.colorGradient[x].color = avgcolor(factory.colorGradient[x],color)
//         factory.colorGradient[x].count ++
//       }else{
//         factory.colorGradient[x] = {count: 1, color: factory.packages[package].colors[x]}
//       }
//     }
//   }
//
//
  factory.heatMap = function(boardX, boardY, callback){
    callback(boardX, boardY, factory.buttonPresses)

  }
  factory.hueHistogram = function(callback){
    callback(factory.hues)

  }

  factory.parseData(factory.packages);
  console.log(factory.hues);

  return(factory)
})
