import { Observable } from "rxjs";
import {ApiService} from "./api.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import { CustomerModel } from "../models/customer.model";
import { Injectable } from "@angular/core";
import {VehicleModel} from "../models/vehicle.model";


@Injectable({
    providedIn: 'root',
})
export class CustomerService {//extends ApiService {
    // constructor({http}: { http: HttpClient }) {
    //     super(http);
    // }

    // protected get path(): string {
    //     return 'customer';
    // }
    private readonly baseUrl = 'http://localhost:8080/customer';

    constructor(private http: HttpClient) {}

    count(): Observable<number> {
        return this.http.get<number>(`${this.baseUrl}/count`);
    }

    getAll(filters?: any): Observable<CustomerModel[]> {
        let params = new HttpParams();
        if (filters) {
            Object.keys(filters).forEach(key => {
                params = params.append(key, filters[key]);
            });
            console.log(this.baseUrl, { params })
            return this.http.get<CustomerModel[]>(this.baseUrl, { params });
        }else{
            return this.http.get<CustomerModel[]>(this.baseUrl);
        }

    }

    getById(id: number): Observable<CustomerModel> {
        return this.http.get<CustomerModel>(`${this.baseUrl}/${id}`);
    }

    create(vehicle: CustomerModel): Observable<CustomerModel> {
        return this.http.post<CustomerModel>(this.baseUrl, vehicle);
    }

    update(id: number, vehicle: CustomerModel): Observable<CustomerModel> {
        return this.http.put<CustomerModel>(`${this.baseUrl}/${id}`, vehicle);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }

    apiResponse(res: any, onSuccess: () => void): void {
        console.log((res && res.message), res.message);
        onSuccess();
    }
}
