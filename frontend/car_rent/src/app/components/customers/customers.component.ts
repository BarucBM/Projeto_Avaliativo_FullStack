import {Component, OnInit} from '@angular/core';
import {CustomerModel} from '../../models/customer.model';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {Router, RouterLink} from '@angular/router';
import {CustomerService} from "../../services/customer.service";
import {emitDistinctChangesOnlyDefaultValue} from "@angular/compiler";

@Component({
    selector: 'app-customers',
    standalone: true,
    imports: [CommonModule, FormsModule, FaIconComponent, RouterLink],
    templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {
    customers: CustomerModel[] | any = [];
    customerCount: number = 0;
    totalCustomers: number = 0;
    page: number = 0;
    customerPerPage: number = 2;
    qntPage: number = 0;
    filteredCustomers: CustomerModel[] = [];
    filterName: string = '';
    filterCpf: string = '';
    filterEmail: string = '';
    filterPhone: string = '';

    constructor(private customerService: CustomerService, private router: Router) {
    }

    ngOnInit(): void {
        this.filterCustomers();
        this.calculatePages()
    }

    redirectToNewCustomer(): void {
        this.router.navigate(['/customers/new']).then(r => r);
    }

    filterCustomers(): void {
        const filters: { [key: string]: any } = {
            name: this.filterName,
            cpf: this.filterCpf,
            email: this.filterEmail,
            phone: this.filterPhone,
            page: this.page,
            size: this.customerPerPage
        };
        let usedFilters: { [key: string]: any } = {};

        Object.keys(filters).forEach(key => {
            if (filters[key] !== '' && filters[key] !== 0 && filters[key] !== null) {
                usedFilters[key] = filters[key];
            }
        });

        this.customerService.getAll(usedFilters).subscribe(customers => {
            this.customers = customers;
            this.customerCount = customers.length;
            this.filteredCustomers = customers;
        });
    }

    calculatePages() {
        this.customerService.count().subscribe(vehicles => {
            this.totalCustomers = vehicles
            this.qntPage = Math.ceil(this.totalCustomers / this.customerPerPage)
        })
    }

    setPage(page: number): void {
        this.page = page;
        this.filterCustomers();
    }

    nextPage(): void {
        if (this.page < this.qntPage) {
            this.page++;
            this.filterCustomers();
        }
    }

    previousPage(): void {
        if (this.page > 1) {
            this.page--;
            this.filterCustomers();
        }
    }

    deleteCustomer(id: number | string) {
        if (confirm('Você tem certeza de que deseja excluir este cliente?')) {
            this.customerService.delete(id).subscribe({
                next: () => this.filterCustomers(), error: (e) => console.error('Erro:', e)
            });
        }
    }
}