/**
 * Created by Bahgat on 1/15/16.
 */

import {isPresent} from "@angular/common/src/facade/lang";
import {CustomPosition, Size} from "./utils";


export class WindowConfig {

    keyboard: Array<number> | number;
    forAny:any;
    navbarHeight=0;
    minusLeft=7;
    minusTop=3;
    minusWidth=14;
    minusHeight=44;
    constructor(public Title: string = "",
                public size: Size = new Size(300, 150),
                public BlockParentUI: boolean = false,
                public canMinimize: boolean = true,
                public canMaximize: boolean = true,
                public openAsMaximize: boolean = false, //for first time
                public centerInsideParent: boolean = true,
                public isResizable: boolean = true,
                public position: CustomPosition = new CustomPosition(50, 50),

               // public attachToBody: boolean = false,
                keyboard: Array<number> | number = undefined )

    {
        if (keyboard === undefined) {
            keyboard = [27];
        }
        else if (isPresent(keyboard) && !Array.isArray(<Array<number>>keyboard)) {
            keyboard = (!isNaN(<number>keyboard)) ? [<number>keyboard] : null;
        }
        this.keyboard = keyboard;
    }
}


