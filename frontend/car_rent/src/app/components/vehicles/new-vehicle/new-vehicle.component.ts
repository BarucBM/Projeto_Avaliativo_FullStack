import {Component, OnInit} from '@angular/core';
import {VehicleService} from "../../../services/vehicle.service";
import {VehicleModel} from "../../../models/vehicle.model";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    selector: 'new-vehicle',
    standalone: true,
    imports: [
        FormsModule
    ],
    templateUrl: './new-vehicle.component.html'
})
export class NewVehicleComponent implements OnInit {
    vehicle: VehicleModel = {
        id: 0,
        brand: '',
        color: '',
        licensePlate: '',
        model: '',
        rented: false,
        type: 'CAR',
        year: 2024,
        rentalId: 0,
        image_url: ''
    };
    submitted = false;

    constructor(private vehicleService: VehicleService, private router: Router) {}

    ngOnInit(): void {}

    saveVehicle(): void {
        this.vehicleService.create(this.vehicle).subscribe({
            next: (createdVehicle) => {
                this.submitted = true;
                this.router.navigate(['/vehicle', createdVehicle.id])
                    .then(r => alert(r ? "Criado com sucesso." : "Erro ao criar."));
            }, error: (e) => console.error(e)
        });
    }

    newVehicle(): void {
        this.submitted = false;
        this.vehicle = {
            id: 0,
            brand: '',
            color: '',
            licensePlate: '',
            model: '',
            rented: false,
            type: 'CAR',
            year: 2024,
            rentalId: 0,
            image_url: ''
        };
    }
}