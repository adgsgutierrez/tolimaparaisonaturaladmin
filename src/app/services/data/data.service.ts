import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionChanges, collectionData, doc, docData, getDocs, query, where } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private firestore: Firestore = inject(Firestore);

  constructor() { }

  public getData( collectionName: string ): Observable<any[]> {
    // Consultar en firebase y retornar un observable con los datos de la colection junto con el id
    const itemCollection: any = collection(this.firestore, collectionName);
    return collectionData(itemCollection);
  }

  public findData( collectionName: string , field: string , value: any ): any {
    // Consultar en firebase y retornar un observable con los datos de la colection junto con el id
    const queryCollection: any = query( collection(this.firestore, collectionName), where(field , '==' , value) );
    return collectionChanges(queryCollection)
    .pipe(
      map( (items: any) => {
        return items.map((item: any) => {
          const data = item.doc.data();
          const id = item.doc.id
          return { id , ...data };
        })
      })
    );
  }
}
