import {Component} from '@angular/core';
import {MobilityEval, SchoolService} from "../service/school-service.service";

@Component({
  selector: 'mobility',
  templateUrl: './mobility.component.html',
})
export class MobilityComponent {
  hatEBikes: boolean;
  hatEAutos: boolean;
  mobVerhaltenS: string;
  mobVerhaltenL: string;
  abmachungen: string;
  regelFlugreisen: string;
  regelReisen: string;
  weiteres: string;

  constructor(private schoolService: SchoolService) {
    this.hatEBikes = false;
    this.hatEAutos = false;
    this.mobVerhaltenS = "";
    this.mobVerhaltenL = "";
    this.abmachungen = "";
    this.regelFlugreisen = "";
    this.regelReisen = "";
    this.weiteres = "";
  }

  saveMobility() {
    this.schoolService.addMobility(new MobilityEval(this.hatEBikes, this.hatEAutos, this.mobVerhaltenS, this.mobVerhaltenL, this.abmachungen, this.regelFlugreisen, this.regelReisen, this.weiteres))
    window.location.href = './overview';
  }
}
