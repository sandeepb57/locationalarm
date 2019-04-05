import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    public appPages = [
        {
            title: 'Past LA\'s',
            url: '/home',
            icon: 'briefcase'
        },
        {
            title: 'Settings',
            url: '/home',
            icon: 'settings'
        },
        {
            title: 'Rate us',
            url: '/home',
            icon: 'star'
        }
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private sqlite: SQLite
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });

        this.createLocalDb();
    }

    createLocalDb() {
        this.sqlite.create({
            name: 'locationalarm.db',
            location: 'default'
        }).then((db: SQLiteObject) => {
            db.executeSql('CREATE TABLE LOCATIONALARMS(laid INTEGER PRIMARY KEY AUTOINCREMENT, origin CHAR(50) NOT NULL, destination CHAR(50) NOT NULL, latitude REAL, longitude REAL, wakeupkm INT, joudate TEXT)', []).then((r) => console.log('Executed SQL', r)).catch(e => console.log(e, 'error inside'));
        }).catch(e => console.log(e, 'error inside'));
    }
}
