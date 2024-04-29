import { Component } from '@angular/core';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PriceComponent } from './components/price/price.component';
import { CommentsComponent } from './components/comments/comments.component';
import { GetInTouchComponent } from './components/get-in-touch/get-in-touch.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MapComponent } from './components/map/map.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainHeaderComponent,
    ServicesComponent,
    AboutUsComponent,
    GalleryComponent,
    PriceComponent,
    CommentsComponent,
    GetInTouchComponent,
    MapComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
