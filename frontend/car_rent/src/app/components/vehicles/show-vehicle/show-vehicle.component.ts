import {Component, OnInit} from '@angular/core';
import {VehicleModel} from "../../../models/vehicle.model";
import {VehicleService} from "../../../services/vehicle.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'show-vehicle',
    standalone: true,
    imports: [],
    templateUrl: './show-vehicle.component.html'
})
export class ShowVehicleComponent implements OnInit {
    vehicle: VehicleModel | null = null;

    constructor(private vehicleService: VehicleService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        const vehicleId = Number(this.route.snapshot.paramMap.get('id'));
        vehicleId ?
            this.vehicleService.getById(vehicleId).subscribe(v => this.vehicle = v)
            : console.error('ID do veículo não encontrado');
    }
}