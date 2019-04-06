import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { IonicModule } from '@ionic/angular';

import { AddlaPage } from './addla.page';

const routes: Routes = [
    {
        path: '',
        component: AddlaPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
        NativeStorage,
        RouterModule.forChild(routes)
    ],
    declarations: [AddlaPage]
})
export class AddlaPageModule { }
