import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, collectionChanges, collectionData,  query, where } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import * as locationsJson from 'src/assets/data/locations.json';
import * as sitesJson from 'src/assets/data/details_locations.json';

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

  public loadData( collectionName: string , data: any ): any {
    // Cargar datos en firebase
    let colection = collection(this.firestore, collectionName);
    return addDoc(colection, data);
  }

  public loadLocations(): any {
    const locations: any[] = (locationsJson as any).default;
    console.log(locations);
    return Promise.all(
      locations.map((location: any) => {
        return this.loadData('cardsInformation', location);
      } )
    );
  }

  public loadsites(): any {
    const _sitesJson: any[] = (sitesJson as any).default;
    console.log(_sitesJson);
    return Promise.all(
      _sitesJson.map((site: any) => {
        return this.loadData('idDetail', site);
      } )
    );
  }
}
