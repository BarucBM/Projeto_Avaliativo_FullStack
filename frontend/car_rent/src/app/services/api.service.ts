import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private baseUrl: string = 'http://localhost:8080';

    constructor(private http: HttpClient) {}

    getVehicles(): Observable<number> {
        return this.http.get<any[]>(`${this.baseUrl}/vehicle`).pipe(
            map(vehicles => vehicles.length)
        );
    }

    getCustomers(): Observable<number> {
        return this.http.get<any[]>(`${this.baseUrl}/customer`).pipe(
            map(customers => customers.length)
        );
    }

    getRentals(): Observable<number> {
        return this.http.get<any[]>(`${this.baseUrl}/rental`).pipe(
            map(rentals => rentals.length)
        );
    }
}
