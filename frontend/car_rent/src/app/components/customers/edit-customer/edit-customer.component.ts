import { Component } from '@angular/core';
import { CustomerModel } from '../../../models/customer.model';
import { CustomerService } from '../../../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-edit-customer',
  standalone: true,
  imports: [    
    FormsModule,
    NgIf],
  templateUrl: './edit-customer.component.html'
})
export class EditCustomerComponent {
  customer : CustomerModel = {
    id: 0,
    cpf: '',
    email: '',
    name: '',
    phone: ''
}

message = '';
submitted = false;

constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
) { }

ngOnInit(): void {
  this.getCustomer(this.route.snapshot.paramMap.get('id'));
}

getCustomer(id: string | null): void {
  this.customerService.getById(Number(id))
      .subscribe({
        next: (data) => {
          this.customer = data;
        },
        error: (e) => console.error(e)
      });
}

updateCustomer(): void {
  this.message = '';
  this.submitted = true;
  this.customerService.update(this.customer.id, this.customer)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = 'Cliente atualizado com sucesso!';
          this.router.navigate(['/customer', this.customer.id]).then(r => r);
          alert(this.message)
        },
        error: (e) => console.error(e)
      });
}

}
