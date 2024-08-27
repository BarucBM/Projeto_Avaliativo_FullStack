import {Component} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {CommonModule} from "@angular/common";
import {VehicleModel} from "../../models/vehicle.model";
import {Router} from "@angular/router";

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

    constructor(private router: Router) {}

    redirectToNewVehicle() {
        this.router.navigate(['/vehicle/new']).then(r => r);
    }

    vehicles: VehicleModel[] = [
        { id: 1, brand: 'BMW', color: 'Preto', licensePlate: 'ABC-1234', model: 'X6', rented: false, type: 'CAR', year: 2024 },
        { id: 2, brand: 'Honda', color: 'Vermelho', licensePlate: 'XYZ-5678', model: 'Civic', rented: true, type: 'CAR', year: 2023 },
        { id: 3, brand: 'Yamaha', color: 'Azul', licensePlate: 'MNO-9101', model: 'YZF-R3', rented: false, type: 'MOTORCYCLE', year: 2022 },
        { id: 4, brand: 'Mercedes-Benz', color: 'Branco', licensePlate: 'JKL-2345', model: 'Sprinter', rented: true, type: 'VAN', year: 2023 },
        { id: 5, brand: 'Volvo', color: 'Cinza', licensePlate: 'PQR-6789', model: 'FH16', rented: false, type: 'TRUCK', year: 2024 },
        { id: 6, brand: 'BMW', color: 'Preto', licensePlate: 'ABC-5678', model: 'X5', rented: true, type: 'CAR', year: 2021 }
    ];

    carTypes = [
        { value: 'CAR', label: 'Carro' },
        { value: 'MOTORCYCLE', label: 'Motocicleta' },
        { value: 'TRUCK', label: 'Caminhão' },
        { value: 'VAN', label: 'Van' }
    ];

    isRent = [
        { value: true, label: 'Alugado' },
        { value: false, label: 'Disponível' },
    ]
}
