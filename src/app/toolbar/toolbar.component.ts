import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
 // @Input() title: string = '';

 @Input() rating: number = 0;

 getFullStars(): number[] {
   const fullStars = Math.floor(this.rating);
   return Array(fullStars).fill(1);
 }

 hasHalfStar(): boolean {
   return this.rating % 1 !== 0;
 }
}
