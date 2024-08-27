import {Component} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {CommonModule} from "@angular/common";
import {VehicleModel} from "../../models/vehicle.model";

@Component({
    selector: 'vehicles',
    standalone: true,
    imports: [
        CommonModule,
        FaIconComponent
    ],
    templateUrl: './vehicles.component.html'
})
export class VehiclesComponent {

    vehicles: VehicleModel[] = [
        { id: 1, brand: 'BMW', color: 'Preto', licensePlate: 'ABC-1234', model: 'X6', rented: false, type: 'CAR', year: 2024 },
        { id: 2, brand: 'Honda', color: 'Vermelho', licensePlate: 'XYZ-5678', model: 'Civic', rented: true, type: 'CAR', year: 2023 },
        { id: 1, brand: 'BMW', color: 'Preto', licensePlate: 'ABC-1234', model: 'X6', rented: false, type: 'CAR', year: 2024 },
        { id: 1, brand: 'BMW', color: 'Preto', licensePlate: 'ABC-1234', model: 'X6', rented: false, type: 'CAR', year: 2024 },
        { id: 2, brand: 'Honda', color: 'Vermelho', licensePlate: 'XYZ-5678', model: 'Civic', rented: true, type: 'CAR', year: 2023 },
        { id: 1, brand: 'BMW', color: 'Preto', licensePlate: 'ABC-1234', model: 'X6', rented: false, type: 'CAR', year: 2024 },
        { id: 2, brand: 'Honda', color: 'Vermelho', licensePlate: 'XYZ-5678', model: 'Civic', rented: true, type: 'CAR', year: 2023 },
        { id: 1, brand: 'BMW', color: 'Preto', licensePlate: 'ABC-1234', model: 'X6', rented: false, type: 'CAR', year: 2024 },
    ];

    carTypes = [
        { value: 'CAR', label: 'Carro' },
        { value: 'BUS', label: 'Onibus' },
        { value: 'VAN', label: 'Van' }
    ];

    isRent = [
        { value: true, label: 'Alugado' },
        { value: false, label: 'Disponível' },
    ]
}
