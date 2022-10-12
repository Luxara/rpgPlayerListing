import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Player } from '../Player';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl='http://localhost:5000/player'

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(this.apiUrl)
  }

  addPlayer(player:Player): Observable<Player>{
    return this.http.post<Player>(this.apiUrl, player, httpOptions);
  }

  deletePlayer(player:Player):Observable<Player>{
    const url = `${this.apiUrl}/${player.id}`;
    return this.http.delete<Player>(url);
  }
}
