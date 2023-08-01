import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-lite-load-data',
  templateUrl: './lite-load-data.component.html',
  styleUrls: ['./lite-load-data.component.scss']
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

    constructor(private dataFirebase: DataService) { }

    ngOnInit(): void {
      this.dataFirebase.getData('cardsInformation').subscribe((data: any) => { this.listMunicipios = data; });
    }

    uploadImage(event: any) {
      this.municipioSelected!.description = Utils.transformStringToClear( this.municipioSelected?.title ) || '';
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

}
