import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

    @ViewChild('basicModal', { static: true }) modal: ModalDirective
    private callback: Function;


    constructor() {
    }

    ngOnInit(): void {
    }

    show(callback: Function) {
        this.callback = callback;
        this.modal.show();
    }

    onYesClick() {
        this.callback(true);
        this.modal.hide();
    }

    onNoClick() {
        this.callback(false);
        this.modal.hide();
    }
}
