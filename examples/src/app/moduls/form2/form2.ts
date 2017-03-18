/**
 * Created by Bahgat on 5/30/16.
 */

import {   Component, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';

 import {WindowInstance,IDragListener} from "ng-window";

 import {} from "rxjs/operator"

@Component({
    selector: 'dayesGroupByHour',
    templateUrl:'form2.html',

})


export class Form2 implements IDragListener,OnDestroy{


    constructor( private dialog: WindowInstance  )
    {

        this.dialog.bootstrapRef.instance.addSizeChangedListener(this);
    }


    onAfterDialogSizeChanged(event:Event) {
        console.log("ttttt")

    }

    ngOnDestroy():any {



    }




}
