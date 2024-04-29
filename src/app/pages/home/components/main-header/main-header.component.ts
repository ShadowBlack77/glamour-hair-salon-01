import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../components/header/header.component';
import { HeaderDescComponent } from '../../../../components/header-desc/header-desc.component';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [
    HeaderComponent,
    HeaderDescComponent
  ],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeaderComponent {

}
