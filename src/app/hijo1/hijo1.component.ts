import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.scss']
})
export class Hijo1Component implements OnInit {

  public output:string='';
   @Output() evento:EventEmitter<string>
  constructor() { 
    this.evento=new EventEmitter()
  }
  
  ngOnInit(): void {
    
  }

capturaEvento(){
  console.log(this.output)
  this.evento.emit(this.output)
}
}
