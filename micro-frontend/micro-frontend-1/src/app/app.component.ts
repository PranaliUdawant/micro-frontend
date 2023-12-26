import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'micro-frontend-1';
  constructor(private router: Router) {}

  onCountryListClick() {
    console.log('Country List link clicked!');
    this.router.navigate(['/countryList']);
  }
  onHomeClick() {
    console.log('Home link clicked!');
  }
}
