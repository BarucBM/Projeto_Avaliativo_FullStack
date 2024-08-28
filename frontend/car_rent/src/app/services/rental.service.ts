import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {RentalModel} from "../models/rental.model";

@Injectable({
    providedIn: 'root',
})
export class RentalService {
    private readonly baseUrl = 'http://localhost:8080/rentals';

    constructor(private http: HttpClient) {}

    count(): Observable<number> {
        return this.http.get<number>(`${this.baseUrl}/count`);
    }

    getAll(filters?: any): Observable<RentalModel[]> {
        let params = new HttpParams();
        if (filters) {
            Object.keys(filters).forEach(key => {
                params = filters[key] && params.append(key, filters[key]);

            });
        }
        return this.http.get<RentalModel[]>(this.baseUrl, { params });
    }

    getById(id: number): Observable<RentalModel> {
        return this.http.get<RentalModel>(`${this.baseUrl}/${id}`);
    }

    create(rental: RentalModel): Observable<RentalModel> {
        return this.http.post<RentalModel>(this.baseUrl, rental);
    }

    update(id: number, rental: RentalModel): Observable<RentalModel> {
        return this.http.put<RentalModel>(`${this.baseUrl}/${id}`, rental);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
}