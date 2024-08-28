import {Component} from '@angular/core';
import {CustomerModel} from "../../../models/customer.model";
import {CustomerService} from "../../../services/customer.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'new-customer',
    standalone: true,
    imports: [
        FormsModule
    ],
    templateUrl: './new-customer.component.html'
})
export class NewCustomerComponent {
    customer: CustomerModel = { id: 0, cpf: '', email: '', name: '', phone: '' };

    constructor(private customerService: CustomerService, private router: Router) {}

    createCustomer(): void {
        this.customerService.create(this.customer).subscribe({
            next: () => {
                this.router.navigate(['/customers']).then(() => alert('Cliente criado com sucesso!'));
            }, error: (err) => console.error('Erro ao criar cliente:', err)
        });
    }
}