import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ModalDirective, TooltipModule } from 'ngx-bootstrap';
import { DropdownComponent } from '../bs-component/components';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-errortype',
    templateUrl: './errortype.component.html',
    styleUrls: ['./errortype.component.scss'],
    animations: [routerTransition()]
})
export class ErrortypeComponent implements OnInit {
    isCollapsed : boolean = true;
    closeResult: string;

    @ViewChild('AlertModal') public AlertModal: ModalDirective;

    constructor(
        //private modalService: NgbModal
    ) {}
   
    // open(content) {
    //     this.modalService.open(content).result.then((result) => {
    //         this.closeResult = `Closed with: ${result}`;
    //     }, (reason) => {
    //         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //     });
    // }
    // private getDismissReason(reason: any): string {
    //     if (reason === ModalDismissReasons.ESC) {
    //         return 'by pressing ESC';
    //     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    //         return 'by clicking on a backdrop';
    //     } else {
    //         return  `with: ${reason}`;
    //     }
    // }

    ngOnInit() {}
}
