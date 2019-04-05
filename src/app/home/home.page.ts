import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html'
})
export class HomePage {

    public locationAlarms = [
        {
            destination: 'Hyderabad',
            lat: '12.4456545',
            lon: '14.5656665',
            travelFrom: 'Pune'
        }, {
            destination: 'Hyderabad',
            lat: '12.4456545',
            lon: '14.5656665',
            travelFrom: 'Pune'
        }, {
            destination: 'Hyderabad',
            lat: '12.4456545',
            lon: '14.5656665',
            travelFrom: 'Pune'
        }
    ];

}
