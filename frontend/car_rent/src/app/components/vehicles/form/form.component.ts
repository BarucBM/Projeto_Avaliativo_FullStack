import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'vehicle-form',
    standalone: true,
    imports: [],
    templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
    ngOnInit(): void {
    }
 /*   @Input() formData?: any;
    @Output() submitForm = new EventEmitter<any>();

    formGroup: FormGroup;
    existingData: any;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            name: [this.formData?.name || '', [Validators.required, Validators.minLength(3)]],
            description: [this.formData?.description || '', Validators.required]
        });
    }

    onSubmit() {
        if (this.formGroup.valid) {
            this.submitForm.emit(this.formGroup.value);
        }
    }

    onCreate($event: any) {

    }*/
}