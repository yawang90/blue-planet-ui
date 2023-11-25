import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SchoolService {
    biodiversity: BiodiversityEval | undefined;
    energie: EnergieEval | undefined;
    mobility: MobilityEval | undefined;

    /* . . . */

    addBiodiversity(biodiversity: BiodiversityEval) {
        this.biodiversity = biodiversity;
    }

    getBiodiversity() {
        return this.biodiversity;
    }

    clearBiodiversity() {
        this.biodiversity = undefined;
    }

    addEnergie(energieEval: EnergieEval) {
        this.energie = energieEval;
    }

    getEnergie() {
        return this.energie;
    }

    clearEnergie() {
        this.energie = undefined;
    }

    addMobility(mobilityEval: MobilityEval) {
        this.mobility = mobilityEval;
    }

    getMobility() {
        return this.mobility
    }

    clearMobility() {
        this.mobility = undefined;
    }
}

export class BiodiversityEval {
    hatGarten: boolean;
    hatKompost: boolean;

    constructor(hatGarten: boolean, hatKompost: boolean) {
        this.hatGarten = hatGarten;
        this.hatKompost = hatKompost;
    }
}

export class MobilityEval {
    hatEBikes: boolean;
    hatEAutos: boolean;

    constructor(hatEBikes: boolean, hatEAutos: boolean) {
        this.hatEBikes = hatEBikes;
        this.hatEAutos = hatEAutos;
    }
}

export class EnergieEval {
    heizart: HeizartenEnum | null;
    energieVerbrauchHaupt: number | null;
    sekundaerEnergie: HeizartenEnum | null;
    energieVerbrauchSek: number | null;

    constructor(heizart: HeizartenEnum | null, energieVerbrauchHaupt: number | null, sekundaerEnergie: HeizartenEnum | null, energieVerbrauchSek: number | null) {
        this.heizart = heizart;
        this.energieVerbrauchHaupt = energieVerbrauchHaupt;
        this.sekundaerEnergie = sekundaerEnergie;
        this.energieVerbrauchSek = energieVerbrauchSek;
    }

}

export enum HeizartenEnum {
    geothermie = 'Geothermie',
    heizoel = 'Heizöl',
    erdgas = 'Erdgas',
    biogas = 'Biogas',
    holzpellets = 'Holzpellets/Schnitzel',
    fernwaerme = 'Fernwärme',
    waermepumpe = 'Wärmepumpe',
}
