import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'energie',
  templateUrl: './energie.component.html',
})
export class EnergieComponent {
  heizart = new FormControl('');

}
