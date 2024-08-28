import {Component, OnInit} from '@angular/core';
import {VehicleService} from "../../../services/vehicle.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-delete-vehicle',
    standalone: true,
    imports: [],
    templateUrl: './delete-vehicle.component.html'
})
export class DeleteVehicleComponent implements OnInit {
    vehicleId: number | null = null;
    message: string = '';

    constructor(private vehicleService: VehicleService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {
        this.vehicleId = Number(this.route.snapshot.paramMap.get('id'));
        if (this.vehicleId) {
            this.deleteVehicle(this.vehicleId);
        }
    }

    deleteVehicle(id: number): void {
        this.vehicleService.delete(id).subscribe({
            next: () => {
                this.message = 'Veículo excluído com sucesso!';
                this.router.navigate(['/vehicles']).then(r => r);
            }, error: (e) => console.error('Erro:', e)
        });
    }
}