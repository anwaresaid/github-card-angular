import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../card/card.component'; // Import the card component
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent, CommonModule], // Add CardModule to imports
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  authService = inject(AuthService);
  router = inject(Router);

  onLogout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
  cardDataArray = [
    {
      title: 'Dynamic Card Title 1',
      image:
        'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg',
      content:
        'This content is dynamically passed from the parent component for card 1.',
      gradientColor: 'rgba(0, 250, 0, 0.2)',
    },
    {
      title: 'Dynamic Card Title 1',
      image:
        'https://media.istockphoto.com/id/693339470/photo/ganesha.webp?s=2048x2048&w=is&k=20&c=39ZLSbHabiYrTGZiWAo83MBI-pbFffAMM6Ix3VNemg4=',
      content:
        'This content is dynamically passed from the parent component for card 1.',
      gradientColor: 'rgba(0, 250, 0, 0.2)',
    },
    {
      title: 'Dynamic Card Title 2',
      image:
        'https://media.istockphoto.com/id/588223710/photo/diwali-oil-lamp.jpg?s=2048x2048&w=is&k=20&c=TjbcdE6m5dMMfYXjFwB5VFo1v7TsvNTfuW2xRlaMrX0=',
      content:
        'This content is dynamically passed from the parent component for card 2.',
      gradientColor: 'rgba(255, 0, 0, 0.3)',
    },
    {
      title: 'Dynamic Card Title 2',
      image:
        'https://media.istockphoto.com/id/1652717832/photo/happy-young-indian-couple-having-fun-in-new-home-playing-with-boxes-real-estate-residential.jpg?s=2048x2048&w=is&k=20&c=20-6SngRJkpOjCOCak9NUzlfQACdP4vmlXg80AcMnf8=',
      content:
        'This content is dynamically passed from the parent component for card 2.',
      gradientColor: 'rgba(255, 0, 0, 0.3)',
    },
    {
      title: 'Dynamic Card Title 3',
      image:
        'https://cdn.pixabay.com/photo/2016/10/11/14/30/love-1731755_1280.jpg',
      content:
        'This content is dynamically passed from the parent component for card 3.',
      gradientColor: 'rgba(0, 0, 250, 0.4)',
    },
    {
      title: 'Dynamic Card Title 3',
      image:
        'https://cdn.pixabay.com/photo/2016/10/11/14/30/love-1731755_1280.jpg',
      content:
        'This content is dynamically passed from the parent component for card 3.',
      gradientColor: 'rgba(0, 0, 250, 0.4)',
    },
    {
      title: 'Dynamic Card Title 3',
      image:
        'https://cdn.pixabay.com/photo/2020/06/13/17/51/milky-way-5295160_960_720.jpg',
      content:
        'This content is dynamically passed from the parent component for card 3.',
      gradientColor: 'rgba(0, 0, 250, 0.4)',
    },
    {
      title: 'Dynamic Card Title 4',
      image:
        'https://cdn.pixabay.com/photo/2018/06/27/17/48/fantasy-3502188_960_720.jpg',
      content:
        'This content is dynamically passed from the parent component for card 4.',
      gradientColor: 'rgba(250, 250, 0, 0.5)',
    },
    {
      title: 'Dynamic Card Title 4',
      image:
        'https://cdn.pixabay.com/photo/2016/08/27/14/38/mountains-1624284_960_720.jpg',
      content:
        'This content is dynamically passed from the parent component for card 4.',
      gradientColor: 'rgba(250, 250, 0, 0.5)',
    },
    // Add more card data objects as needed
  ];
}
