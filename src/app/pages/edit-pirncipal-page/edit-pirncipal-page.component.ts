import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-pirncipal-page',
  templateUrl: './edit-pirncipal-page.component.html',
  styleUrls: ['./edit-pirncipal-page.component.scss']
})
export class EditPirncipalPageComponent implements OnInit{

  
  private file: any;
  private text: string = "";
  private reader = new FileReader();
  
  public textImage: string = "Descubre la magia del Tolima ¡te esperamos, ven y visitanos!";
  public textTitle: string = "Encuentra la riqueza turística del Tolima en un solo lugar.";
  public textDescription: string = "Descripción de la oferta de valor e información que los usuarios podrán encontrar en la página. Lorem ipsum dolor sit amet consectetur. Proin sagittis aliquam gravida faucibus eget dui leo. Diam arcu consequat vel nisi. Vel dui leo sed morbi amet placerat vitae. Et massa nunc tellus ultricies feugiat. Molestie malesuada est vitae mauris morbi gravida morbi. Ac faucibus auctor mi elit ipsum massa. Egestas senectus sagittis amet nullam dolor est quis sapien.";
  public textTitleCard: string = "Explora el corazón turístico de Colombia";
  
  ngOnInit() {
    // const imagenFondo = localStorage.getItem('imagenFondo');
    // if (imagenFondo) {
    //   const divBanner = document.querySelector('.img-banner') as HTMLElement;
    //   divBanner.style.backgroundImage = `url(${imagenFondo})`;
    // }
  }

  getTarget(event: any) {
    if (event.target.files != null) {
      console.log("imagen");
      
      this.file = event.target.files[0];
    } else {
      console.log("texto");
      this.text = event.target.value;
    }
  }
  
  changeImage() {
    this.reader.onload = (e: any) => {
      const divBanner = document.querySelector('.img-banner') as HTMLElement;
      divBanner.style.backgroundImage = `url(${e.target.result})`;

      // Guardar la imagen seleccionada en el almacenamiento local
      localStorage.setItem('imagenFondo', e.target.result);
    };
    this.reader.readAsDataURL(this.file);
  }
  
  public changeText(input: number) {
    switch (input) {
      case 1:
        this.textImage = this.text;
        break;
      case 2:
        this.textTitle = this.text;
        break;
      case 3:
        this.textDescription = this.text;
        break;
      case 4:
        this.textTitleCard = this.text;
        break;
    
      default:
        break;
    }
  }
}
