import { Md5 } from 'ts-md5';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  private publicKey = "44d132dc3d09ac9cc343e7412393c01b";
  private privateKey = "02335375f594da58bc01856d5178b1244cb44815";
  constructor(private http:HttpClient) { }

  generateHash(ts: any){
    const hash = Md5.hashStr(ts+this.privateKey+this.publicKey).toString();
    console.log(hash);
    return hash;
  }

  getCharacters(name: string){
    const ts = new Date().getTime();
    const hash = this.generateHash(ts);
    return this.http.get(`https://gateway.marvel.com/v1/public/characters?name=${name}&ts=${ts}&apikey=${this.publicKey}&hash=${hash}`);
  }
}
