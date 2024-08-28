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
    customer: CustomerModel = { id: 0, cpf: '', email: '', name: '', phone: '' }
    private text!: string
    constructor(private customerService: CustomerService, private router: Router) {}

    createCustomer(): void {
        this.customerService.create(this.customer).subscribe({
            next: () => {
                this.text = 'Cliente criado com sucesso!'
                this.router.navigate(['/customers']).then(() => alert(this.text))
            },
            error: (err) => {
                this.text = (err.error && typeof err.error === 'object') ? Object.values(err.error).join(', ')
                    : (err.message) ? this.text = err.message : this.text = 'Erro ao criar cliente.'
            }
        });
        alert(this.text)
    }
}
