import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class ApiService {
    private readonly baseUrl: string = 'http://localhost:8080';

    protected constructor(protected http: HttpClient) {}
    protected abstract get path(): string;

    private url(): string {
        return `${this.baseUrl}/${this.path}`;
    }

    count(): Observable<number> {
        return this.http.get<number>(`${this.url()}/count`);
    }

    getAll(): Observable<any[]> {
        return this.http.get<any[]>(this.url());
    }

    getById(id: number): Observable<any> {
        return this.http.get<any>(`${this.url()}/${id}`);
    }

    create(item: any): Observable<any> {
        return this.http.post<any>(this.url(), item);
    }

    update(id: number, item: any): Observable<any> {
        return this.http.put<any>(`${this.url()}/${id}`, item);
    }

    delete(id: number): Observable<any> {
        return this.http.delete<any>(`${this.url()}/${id}`);
    }
}