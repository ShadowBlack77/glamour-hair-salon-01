import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
  animations: [
    trigger('aboutAnimation', [
      state('start', style({
        opacity: 0
      })),
      state('end', style({
        opacity: 1
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
export class AboutUsComponent implements AfterViewInit {
  @ViewChild('aboutElement') aboutElement!: ElementRef;

  aboutAnimationState: string = 'start';

  checkIfTheAboutIsInViewport(responsive: number) {
    const element = this.aboutElement.nativeElement;
    const rect = element.getBoundingClientRect();

    if (responsive > 1192) {
      const isInViewport = 
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);

      if (isInViewport) {
        this.aboutAnimationState = 'end';
      }
    } else if (responsive <= 1192 && responsive > 320) {
      const isInViewport = 
      rect.top >= -500 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight + 300 || document.documentElement.clientHeight + 300);

      if (isInViewport) {
        this.aboutAnimationState = 'end';
      }
    } else {
      const isInViewport = 
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight + 600 || document.documentElement.clientHeight + 600) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);

      if (isInViewport) {
        this.aboutAnimationState = 'end';
      }
    }
  }

  @HostListener('window:scroll')
  onScroll(event: any): void {
    this.checkIfTheAboutIsInViewport(window.innerWidth);
  }

  ngAfterViewInit(): void {
    this.checkIfTheAboutIsInViewport(window.innerWidth);
  }

  // ngOnInit(): void {
  //   this.checkIfTheAboutIsInViewport(event.target.innerWidth);
  // }
}
