import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ApiService} from "./api.service";

@Injectable({
    providedIn: 'root'
})
export class VehicleService extends ApiService {
    protected get path(): string {
        return 'vehicle';
    }

    constructor(http: HttpClient) {
        super(http);
    }
}
