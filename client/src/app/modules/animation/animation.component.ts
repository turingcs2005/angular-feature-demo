import { Component, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

const fadeInOut = trigger('fadeInOut', [
  state('open',
  style({
    opacity: 1,
  })),

  state('close',
  style({
    opacity: 0
  })),

  transition('open => close', [animate('1s ease-out')]),
  transition('close => open', [animate('1s ease-in')]),
]);

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [fadeInOut]
})
export class AnimationComponent {
  isShown = false;

  fadeInOut(): void {
    this.isShown = !this.isShown;
  }

}
