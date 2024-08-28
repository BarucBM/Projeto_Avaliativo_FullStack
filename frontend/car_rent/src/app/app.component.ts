import {Component} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {FaIconComponent, FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {HeaderComponent} from "./components/header/header.component";
import {LoginComponent} from "./components/login/login.component";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {VehiclesComponent} from "./components/vehicles/vehicles.component";
import {CustomersComponent} from "./components/customers/customers.component";
import {NewVehicleComponent} from "./components/vehicles/new-vehicle/new-vehicle.component";
import {ShowVehicleComponent} from "./components/vehicles/show-vehicle/show-vehicle.component";
import {NewCustomerComponent} from "./components/customers/new-customer/new-customer.component";

@Component({
    selector: 'root',
    standalone: true,
    imports: [
        CustomersComponent,
        DashboardComponent,
        FaIconComponent,
        FormsModule,
        HeaderComponent,
        LoginComponent,
        NavbarComponent,
        NewVehicleComponent,
        NewCustomerComponent,
        ShowVehicleComponent,
        NgIf,
        RouterOutlet,
        VehiclesComponent
    ],
    templateUrl: './app.component.html'
})
export class AppComponent {
    showHeader: boolean = true;

    constructor(library: FaIconLibrary) {
        library.addIconPacks(fas);
    }
}
