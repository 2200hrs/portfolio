import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  summary = `Meet Leeroy Nendanga, a result-oriented, proactive, and innovative Marketing Professional,
  skilled in sales management, customer relationship management, market forecasting, and business development.
  Proven ability to implement strategic marketing initiatives, optimize sales growth, and enhance customer
  acquisition and retention.`;

  awards = [
    '6 Academic awards for being the best graduating student in 2023 at The Midlands State University',
    'Best student in the Customer Experience Management cohort 2024'
  ];
}
