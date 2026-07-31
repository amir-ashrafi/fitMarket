import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { ButtonModule } from 'primeng/button';
import { AutoComplete } from 'primeng/autocomplete';
import { FloatLabel } from 'primeng/floatlabel';
import { InputNumber, InputNumberModule } from 'primeng/inputnumber';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { MultiSelectModule } from 'primeng/multiselect';
import { FileUpload } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { FileUploadEvent } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { Checkbox } from 'primeng/checkbox';
import { Fluid, FluidModule } from 'primeng/fluid';
import { DatePickerModule } from 'primeng/datepicker';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}
interface City{
name:string,
code:string,
}


@Component({
  selector: 'app-ce-product',
  standalone: true,
  imports: [EditorModule,DatePickerModule, FormsModule, FluidModule,FormsModule, InputNumber,FileUpload,FormsModule, Checkbox, ToastModule, CommonModule, FormsModule,ButtonGroupModule,ButtonModule,FormsModule,FormsModule, InputGroupModule, InputGroupAddonModule, IftaLabelModule , InputNumberModule , FormsModule, MultiSelectModule, FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, SelectModule, InputNumberModule],
  providers:[MessageService],
  encapsulation:ViewEncapsulation.None,
    templateUrl: './ce-product.html',
  styleUrl: './ce-product.css',
})
export class CeProduct {
        value1: number = 50;

        checked: boolean = false;
    value2: number = 50;
    date2: Date | undefined;

    text1: string | undefined;

    text2: string | undefined;

    number: string | undefined;

    selectedCity: City | undefined;

    cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' },
    ];
      
    uploadedFiles: any[] = [];
        constructor(private messageService: MessageService) {}

    onUpload(event:FileUploadEvent) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }
    text: string = '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';

    items: any[]=[] ;
    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' },
        ];
    }
    search(event: AutoCompleteCompleteEvent) {
        this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
    }
}
