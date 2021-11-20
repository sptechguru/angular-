import { ChildinfoComponent } from './childinfo/childinfo.component';
import { ParentinfoComponent } from './parentinfo/parentinfo.component';

import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory
} from '@angular/core';



import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from 'ngx-qrcode2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  title = 'test-app';


  // ######################### that is barcode #######################

  // title = 'QRCODES';
  // name = 'Santosh Pal' + VERSION.major;
  // elementType = NgxQrcodeElementTypes.URL;
  // correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  // value = 'https://sani.pythonanywhere.com/';


  sp(){
    alert("santosh pal");
  }

}



