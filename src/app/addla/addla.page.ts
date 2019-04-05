import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-addla',
    templateUrl: './addla.page.html',
})
export class AddlaPage implements OnInit {

    headerTitle: string = "Add Location Alarm";
    errorFormText: string = "Please enter all fields to add location alarm.";

    locationAlarm: FormGroup;

    validationError: boolean;

    constructor(public formBuilder: FormBuilder) {
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
        if (this.locationAlarm.status === "VALID") {

            this.validationError = true;
        } else {
            this.validationError = false;
        }
    }

}
