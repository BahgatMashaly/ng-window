/**
 * Created by bahgat.mashaly on 10/1/16.
 */
import {NgModule } from '@angular/core';
  import { MyApp } from './app.component';
 import {WindowsInjetor,WindowBackdrop,BootstrapWindowContainer} from "ng-window";


 import {Form1} from "./moduls/form1/form1";
import {Form2} from "./moduls/form2/form2";
import {BrowserModule} from "@angular/platform-browser";
@NgModule({
    declarations: [
        MyApp,


        WindowBackdrop,
          BootstrapWindowContainer,
        Form2,
        Form1
    ],
    imports: [
        BrowserModule
        // IonicModule.forRoot(MyApp,  {
        //     // menuType: 'overlay',
        //     platforms: {
        //         ios: {
        //             menuType: 'push',
        //         }
        //     }
        //     // mode: 'ios' ,
        //
        //     // modalLeave:'modal-slide-in',
        //     // modalEnter :'modal-slide-out'
        // })
    ],
    
   
    bootstrap: [MyApp],
    entryComponents: [
        MyApp,

        WindowBackdrop,
         BootstrapWindowContainer,
        Form1,
        Form2

    ],

    providers: [

        WindowsInjetor,


    ],

})
export class AppModule {}