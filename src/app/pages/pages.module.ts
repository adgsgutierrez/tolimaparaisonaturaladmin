import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditPirncipalPageComponent } from './edit-pirncipal-page/edit-pirncipal-page.component';
import { LiteLoadDataComponent } from './lite-load-data/lite-load-data.component';
import { environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    EditPirncipalPageComponent,
    LiteLoadDataComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
})
export class PagesModule { }
