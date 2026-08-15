import { Component, inject, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { AutoComplete, AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { FloatLabel } from 'primeng/floatlabel';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-ce-blog',
    standalone: true,
    imports: [ReactiveFormsModule,TagModule,FormsModule, EditorModule, ToastModule, MessageModule, ButtonModule],
providers: [MessageService],
encapsulation:ViewEncapsulation.None,
  templateUrl: './ce-blog.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './ce-blog.css',
})
export class CeBlog {
    messageService = inject(MessageService);
    value3: string | undefined;
    items2: any[] =[];

    items: any[] | undefined;

    search(event: AutoCompleteCompleteEvent) {
        this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
    }
    exampleForm: FormGroup;

    formSubmitted: boolean = false;

    constructor(private fb: FormBuilder) {
        this.exampleForm = this.fb.group({
            text: ['', Validators.required]
        });
    }

    onSubmit() {
        this.formSubmitted = true;
        if (this.exampleForm.valid) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form is submitted', life: 3000 });
            this.exampleForm.reset();
            this.formSubmitted = false;
        }
    }

    isInvalid(controlName: string) {
        const control = this.exampleForm.get(controlName);
        return control?.invalid && (control.touched || this.formSubmitted);
    }
    
}
