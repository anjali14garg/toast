import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
 import {Toast} from 'ionic-native';
declare var window: any;
 
@Component({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
 
    constructor(private navCtrl: NavController, private platform: Platform) { }
 
    showToast(message, position) {
        this.platform.ready().then(() => {
            window.plugins.toast.show(message, "short", position);
        });
    }
 
}
