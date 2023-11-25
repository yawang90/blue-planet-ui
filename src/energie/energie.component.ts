import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import {EnergieEval, HeizartenEnum, SchoolService} from "../service/school-service.service";

@Component({
  selector: 'energie',
  templateUrl: './energie.component.html',
})
export class EnergieComponent {
  heizart = new FormControl<HeizartenEnum>(HeizartenEnum.biogas);
  energieVerbrauchHaupt = new FormControl<number>(0);
  sekundaerEnergie = new FormControl<HeizartenEnum>(HeizartenEnum.biogas);
  energieVerbrauchSek = new FormControl<number>(0);

  constructor(private schoolservice: SchoolService) {
  }

  onSubmit() {
    const energieEval = new EnergieEval(this.heizart.value, this.energieVerbrauchHaupt.value, this.sekundaerEnergie.value, this.energieVerbrauchSek.value);
    this.schoolservice.addEnergie(energieEval);
  }

    protected readonly HeizartenEnum = HeizartenEnum;
}
