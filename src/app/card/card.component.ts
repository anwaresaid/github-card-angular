import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class CardComponent {
  // ViewChild decorator to get a reference to the card element
  @ViewChild('card', { static: true }) cardRef!: ElementRef<HTMLDivElement>;
  // Input decorator to get the card data from the parent component
  @Input() cardData: {
    title: string;
    image: string;
    content: string;
    gradientColor: string;
  } = {
    title: '',
    image: '',
    content: '',
    gradientColor: 'rgba(0, 250, 0, 0.2)',
  };
  // Function to handle the mousemove event
  ngAfterViewInit() {
    // Add event listeners for mousemove and mouseleave events
    this.cardRef.nativeElement.addEventListener(
      'mousemove',
      this.handleMouseMove.bind(this)
    );
    this.cardRef.nativeElement.addEventListener(
      'mouseleave',
      this.resetCardStyle.bind(this)
    );
  }
  // Function to handle the mousemove event
  handleMouseMove(event: MouseEvent): void {
    // Get the card element's bounding rectangle
    const cardRect = this.cardRef.nativeElement.getBoundingClientRect();
    const mouseX = event.clientX - cardRect.left - cardRect.width / 2; // Distance from center
    const mouseY = event.clientY - cardRect.top - cardRect.height / 2; // Distance from center

    // Sensitivity factor for the tilting effect
    const factor = 20; // Decrease for more sensitivity

    const rotateX = (mouseY / factor).toFixed(2); // Rotate card along X-axis
    const rotateY = -(mouseX / factor).toFixed(2); // Rotate card along Y-axis

    this.cardRef.nativeElement.style.transform = ` rotateY(${rotateY}deg)`;

    // Existing gradient effect code
    const maxDistX = Math.max(mouseX, cardRect.width - mouseX);
    const maxDistY = Math.max(mouseY, cardRect.height - mouseY);
    const radius = Math.sqrt(maxDistX ** 2 + maxDistY ** 2);
    const gradientStyle = `radial-gradient(circle at ${
      mouseX + cardRect.width / 2
    }px ${mouseY + cardRect.height / 2}px, ${
      this.cardData.gradientColor
    } 0%, rgb(22, 27, 34) ${radius}px)`;
    this.cardRef.nativeElement.style.background = `rgb(22, 27, 34) ${gradientStyle}`;
  }
  // Function to reset the card style on mouseleave
  resetCardStyle(): void {
    this.cardRef.nativeElement.style.transform = 'rotateX(0) rotateY(0)';
    this.cardRef.nativeElement.style.background = 'rgb(22, 27, 34)';
  }
}
