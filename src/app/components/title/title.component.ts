import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input()
  public title: String = '';

  @Input()
  public statement: String = '';


  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(
      () => this.statement = '',
      3000
    )
  }

  ngOnInit(): void {
  }

}
