import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  public valeur: string;

  @ViewChild('exerciceInput', {static: true})
  public element!: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit() {
  }

  public showInput() {
    console.log(this.element.nativeElement.value)
    this.valeur = this.element.nativeElement.value;
  }

}
