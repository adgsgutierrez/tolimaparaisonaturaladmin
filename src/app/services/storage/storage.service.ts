import { Injectable, inject } from '@angular/core';
import { Storage, ref, uploadBytesResumable } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storage: Storage = inject(Storage);

  constructor() { }

  upload(event: any, name: string): any {
    const file = event.target.files[0];
    const storageRef = ref(this.storage, name);
    return uploadBytesResumable(storageRef, file);
  }
}
