import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  title = 'Leeroy Nendanga';
  subtitle = 'Award-Winning Academic | Sales & Marketing Strategist | Digital Marketing Expert';
  location = 'Harare, Zimbabwe';
}
