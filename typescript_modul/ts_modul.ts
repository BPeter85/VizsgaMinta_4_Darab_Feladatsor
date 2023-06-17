function EkezetesBetukSzama(vizsgaltSzoveg: string): number {
    let ekezetesBetukTomb: string[] = ["á", "é", "í", "ó", "ö", "ő", "ú", "ü", "ű", "Á", "É", "Í", "Ó", "Ö", "Ő", "Ú", "Ü", "Ű"];
    let darab: number = 0;
    for (let i: number = 0; i < vizsgaltSzoveg.length; i++) {
        if (ekezetesBetukTomb.includes(vizsgaltSzoveg[i])) {
            darab++;
        }
    }
    return darab;
}

function ElsoNszamSzorzat(mennyiseg: number): number {
    let szorzat:number = 1;
    for (let i: number = 1; i <= mennyiseg; i++) {
        szorzat *= i;
    }
    return szorzat;
}
 
function ParosakOsszege(vizsgaltTomb: number[]): number {
    let osszeg: number = 0;

    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] % 2 === 0) {
            osszeg += vizsgaltTomb[i];
        }
    }

    return osszeg;
}