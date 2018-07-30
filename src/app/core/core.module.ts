import { NgModule } from '@angular/core';

import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireStorageModule} from 'angularfire2/storage';

import { AuthModule } from '../auth/auth.module';
import { AuthService } from "./auth.service";


@NgModule({
  imports: [
    AuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  declarations: []
})
export class CoreModule { }
