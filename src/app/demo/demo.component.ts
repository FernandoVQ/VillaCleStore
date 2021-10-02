import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  paises = ['Perú', 'Chile', 'Colombia']
  
  constructor() { }

  ngOnInit(): void {
  }

  addItem (){
    this.paises.push('aea')
  }

  dropItem(index:number){
    this.paises.splice(index,1)
  }

}
