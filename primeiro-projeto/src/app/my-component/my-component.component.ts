import { Component, Input, OnInit } from '@angular/core';
import { ProductsServiceService } from '../services/products-service.service';
import { Observable, map } from 'rxjs';


interface Cat{
  "id": string,
  "width": string,
  "height": string,
  "url":string,
}


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.scss'
})
export class MyComponentComponent implements OnInit{

  productList$: Observable<Cat[]> = new Observable<Cat[]>();

  

  constructor(private productService: ProductsServiceService) { }


  ngOnInit(): void {
    this.productList$ = this.productService.fetchData().pipe(
      map(response => {
        console.log(response)
        return response;
      })
    )
  }

  handleEvent($event: string){
    console.log("Evento aconteceu")
    console.log($event)
  }
  


}
