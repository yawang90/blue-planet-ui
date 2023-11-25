import {Component} from '@angular/core';
import {BiodiversityEval, SchoolService} from "../service/school-service.service";

@Component({
  selector: 'biodiversity',
  templateUrl: './biodiversity.component.html',
})
export class BiodiversityComponent {
  hatGarten: boolean;
  hatKompost: boolean;
  weiteres: string;

  constructor(private schoolService: SchoolService) {
    this.hatGarten = false;
    this.hatKompost = false;
    this.weiteres = "";
  }

  saveBiodiversity(){
    this.schoolService.addBiodiversity(new BiodiversityEval(this.hatGarten, this.hatKompost, this.weiteres))
    window.location.href='./overview';
  }
}
