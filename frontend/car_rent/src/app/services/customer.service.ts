import {ApiService} from "./api.service";
import {HttpClient} from "@angular/common/http";

export class CustomerService extends ApiService {
    constructor({http}: { http: HttpClient }) {
        super(http);
    }

    protected get path(): string {
        return 'customer';
    }

}
