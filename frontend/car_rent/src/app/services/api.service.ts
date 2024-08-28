import { HttpClient } from '@angular/common/http';

export abstract class ApiService {
    public readonly baseUrl: string = 'http://localhost:8080';
    protected constructor(protected http: HttpClient) {}
    protected abstract get path(): string;
}