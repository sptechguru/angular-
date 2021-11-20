import { CrudService } from './../crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
  providers:[CrudService]
})

export class CrudComponent implements OnInit {

  constructor(private _crudService:CrudService) { }

  productData:any;
  products :any;


  ngOnInit() {

    // this._crudService.getData().subscribe(res=>{
    //   console.log(res);

    // })

    this._crudService.prodcut()
    .subscribe(productData => this.products = productData)
    console.log(`${this.productData}`);
  }

  Edits(){
    console.log("Edit this data..");
    alert("Edit this data..");

  }

  Dlete(){
    console.log("Edit this data..");
    alert("Delete data..");
  }
}
