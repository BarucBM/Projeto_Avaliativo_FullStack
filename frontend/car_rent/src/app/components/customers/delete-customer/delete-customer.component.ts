import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../../../services/customer.service";
import {NgIf} from "@angular/common";

@Component({
    selector: 'delete-customer',
    standalone: true,
    imports: [ NgIf ],
    templateUrl: './delete-customer.component.html'
})
export class DeleteCustomerComponent implements OnInit {
    customerId: number | null = null
    message: string = 'Erro ao deletar.'

    constructor(private service: CustomerService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        this.customerId = Number(this.route.snapshot.paramMap.get('id'))
        this.customerId && this.deleteCustomer(this.customerId)
    }

    deleteCustomer(id: number): void {
        this.service.delete(id).subscribe({
            next: () => {
                this.router.navigate(['/customers']).then(r => {
                    this.message = r ? "Deletado com sucesso." : "Erro ao deletar."
                })
            },error:(e) => this.message = e.error && e.error.cpf ? e.error.cpf :`Erro: ${e.message || 'Erro desconhecido.'}`
        })
        alert(this.message)
    }
}
