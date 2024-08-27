import {Component, OnInit} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {CommonModule} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {VehicleService} from "../../services/vehicle.service";

@Component({
    selector: 'vehicles',
    standalone: true,
    imports: [
        CommonModule,
        FaIconComponent,
        RouterLink
    ],
    templateUrl: './vehicles.component.html'
})
export class VehiclesComponent implements OnInit {
    vehicles: any[] = [];
    vehicleCount: number = 0;

    constructor(private vehicleService: VehicleService) {}

    ngOnInit(): void {
        this.getVehicles();
        this.vehiclesCount();
        console.log(this)
    }

    getVehicles(): void {
        this.vehicleService.getAll().subscribe(vehicles => {
            this.vehicles = vehicles;
        });
    }

    vehiclesCount(): void {
        this.vehicleService.count().subscribe(count => {
            this.vehicleCount = count;
        });
    }
}