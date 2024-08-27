import {Component} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
    selector: 'vehicles',
    standalone: true,
    imports: [
        FaIconComponent
    ],
    templateUrl: './vehicles.component.html'
})
export class VehiclesComponent {
    vehicle = {
        type: "Carro",
        brand: "BMW",
        model: "X6",
        year: "2024",
    }
}
