import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.scss']
})
export class Hijo1Component implements OnInit {

  public output:string='';
  public visible:number;
   @Output() evento:EventEmitter<string>
  constructor(private router:Router) { 
    this.evento=new EventEmitter()
    this.visible=0;
  }
  
  ngOnInit(): void {
    
  }

capturaEvento(){
  console.log(this.output)
  this.evento.emit(this.output)
}

}
