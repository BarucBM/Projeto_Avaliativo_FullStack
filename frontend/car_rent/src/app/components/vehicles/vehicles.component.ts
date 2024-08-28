import {Component, OnInit} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {CommonModule} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {VehicleService} from "../../services/vehicle.service";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'vehicles',
    standalone: true,
    imports: [
        CommonModule,
        FaIconComponent,
        RouterLink,
        FormsModule
    ],
    templateUrl: './vehicles.component.html'
})
export class VehiclesComponent implements OnInit {
    vehicles: any[] = [];
    vehicleCount: number = 0;

    filterBrand: string = '';
    filterColor: string = '';
    filterLicensePlate: string = '';
    filterModel: string = '';
    filterYear: string = '';
    filterType: string = '';
    filterStatus: string = '';

    carTypes = [
        { value: 'car', label: 'Carro' },
        { value: 'van', label: 'Van' },
    ];

    isRent = [
        { value: 'rented', label: 'Alugado' },
        { value: 'available', label: 'Disponível' },
    ];

    constructor(private vehicleService: VehicleService) {}

    ngOnInit(): void {
        this.applyFilters();
    }

    applyFilters(): void {
        const filters = {
            brand: this.filterBrand,
            color: this.filterColor,
            licensePlate: this.filterLicensePlate,
            model: this.filterModel,
            year: this.filterYear,
            type: this.filterType,
            rented: this.filterStatus === 'rented'
        };

        this.vehicleService.getAll(filters).subscribe(vehicles => {
            this.vehicles = vehicles;
            this.vehicleCount = vehicles.length;
        });
    }

    redirectToNewVehicle(): void {
    }
}