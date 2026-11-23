import { CommonModule } from '@angular/common';
import { HtmlTagDefinition } from '@angular/compiler';
import { Component } from '@angular/core';

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
  popup!: HTMLElement;
  imageEle!: HTMLImageElement;
  globalIndex: number = 0;

  openPopup(popup_html: HTMLElement, image: HTMLImageElement, popupImage: HTMLImageElement, id: number) {
    this.popup = popup_html;
    this.imageEle = image;
    this.globalIndex = id;
    this.globalIndex = Number(image.getAttribute("data-index"));
    // this.updateImg(image, popupImage);
    popupImage.src = this.imageEle.src;
    popup_html?.classList.add("active");
    setTimeout(() => {
      popup_html?.classList.add("show");
    }, 1);
  }
  closePopup() {
    document.querySelector(".popup")?.classList.remove("show");
    setTimeout(() => {
      document.querySelector(".popup")?.classList.remove("active");
      this.globalIndex = 0;
    }, 501);
  }
  stopPropagation(e: Event) {
    e.stopPropagation();
  }
  // updateImg(image: HTMLImageElement, popupImage: HTMLImageElement) {
  //   popupImage.src = image.src;
  // }

  nextImage(image: HTMLImageElement, popupImage: HTMLImageElement) {
    let newSrc: string;
    if (this.globalIndex >= this.images.length - 1) {
      this.globalIndex = 0;
      popupImage.src = `images/${this.images[this.globalIndex]}`;
      return;
    }
    newSrc= `images/${this.images[++this.globalIndex]}`
    popupImage.src = newSrc;

  }
  prevImage(image: HTMLImageElement, popupImage: HTMLImageElement) {
    if (this.globalIndex <= 0) {
      this.globalIndex = this.images.length;
    }
    let newSrc: string = `images/${this.images[this.globalIndex - 1]}`
    this.globalIndex--;
    popupImage.src = newSrc;
  }
  changeImage(index: number, image: HTMLImageElement) {
    this.globalIndex = index;
    let newSrc: string = `images/${this.images[this.globalIndex]}`;
    image.src = newSrc;
  }
}
