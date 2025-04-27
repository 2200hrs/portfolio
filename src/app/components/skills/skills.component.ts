import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    'Business Strategy',
    'Market Research',
    'Competitive Analysis',
    'Digital Marketing',
    'Customer Experience Management',
    'Sales Management',
    'Brand Management',
    'Market Forecasting',
    'Business Development'
  ];

  certifications = [
    'Digital Marketing',
    'Security Awareness',
    'Fundamentals of digital marketing',
    'Customer Experience Management'
  ];
}
