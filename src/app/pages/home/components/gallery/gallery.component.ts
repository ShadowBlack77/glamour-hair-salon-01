import { AfterViewInit, Component, ElementRef, Input, ViewChild, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GalleryComponent {
  numOfSlides: number = 1;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreen(event.target.innerWidth);
  }


  checkScreen(width: number): void {
    if (width <= 425) {
      this.numOfSlides = 1;
    } else if (width >= 425 && width < 1024) {
      this.numOfSlides = 2;
    } else {
      this.numOfSlides = 3;
    }
  }
}
