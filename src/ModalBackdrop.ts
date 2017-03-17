import {WindowInstance} from "./WindowInstance";
 import {Component} from "@angular/core";
import {global} from "./utils";

/**
 * Created by Bahgat on 1/15/16.
 */
@Component({
    //directives:[IONIC_DIRECTIVES],
    selector: 'modal-backdrop',
    host: {
        '[style.position]': 'position',
        '[style.height]': 'height',
        '[style.width]': 'width',
        '[style.top]': 'top',
        '[style.left]': 'left',
        '[style.right]': 'right',
        '[style.bottom]': 'bottom',
        // '[hidden]':'!dialog.config.BlockParentUI',

        //  '[style.z-index]': "BackdropZindex"

    },
    template: '<div [hidden]="!dialog.config.BlockParentUI"  [style.position]="position" [style.z-index]="BackdropZindex" class="in modal-backdrop my" #modalBackdrop></div>'
})
export class WindowBackdrop {
    public position: string;
    public height: string;
    public width: string;
    public top: string;
    public left: string;
    public right: string;
    public bottom: string;
    BackdropZindex: number;

    constructor(public dialog: WindowInstance) {
        this.BackdropZindex = global.MaxZIndex++;

        //if (!dialog.inElement) {
            this.position = this.width = this.height = null;
            this.top = this.left = this.right = this.bottom = null;
        //} else {
        //    this.position = 'absolute';
        //    this.height = '100%';
        //    this.width = '100%';
        //    this.top = this.left = this.right = this.bottom = '0';
        //}
    }
}



// @NgModule({
//     imports: [
//         WindowBackdrop
//
//     ] ,
//     exports:[ WindowBackdrop],
//
//
// })
// export class ModalBackdrop_module {}