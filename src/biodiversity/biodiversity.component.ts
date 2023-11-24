import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatGridListModule} from "@angular/material/grid-list";

@Component({
  selector: 'biodiversity-form',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatGridListModule],
  templateUrl: './biodiversity.component.html',
})
export class BiodiversityComponent {
}
