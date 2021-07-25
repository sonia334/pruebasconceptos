import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PruebasConceptos';
public navbarvisible:boolean
constructor(){
  this.navbarvisible=false
}
  navbar(event:any){
    console.log('holaaaa')
    this.navbarvisible=true;

  }
}
