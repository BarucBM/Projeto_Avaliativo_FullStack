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
export class EditVehicleComponent {
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
  message = '';
  submitted = false;

  constructor(
      private vehicleService: VehicleService,
      private route: ActivatedRoute,
      private router: Router
  ) { }

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
    this.message = '';
    this.submitted = true;
    this.vehicleService.update(this.vehicle.id, this.vehicle)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.message = 'Veículo atualizado com sucesso!';
            this.router.navigate(['/vehicle', this.vehicle.id]).then(r => r);
            alert(this.message)
          },
          error: (e) => console.error(e)
        });
  }
}