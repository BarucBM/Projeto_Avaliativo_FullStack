import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-show-vehicle',
    standalone: true,
    imports: [],
    templateUrl: './show-vehicle.component.html'
})
export class ShowVehicleComponent implements OnInit {
    vehicleId!: string | null;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.vehicleId = this.route.snapshot.paramMap.get('id');
    }
}
