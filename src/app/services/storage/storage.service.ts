import { Injectable, inject } from '@angular/core';
import { Storage as _Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly storage: _Storage = inject(_Storage);
  private urls: string [] = [];

  constructor() { }

  private upload(file: any, name: string): Promise<any> | any {
    const storageRef = ref(this.storage, name);
    return uploadBytesResumable(storageRef, file);
  }

  public async uploadFiles(files: any[], nameRoute: string , index: number = 0): Promise<string[]> {
    if (index == 0) this.urls = [];
    const file = files[index];
    const name = `${nameRoute}/${file.name}`;
    const snapshot = await this.upload(file, name);
    const url = await getDownloadURL(snapshot.ref);
    this.urls.push(url);
    if (index + 1 < files.length) {
      this.uploadFiles(files, nameRoute, index + 1);
    }
    return this.urls;
  }
}
