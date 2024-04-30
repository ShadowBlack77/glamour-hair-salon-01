import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  animations: [
    // Service One Animation
    trigger('serviceOneAnimations', [
      state('start', style({
        opacity: 0,
        top: 50,
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

    // Service Two Animation
    trigger('serviceTwoAnimations', [
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

    // Service Three Animation
    trigger('serviceThreeAnimations', [
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
export class ServicesComponent implements AfterViewInit {
  @ViewChild('serviceHeader') serviceHeader!: ElementRef;

  serviceOneAnimationState: string = 'start';
  serviceTwoAnimationState: string = 'start';
  serviceThreeAnimationState: string = 'start';

  checkIfTheServicesAreInViewport() {
    const element = this.serviceHeader.nativeElement;
    const rect = element.getBoundingClientRect();

    const isInViewport = 
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    if (isInViewport) {
      this.serviceOneAnimationState = 'end';
      this.serviceTwoAnimationState = 'end';
      this.serviceThreeAnimationState = 'end';
    }
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.checkIfTheServicesAreInViewport();
  }

  ngAfterViewInit(): void {
    this.checkIfTheServicesAreInViewport();
  }
}
