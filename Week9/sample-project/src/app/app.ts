import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  title = 'This is a sample project';
  img_url = 'https://flag-shop.ca/wp-content/uploads/2024/11/img-flag-shop-flags-of-the-world-canada-flag-1-2.webp';
  numColSpan = 2;
  blueClass = 'red';
  bgColor = 'green';
  hasError = true;
  studentNames = ['Jheteas', 'Michael', 'Bilal', 'Staphanie', 'Renan', 'Malek'];
  currentTab = 33;

  showPeaceBridge(){
    this.img_url = 'https://www.creb.com/-/media/Public/CREBcom/News/CREBNow/2019/September/SocialPeaceBridgeCody1.jpg';
  }

  showTower(){
    this.img_url = 'https://www.vmcdn.ca/f/files/torontotoday/images/tourism/12-05-2024-goodmorningtoronto-af-02.jpg;w=960';
  }

  showTab(tab: number){
    this.currentTab = tab;
  }
}
