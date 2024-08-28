import {Component, OnInit} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {NavbarComponent} from "../navbar/navbar.component";
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "../header/header.component";
import {CustomersComponent} from "../customers/customers.component";
import {VehiclesComponent} from "../vehicles/vehicles.component";
import {RentalsComponent} from "../rentals/rentals.component";
import {ApiService} from "../../services/api.service";
import {HttpClient} from "@angular/common/http";

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
export class DashboardComponent extends ApiService implements OnInit {
    vehicleCount!: Object;
    availableCount!: Object;
    customerCount!: Object;
    rentedCount!: Object;

    constructor(http: HttpClient) {
        super(http);
    }

    protected get path(): string {
        return "";
    }

    ngOnInit(): void {
        this.loadDashboardData();
    }

    private loadDashboardData(): void {
        this.getCount("vehicle").subscribe(count => this.vehicleCount = count);
        this.getCount("vehicle/available").subscribe(count => this.availableCount = count);
        this.getCount("customer").subscribe(count => this.customerCount = count);
        this.getCount("rental").subscribe(count => this.rentedCount = count);
    }

    private getCount(endpoint: string) {
        return this.http.get(`${this.baseUrl}/${endpoint}/count`);
    }
}