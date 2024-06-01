import { Component, Input, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
})
export class PickupCallCardComponent  implements OnInit {

 @Input() hasHeader: Boolean = false;
 @Input() hasFooter : Boolean = false;
 @Input() status: String = 'pending';
 @Input() updatedAt: String = '2020-10-10';
 @Input() createdAt: String = 'Calle 123';
  @Input() notes: String = 'Calle 123';

  constructor() { }

  ngOnInit() {}

}
