import {Component} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {NavbarComponent} from "../navbar/navbar.component";
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "../header/header.component";
import {CustomersComponent} from "../customers/customers.component";
import {VehiclesComponent} from "../vehicles/vehicles.component";
import {RentalsComponent} from "../rentals/rentals.component";
import {ApiService} from "../../services/api.service";

@Component({
    selector: 'rent-dashboard',
    standalone: true,
    imports: [
        FaIconComponent,
        HeaderComponent,
        NavbarComponent,
        RouterOutlet,
        CustomersComponent,
        VehiclesComponent,
        RentalsComponent
    ],
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
    vehicleCount!: number;
    availableVehicleCount!: number;
    customerCount!: number;
    rentalCount!: number;

    ngOnInit(): void {
        console.log('DashboardComponent initialized');
        this.vehicleCount = 100;
        this.customerCount = 34;
        this.rentalCount= 27;
        this.availableVehicleCount= 73;
    }
}