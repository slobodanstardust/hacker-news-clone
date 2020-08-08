import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule ({
    declarations: [
        NavigationComponent,
        PageNotFoundComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    exports: [
        NavigationComponent,
        PageNotFoundComponent
    ]
})

export class CoreModule { }
