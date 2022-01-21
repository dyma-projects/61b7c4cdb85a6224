import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input()
  compteur?: number;

  @Output()
  private compteurChange: EventEmitter<number> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  public incrementation(){
    this.compteur++;
    this.compteurChange.emit(this.compteur)
  }

  public decrementation(){
    this.compteur--;
    this.compteurChange.emit(this.compteur)
  }

}
