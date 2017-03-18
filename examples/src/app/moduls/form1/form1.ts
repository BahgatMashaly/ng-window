/**
 * Created by Bahgat on 5/30/16.
 */

import {AfterViewInit, Component, OnDestroy, ViewContainerRef, ElementRef, ViewChild} from '@angular/core';


import {WindowInstance,IDragListener,WindowConfig,WindowsInjetor,Size} from "ng-window";

  import {Form2} from "../form2/form2";

@Component({
    selector: 'Form1',
    templateUrl:'form1.html',

})
export class Form1 implements AfterViewInit,OnDestroy,IDragListener{


    constructor(private dialog: WindowInstance , private modal: WindowsInjetor, private viewContainer: ViewContainerRef, private elementRef:ElementRef )
    {

        this.dialog.bootstrapRef.instance.addSizeChangedListener(this);

    }
    openForm2()
    {
        var self = this;
        var config = new WindowConfig( "Form 2 inside From 1", new Size(300, 300))              ///سيتم التوسيط فقط في حالة عدم اعطاء قيم للمكان حيث سيعتبرها -
        config.centerInsideParent = true;

         config.BlockParentUI = true;
        var temp={}
        config.forAny=[temp];
        config.openAsMaximize=true;

        config.centerInsideParent=true;
        this.modal.openWindow(
            <any>Form2,
            config,
            this.viewContainer)
    }

    ngAfterViewInit():any {


    }




    onAfterDialogSizeChanged(event:Event) {

    }


    ngOnDestroy():any {


    }

}

