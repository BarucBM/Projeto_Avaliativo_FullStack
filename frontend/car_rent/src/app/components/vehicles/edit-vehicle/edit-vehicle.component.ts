import {Component, OnInit} from '@angular/core';
import {VehicleModel} from "../../../models/vehicle.model";
import {ActivatedRoute, Router} from "@angular/router";
import {VehicleService} from "../../../services/vehicle.service";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
    selector: 'edit-vehicle',
    standalone: true,
    imports: [
        FormsModule,
        NgIf
    ],
    templateUrl: './edit-vehicle.component.html'
})
export class EditVehicleComponent implements OnInit {
    vehicle: VehicleModel = {
        id: 0,
        brand: '',
        color: '',
        licensePlate: '',
        model: '',
        rented: false,
        type: 'CAR',
        year: 0,
        rentalId: 0,
        image_url: ''
    };
    submitted = false;

    constructor(
        private vehicleService: VehicleService,
        private route: ActivatedRoute,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.getVehicle(this.route.snapshot.paramMap.get('id'));
    }

    getVehicle(id: string | null): void {
        this.vehicleService.getById(Number(id))
            .subscribe({
                next: (data) => {
                    this.vehicle = data;
                },
                error: (e) => console.error(e)
            });
    }

    updateVehicle(): void {
        this.submitted = true;
        this.vehicleService.update(this.vehicle.id, this.vehicle)
            .subscribe({
                next: (res) => {
                    console.log(res);
                    this.router.navigate(['/vehicle', this.vehicle.id]).then(r => alert(r ? " Atualizado com sucesso." : "Erro ao atualizar."));
                }, error: (e) => console.error(e)
            });
    }
}