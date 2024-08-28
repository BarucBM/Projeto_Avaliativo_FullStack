import { Component } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerModel } from '../../../models/customer.model';

@Component({
  selector: 'app-show-customer',
  standalone: true,
  imports: [],
  templateUrl: './show-customer.component.html'
})
export class ShowCustomerComponent {

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
}
