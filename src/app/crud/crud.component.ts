import { CrudService } from './../crud.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
  providers:[CrudService]
})

export class CrudComponent implements OnInit {

  constructor(private apiservie:ApiService) { }

  productData:any;
  products :any;


  ngOnInit() {

    this.apiservie.getMethod()
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
