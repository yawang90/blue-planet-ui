import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatGridListModule} from "@angular/material/grid-list";

@Component({
  selector: 'energie-form',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatGridListModule],
  templateUrl: './energie.component.html',
})
export class EnergieComponent {
}
