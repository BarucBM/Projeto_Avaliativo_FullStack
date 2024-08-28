import { Component, OnInit } from '@angular/core';
import { CustomerModel } from '../../models/customer.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { Router, RouterLink } from '@angular/router';
import {CustomerService} from "../../services/customer.service";

@Component({
    selector: 'app-customers',
    standalone: true,
    imports: [CommonModule, FormsModule, FaIconComponent, RouterLink],
    templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {

    customers: CustomerModel[] | any = [];
    filteredCustomers: CustomerModel[] = [];
    filters = { name: '', cpf: '', email: '', phone: '', image_url: '' };

    constructor(private customerService: CustomerService, private router: Router) {}

    ngOnInit(): void {
        this.customerService.getAll().subscribe({
            next: (customers) => {
                console.log('Clientes:', customers);
                this.customers = customers;
                this.filteredCustomers = [...this.customers];
            }, error: (err) => console.error('Erro:', err)
        });
    }

    redirectToNewCustomer(): void {
        this.router.navigate(['/customer/new']).then(r => r);
    }

    filterCustomers(): void {
        this.filteredCustomers = this.customers.filter((customer: CustomerModel) =>
            customer.name.toLowerCase().includes(this.filters.name.toLowerCase()) ||
            customer.cpf.includes(this.filters.cpf) ||
            customer.email.toLowerCase().includes(this.filters.email.toLowerCase()) ||
            customer.phone.includes(this.filters.phone) ||
            customer.phone.includes(this.filters.image_url)
        );
    }
}