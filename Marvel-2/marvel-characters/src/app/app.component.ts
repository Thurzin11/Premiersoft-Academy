import { Component } from '@angular/core';
import { MarvelService } from '../services/marvel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'marvel-characters';
  nome: string = 'Pesquise';
  descricao:string = 'Descrição';
  thumbnail: string = '';

  constructor(private service: MarvelService) {}

  getCharacter(character: string){
    this.service.getCharacters(character).subscribe((response: any) => {
      console.log(response.data.results);
      const {name,description,thumbnail} = response.data.results[0];
      this.nome = name;
      this.descricao = description;
      this.thumbnail = thumbnail.path + '.' + thumbnail.extension;
    });
  }
}
