/**
 * Created by bahgat.mashaly on 10/1/16.
 */


import {AfterViewInit, ViewContainerRef} from '@angular/core';



import {Component} from "@angular/core";

import {Form1} from "./moduls/form1/form1";
import {Form2} from "./moduls/form2/form2";

import {WindowsInjetor,CustomPosition,Size,WindowConfig} from "ng-window";


// require("./shared/myLib/logger")

@Component({
    selector:'my-app',
    templateUrl: './app.html',
})


export class  MyApp implements  AfterViewInit{


   // @ViewChild('mainContainer', {read: ViewContainerRef}) target;



    constructor(private myInjector: WindowsInjetor,public viewContainerRef:ViewContainerRef)
    {

    }

    ngAfterViewInit():any {
     }



    openForm1()
    {
        var self = this;
        var config = new WindowConfig("Form 1", new Size(400, 400))              ///سيتم التوسيط فقط في حالة عدم اعطاء قيم للمكان حيث سيعتبرها -
       // config.centerInsideParent = true;
       // config.BlockParentUI = true;
        var temp={}

        // temp["deviceOrCustomer"]=deviceOrCustomer;
        //
        // temp["devices"]=devices;
        config.forAny=[temp];
        config.openAsMaximize=false;
        //  config.openAsMaximize=true;

        this.myInjector.openWindow(
            <any>Form1,
            config  )
    }

    openForm2()
    {
        var self = this;
        var config = new WindowConfig( "Form 2", new Size(300, 300))              ///سيتم التوسيط فقط في حالة عدم اعطاء قيم للمكان حيث سيعتبرها -
        config.position=new CustomPosition(100, 200)
        config.centerInsideParent=false;

        var temp={}
        config.forAny=[temp];
        config.openAsMaximize=false;

        this.myInjector.openWindow( Form2,config).then()
    }







}




