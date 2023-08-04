import { Component, inject } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { Utils } from 'src/app/utils/utils';


@Component({
  selector: 'app-lite-load-data',
  templateUrl: './lite-load-data.component.html',
  styleUrls: ['./lite-load-data.component.scss'],
})
export class LiteLoadDataComponent {
  
    public listMunicipios: {description: string, id: string, image: string[], route: '/detail', title: string}[] = [];
    public municipioSelected:{ description: string; id: string; image: string[]; route: '/detail'; title: string; } | any = {};
    public cardsMunicipio: {
        card: '',
        title: '',
        id: '',
        description: '',
        images: [],
        details: []
    }[] = [];
    public selectedValue: any;


    constructor(private dataFirebase: DataService , private storage: StorageService) { }

    ngOnInit(): void {
      this.dataFirebase.getData('cardsInformation').subscribe((data: any) => { this.listMunicipios = data; });
    }

    uploadImage(event: any) {
      console.log(event);
      const _name = Utils.transformStringToClear( this.municipioSelected?.title ) || '';
      this.storage.uploadFiles(event.target.files, _name).then((urls: string[]) => {
        console.log(urls);
      });
    }


    newMunicipio() {
      this.municipioSelected = { 
        description: '',
         id: '',
         image: [],
         route: '/detail',
         title: '',
       } 
    }

    selectMunicipio(event: any) {
      this.municipioSelected = this.listMunicipios.find((municipio) => ('' + municipio.id) === this.selectedValue);
      this.dataFirebase.findData('idDetail', 'card', parseInt(this.selectedValue))
        .subscribe((data: any) => { this.cardsMunicipio = data.reverse(); });
    }

    loadstaticinfo() {  
      this.dataFirebase.loadsites().then((data: any) => { console.log(data); });
    }
}
