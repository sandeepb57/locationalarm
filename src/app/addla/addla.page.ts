import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
    selector: 'app-addla',
    templateUrl: './addla.page.html',
})
export class AddlaPage implements OnInit {

    headerTitle = 'Add Location Alarm';
    errorFormText = 'Please enter all fields to add location alarm.';

    locationAlarm: FormGroup;

    validationError: boolean;

    constructor(public formBuilder: FormBuilder, private nativeStorage: NativeStorage) {
        this.locationAlarm = formBuilder.group({
            origin: ['', Validators.required],
            destination: ['', Validators.required],
            latitude: ['', Validators.required],
            longitude: ['', Validators.required],
            wakeDistance: ['', Validators.required],
            dateOfJourney: ['', Validators.required]
        });
        this.validationError = true;
    }

    ngOnInit() { }

    submitLocationAlarm() {
        console.log(this.locationAlarm.value, this.locationAlarm.status);
        if (this.locationAlarm.status === 'VALID') {
            this.nativeStorage.getItem('las')
                .then(
                    data => console.log(data),
                    error => console.error(error)
                );
            this.nativeStorage.setItem('las', { property: 'value', anotherProperty: 'anotherValue' })
                .then(
                    () => console.log('Stored item!'),
                    error => console.error('Error storing item', error)
                );

            this.validationError = true;
        } else {
            this.validationError = false;
        }
    }

}
