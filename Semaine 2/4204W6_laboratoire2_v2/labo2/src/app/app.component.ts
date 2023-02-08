import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
//import { request } from 'http';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Deux variables devront être ajoutées ici
  result : boolean = false;
  artist : string = "";
  limit : string = "";
  similarArtists : string[] = [];

  // Le constructeur devra être ajouté ici
  constructor(public http : HttpClient){}

  async searchArtist():Promise<void>{
    this.result = true;
	
	// La requête HTTP devra être ajoutée ici
  let x = await lastValueFrom(this.http.get<any>("http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&limit=" + this.limit + "&artist=artist&api_key=e34ebf8561ba7c653a21d1d99a1a0070&format=json"))
  //console.log(x);

  //x.artist.name
  this.similarArtists = [];

  for(let artist of x.similarartists.artist)
  {
    console.log(artist);
    this.similarArtists.push(artist.name);
  }

  }

  newSearch():void{
    this.result = false;
  }
}
