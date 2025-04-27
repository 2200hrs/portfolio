import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactInfo = {
    phone: '0773 264 162 / 0719 264 162',
    email: 'leenendanga.ln@gmail.com',
    linkedin: 'www.linkedin.com/in/leeroy-nendanga'
  };

  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    // Handle form submission here
    console.log('Form submitted:', this.formData);
  }
}
