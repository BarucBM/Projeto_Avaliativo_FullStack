import { Component } from '@angular/core';
import {FormComponent} from "../form/form.component";
import {VehicleModel} from "../../../models/vehicle.model";
import {ApiService} from "../../../services/api.service";

@Component({
  selector: 'app-new-vehicle',
  standalone: true,
    imports: [
        FormComponent
    ],
  templateUrl: './new-vehicle.component.html'
})
export class NewVehicleComponent {
  onCreate(data: ApiService) {
    // this.createVehicle(data).subscribe(response => {
    //   console.log('Vehicle created successfully', response);
    // });
  }
}
