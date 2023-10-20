function checkTemp(temperatuur) {
    if (temperatuur >= 0 && temperatuur <= 20) {
      return -1; 
    } else if (temperatuur >= 21 && temperatuur <= 40) {
      return 0;  
    } else if (temperatuur >= 41 && temperatuur <= 60) {
      return 1;  
    } else {
      return "Temperatuur ei kuulu üheski vahemikku.";
    }
  }

var temperatuur1 = 15 ; // Proovime liiga külma temperatuuri
var temperatuur2 = 30 ; // Proovime paras temperatuuri
var temperatuur3 = 50 ; // Proovime liiga kuuma temperatuuri
