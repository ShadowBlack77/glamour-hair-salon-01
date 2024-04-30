import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header-desc',
  standalone: true,
  imports: [],
  templateUrl: './header-desc.component.html',
  styleUrl: './header-desc.component.scss',
  animations: [
    trigger('headerDescAnimations', [
      state('start', style({
        opacity: 0,
        top: 150
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
    ])
  ]
})
export class HeaderDescComponent {
  @ViewChild('headerDesc') headerDesc!: ElementRef;

  animationState: string = 'start';

  checkIfElementIsInViewport(): void {
    const element = this.headerDesc.nativeElement;
    const rect = element.getBoundingClientRect();

    const isInViewport = 
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    
    if (isInViewport) {
      this.animationState = 'end';
    }
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.checkIfElementIsInViewport();
  }

  @HostListener('window:load')
  onLoad(): void {
    this.checkIfElementIsInViewport();
  }
}
