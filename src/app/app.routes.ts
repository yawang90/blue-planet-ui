import { Routes } from '@angular/router';
import {EnergieComponent} from "../energie/energie.component";

export const routes: Routes = [
  { path: 'energie-form', component: EnergieComponent },
  { path: 'biodiversity-form', component: EnergieComponent }
];
