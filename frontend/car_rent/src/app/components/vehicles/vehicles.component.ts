import {Component, OnInit} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {CommonModule} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {VehicleService} from "../../services/vehicle.service";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'vehicles',
    standalone: true,
    imports: [
        CommonModule,
        FaIconComponent,
        RouterLink,
        FormsModule
    ],
    templateUrl: './vehicles.component.html'
})
export class VehiclesComponent implements OnInit {
    vehicles: any[] = [];
    vehicleCount: number = 0;
    totalVehicles :number = 0;
    vehiclesPerPage :number = 2;
    qntPage :number = 0;

    filterBrand: string = '';
    filterColor: string = '';
    filterLicensePlate: string = '';
    filterModel: string = '';
    filterYear: number = 0;
    filterType: string = '';
    filterStatus: string = '';
    page:number = 1;

    carTypes = [
        { value: 'CAR', label: 'Carro' },
        { value: 'VAN', label: 'Van' },
        { value: 'TRUCK', label: 'Caminhão' },
        { value: 'MOTORCYCLE', label: 'Moto' },
        { value: 'BUS', label: 'Onibus' }
    ];

    isRent = [
        { value: 'true', label: 'Alugado' },
        { value: 'false', label: 'Disponível' },
    ];

    constructor(private vehicleService: VehicleService) {}

    ngOnInit(): void {
        this.applyFilters();
        this.calculatePages()
    }

    applyFilters(): void {
        const filters : { [key: string]: any }= {
            brand: this.filterBrand,
            color: this.filterColor,
            licensePlate: this.filterLicensePlate,
            model: this.filterModel,
            year: this.filterYear,
            type: this.filterType,
            rented: this.filterStatus,
            page: this.page,
            size: this.vehiclesPerPage
        };
        let usedFilters : { [key: string]: any } = {};
    
        Object.keys(filters).forEach(key => {
            if(filters[key] !== '' && filters[key] !== 0 && filters[key] !== null){
                usedFilters[key] = filters[key]
                
            }
            
        })
        




        this.vehicleService.getAll(usedFilters).subscribe(vehicles => {
            this.vehicles = vehicles;
            this.vehicleCount = vehicles.length;
        });


    }

    redirectToNewVehicle(): void {

    }

    calculatePages(){
        this.vehicleService.count().subscribe(vehicles => {
            this.totalVehicles = vehicles
            this.qntPage = Math.ceil( this.totalVehicles/this.vehiclesPerPage)
        })
        
    }

    nextPage(){
        if(this.vehicleCount==this.vehiclesPerPage && this.totalVehicles >this.vehiclesPerPage ){
            if(this.page >= this.qntPage){
                this.page = this.qntPage
            }else{
                this.page = this.page + 1
    
            }   
        }
       

    }

    previousPage(){
        
        if(this.page <=1){
            this.page = 1
        }else{
            this.page = this.page -1
        }

    }
}