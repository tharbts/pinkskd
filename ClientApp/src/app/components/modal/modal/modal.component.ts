import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

    @ViewChild('basicModal', { static: true }) modal: ModalDirective

    constructor() { }

    ngOnInit(): void {
    }

    show(){
        this.modal.show();
    }

    onYesClick() {
        this.modal.hide();
    }

    onNoClick() {
        this.modal.hide();
    }
}
