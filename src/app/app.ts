import { CommonModule } from '@angular/common';
import { HtmlTagDefinition } from '@angular/compiler';
import { Component } from '@angular/core';
import { console } from 'inspector';

@Component({
  imports: [CommonModule],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  images: string[] = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg"
  ]
  isPopupActive: boolean = false;

  openPopup() {
    this.isPopupActive = !this.isPopupActive;
    document.querySelector(".popup")?.classList.add("active");
    setTimeout(() => {
      document.querySelector(".popup")?.classList.add("show");
    }, 1);
  }
  closePopup() {
    document.querySelector(".popup")?.classList.remove("show");
    setTimeout(() => {
      document.querySelector(".popup")?.classList.remove("active");
    }, 501);
  }
  ignore() {
    
  }
}
