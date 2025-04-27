import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  duties: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Fanset International',
      position: 'Sales and Marketing Officer',
      duration: 'November 2023 - Present',
      location: 'Harare, Zimbabwe',
      duties: [
        'Generating new business and increasing sales',
        'Market Research',
        'Personal Selling',
        'Brand Management',
        'Tender application and submissions'
      ]
    },
    {
      company: 'EcoCash Holdings',
      position: 'Sales Team Leader',
      duration: 'October 2022 - October 2023',
      location: 'Gweru',
      duties: [
        'Acquisition of new business',
        'Sold company products in alignment with targets',
        'Trade channel visits and customer query handling',
        'Channel partner scouting and training',
        'Market analysis and competitor tracking'
      ]
    },
    {
      company: 'NetOne Cellular Private Limited',
      position: 'Brand Ambassador',
      duration: 'November 2019 - August 2021',
      location: 'Gweru, Midlands, Zimbabwe',
      duties: [
        'Selling Netone products',
        'Customer registration on ONE MONEY',
        'Customer query arbitration',
        'Market activations and event marketing'
      ]
    }
  ];
}
