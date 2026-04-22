import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private router: Router, private navCtrl: NavController) {}

  goToAboutPage() {
    //this.router.navigate(['/about']);
    this.navCtrl.navigateBack('/about');
  }

}
