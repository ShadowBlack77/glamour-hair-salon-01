import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss',
  animations: [
    // Price Card One
    trigger('priceCardOneAnimations', [
      state('start', style({
        opacity: 0,
        top: 50
      })),
      state('end', style({
        opacity: 1,
        top: 0
      })),
      transition('start => end', [
        animate('.7s ease-in-out')
      ]),
      transition('end => start', [
        animate('.7s ease-in-out')
      ])
    ]),

    // Price Card Two
    trigger('priceCardTwoAnimations', [
      state('start', style({
        opacity: 0,
        top: 50
      })),
      state('end', style({
        opacity: 1,
        top: 0
      })),
      transition('start => end', [
        animate('.7s .5s ease-in-out')
      ]),
      transition('end => start', [
        animate('.7s .5s ease-in-out')
      ])
    ]),

    // Price Card Three
    trigger('priceCardThreeAnimations', [
      state('start', style({
        opacity: 0,
        top: 50
      })),
      state('end', style({
        opacity: 1,
        top: 0
      })),
      transition('start => end', [
        animate('.7s 1s ease-in-out')
      ]),
      transition('end => start', [
        animate('.7s 1s ease-in-out')
      ])
    ])
  ]
})
export class PriceComponent {
  @ViewChild('priceCardsHeader') priceCardsHeader!: ElementRef;

  priceCardOneAnimationState: string = 'start';
  priceCardTwoAnimationState: string = 'start';
  priceCardThreeAnimationState: string = 'start';

  checkIfTheCardsElementsAreInViewport() {
    const element = this.priceCardsHeader.nativeElement;
    const rect = element.getBoundingClientRect();

    const isInViewport = 
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    if (isInViewport) {
      this.priceCardOneAnimationState = 'end';
      this.priceCardTwoAnimationState = 'end';
      this.priceCardThreeAnimationState = 'end';
    }
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.checkIfTheCardsElementsAreInViewport();
  }

  @HostListener('window:load')
  onLoad(): void {
    this.checkIfTheCardsElementsAreInViewport();
  }
}
