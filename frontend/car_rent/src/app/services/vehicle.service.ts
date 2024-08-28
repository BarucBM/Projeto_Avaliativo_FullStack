import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {VehicleModel} from "../models/vehicle.model";

@Injectable({
    providedIn: 'root',
})
export class VehicleService {
    private readonly baseUrl = 'http://localhost:8080/vehicle';

    constructor(private http: HttpClient) {}

    count(): Observable<number> {
        return this.http.get<number>(`${this.baseUrl}/count`);
    }

    getAll(filters?: any): Observable<VehicleModel[]> {
        let params = new HttpParams();
        if (filters) {
            Object.keys(filters).forEach(key => {
                params = params.append(key, filters[key]);
            });
            console.log(this.baseUrl, { params })
            return this.http.get<VehicleModel[]>(this.baseUrl, { params });
        }else{
            return this.http.get<VehicleModel[]>(this.baseUrl);
        }

    }

    getById(id: number): Observable<VehicleModel> {
        return this.http.get<VehicleModel>(`${this.baseUrl}/${id}`);
    }

    create(vehicle: VehicleModel): Observable<VehicleModel> {
        return this.http.post<VehicleModel>(this.baseUrl, vehicle);
    }

    update(id: number, vehicle: VehicleModel): Observable<VehicleModel> {
        return this.http.put<VehicleModel>(`${this.baseUrl}/${id}`, vehicle);
    }

    delete(id: number | string): Observable<any> {
        return this.http.delete<void>(`${this.baseUrl}${id}`);
    }
}