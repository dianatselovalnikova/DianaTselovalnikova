var EsimeneArv = parseFloat ( prompt ( "Esimene arv: ") );
var TeineArv = parseFloat ( prompt ( "Teine arv: ") );

if (!isNaN(esimeneArv) && !isNaN(teineArv)) {
    var summa = esimeneArv + teineArv;
  
    console.log("Antud arvude summa on " + summa);
} else {
    console.log("Palun sisestage kehtivad arvud.");
}

