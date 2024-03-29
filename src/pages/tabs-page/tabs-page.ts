import { FirebaseService } from './../../providers/firebase-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs-page',
  templateUrl: 'tabs-page.html',
})
export class TabsPage {
  tab1 = 'HomePage';
  tab2 = 'SharedPage';
  tab3 = 'ProfilePage';
  invitationCount = 0;

  constructor(public navCtrl: NavController, public firebaseService: FirebaseService) { }

  ionViewDidLoad() {
    this.firebaseService.authState.subscribe(user => {
      if (user) {
        this.firebaseService.getUserInvitations().subscribe(data => {
          this.invitationCount = data.length;
        }, err => {
          console.log('error: ', err);
        });
      }
    })
  }

}
