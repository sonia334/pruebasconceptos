import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PruebasConceptos';
public aimprimirenelpadre:string
constructor(){
  this.aimprimirenelpadre=''
}
  imprimeenpadre(event:any){
    console.log('holaaaa')
    this.aimprimirenelpadre=event;

  }
}
