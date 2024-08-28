
import { Component, OnInit } from '@angular/core';
import { VehicleModel } from '../../../models/vehicle.model';
import { VehicleService } from '../../../services/vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'show-vehicle',
    standalone: true,
    imports: [],
    templateUrl: './show-vehicle.component.html'
})

export class ShowVehicleComponent {
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
}
