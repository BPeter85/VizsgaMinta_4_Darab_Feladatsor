function EkezetesBetukSzama(vizsgaltSzoveg) {
    var ekezetesBetukTomb = ["á", "é", "í", "ó", "ö", "ő", "ú", "ü", "ű", "Á", "É", "Í", "Ó", "Ö", "Ő", "Ú", "Ü", "Ű"];
    var darab = 0;
    for (var i = 0; i < vizsgaltSzoveg.length; i++) {
        if (ekezetesBetukTomb.includes(vizsgaltSzoveg[i])) {
            darab++;
        }
    }
    return darab;
}
function ElsoNszamSzorzat(mennyiseg) {
    var szorzat = 1;
    for (var i = 1; i <= mennyiseg; i++) {
        szorzat *= i;
    }
    return szorzat;
}
function ParosakOsszege(vizsgaltTomb) {
    var osszeg = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] % 2 === 0) {
            osszeg += vizsgaltTomb[i];
        }
    }
    return osszeg;
}
