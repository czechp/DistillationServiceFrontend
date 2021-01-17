import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { fade } from 'src/app/utilities/animations';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  animations: [
    fade
  ]
})
export class TitleComponent implements OnInit, OnChanges {
  public isError = false;

  @Input()
  public title: String = '';

  @Input()
  public statement: String = '';


  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    const firstSign = this.statement[0];
    this.isError = firstSign ==='B' || firstSign === 'b';
    setTimeout(
      () => this.statement = '',
      3000
    )
  }

  ngOnInit(): void {
  }

}
