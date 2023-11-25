import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BiodiversityComponent} from "../biodiversity/biodiversity.component";
import {EnergieComponent} from "../energie/energie.component";
import {CommonModule} from "@angular/common";
import {MatGridListModule} from "@angular/material/grid-list";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatSelectModule} from "@angular/material/select";
import {RouterModule, RouterOutlet} from "@angular/router";
import {routes} from "./app.routes";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

/* the AppModule class with the @NgModule decorator */
@NgModule({
    declarations: [
        AppComponent,
        BiodiversityComponent,
        EnergieComponent
    ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule, BrowserAnimationsModule,
        CommonModule, MatGridListModule,
        FormsModule, MatCardModule, MatInputModule, ReactiveFormsModule, MatListModule, MatSelectModule, RouterOutlet
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}