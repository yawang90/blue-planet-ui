import {Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {SchoolService} from "../service/school-service.service";
import {MatAccordion} from "@angular/material/expansion";

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html',
})
export class OverviewComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion = new MatAccordion();

  constructor(private router: Router, public schoolservice: SchoolService) {
  }

  navigateToEnergie() {
    this.router.navigate(['/', 'energie']);
  }

  navigateToBiodiversity() {
    this.router.navigate(['/', 'biodiversity']);
  }

  navigateToMobility() {
    this.router.navigate(['/', 'mobility']);
  }
}
