import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  institution: string;
  degree: string;
  field: string;
  duration: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education: Education[] = [
    {
      institution: 'Marketers Association of Zimbabwe',
      degree: 'Professional Certificate',
      field: 'Customer Experience Management',
      duration: 'March 2024 - September 2024'
    },
    {
      institution: 'Midlands State University',
      degree: 'Bachelor\'s degree',
      field: 'Marketing/Marketing Management',
      duration: 'August 2019 - June 2023'
    },
    {
      institution: 'Google pour les pros',
      degree: 'Certificate',
      field: 'Digital Marketing',
      duration: 'June 2022 - September 2022'
    },
    {
      institution: 'Marketers Association of Zimbabwe',
      degree: 'Professional Certificate',
      field: 'Digital Marketing',
      duration: 'January 2022 - August 2022'
    }
  ];
}
