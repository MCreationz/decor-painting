import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('slideStatus', [
      state('inactive', style({ color: '#1c1d22' })),
      state('active', style({ color: '#202640' })),

      transition('* => active', [
        animate('2s', keyframes([
          style({ color: '#1E3088', offset: 0}),
          style({ color: '#1E3088', offset: 0.8}),
          style({ color: '#1E3088', offset: 1.0})
        ])),
      ]),
      transition('* => inactive', [
        animate('2s', keyframes([
          style({ color: '#1E3088', offset: 0}),
          style({ color: '#1E3088', offset: 0.2}),
          style({ color: '#1F253B', offset: 1.0})
        ]))
      ]),

      transition('* => active', [
        animate('2s', keyframes([
          style({ color: '#1E3088' }),
          style({ color: '#1E3088' }),
          style({ color: '#1E3088' })
        ]))
      ]),
    ]),
     trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('5s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('5s', style({ opacity: 0 }))
      ])
    ]),
     trigger('flyInOut', [
	    state('in', style({ transform: 'translateX(0)' })),
	    transition('void => *', [
	      style({ transform: 'translateX(-100%)' }),
	      animate(500)
	    ]),
	    transition('* => void', [
	      animate(500, style({ transform: 'translateX(100%)' }))
	    ])
  	]),
  	trigger('button-animate', [
	  transition(':enter', [
	    style({ opacity: 0 }),
	    animate('.9s', style({ opacity: 1 })),
	  ]),
	]),
  ]
})
export class AppComponent {
 	title = 'decor-painting';

	isOpen = true;
    status: 'active' | 'inactive' = 'inactive';
  	isShown = false;
 	$(document).ready(function(){
  		 this.isOpen = !this.isOpen;
        if (this.status === 'active') {
           this.status = 'inactive';
        } else {
         this.status = 'active';
        }
        this.isShown = !this.isShown;
  	});
  	constructor(){
  	}
  
}
