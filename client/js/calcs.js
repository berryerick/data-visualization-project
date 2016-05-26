
function avgcolor(color1,color2){
    var avg  = function(a,b){ return (a+b)/(color1.count+1); },
        t16  = function(c){ return parseInt((''+c).replace('#',''),16) },
        hex  = function(c){ var t = (c>>0).toString(16);
                           return t.length == 2 ? t : '0' + t },
        hex1 = t16(color1.color),
        hex2 = t16(color2),
        r    = function(hex){ return hex >> 16 & 0xFF},
        g    = function(hex){ return hex >> 8 & 0xFF},
        b    = function(hex){ return hex & 0xFF},
        res  = '#' + hex(avg(r(hex1*color1.count),r(hex2)))
                   + hex(avg(g(hex1*color1.count),g(hex2)))
                   + hex(avg(b(hex1*color1.count),b(hex2)));

        // console.log(hex1)

    return res;
  }

    // e.g.
// console.log(avgcolor('#ffffff','#000000')); // "#7f7f7f"

console.log(avgcolor({count: 1, color: '#ffffff'}, '#00000'))
