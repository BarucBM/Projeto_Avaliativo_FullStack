import {Component} from '@angular/core';
import {CustomerModel} from "../../models/customer.model";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {Router} from "@angular/router";

@Component({
    selector: 'app-customers',
    standalone: true,
    imports: [CommonModule, FormsModule, FaIconComponent],
    templateUrl: './customers.component.html'
})
export class CustomersComponent {

    constructor(private router: Router) {}

    redirectToNewCustomer() {
        this.router.navigate(['/customer/new']).then(r => r);
    }

    customers: CustomerModel[] = [
        {id: 1, cpf: '123.456.789-01', email: 'saitama@mail.com', name: 'Saitama', phone: '555-1234'},
        {id: 1, cpf: '123.456.423-02', email: 'goku@mail.com', name: 'Goku', phone: '255-1234'},
        {id: 1, cpf: '123.456.999-03', email: 'vegeta@mail.com', name: 'Vegeta', phone: '355-1234'},
        {id: 1, cpf: '123.456.789-04', email: 'dante@mail.com', name: 'Dante', phone: '543-1234'},
        {id: 1, cpf: '123.456.888-05', email: 'itachi@mail.com', name: 'Itachi', phone: '995-1234'},
        {id: 1, cpf: '123.456.451-06', email: 'ipo@mail.com', name: 'Hajime no Ipo', phone: '775-1234'},
        {id: 2, cpf: '987.654.321-07', email: 'alucard@mail.com', name: 'Alucard', phone: '598-5678'}
    ];

    filteredCustomers: CustomerModel[] = [...this.customers];
    filters = { name: '', cpf: '', email: '', phone: '' };

    filterCustomers(): void {
        this.filteredCustomers = this.customers.filter(customer =>
            customer.name.toLowerCase().includes(this.filters.name.toLowerCase()) &&
            customer.cpf.includes(this.filters.cpf) &&
            customer.email.toLowerCase().includes(this.filters.email.toLowerCase()) &&
            customer.phone.includes(this.filters.phone)
        );
    }
}