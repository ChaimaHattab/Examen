import { Injectable } from '@angular/core';
/* Les imports nécessaires*/
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Emprunt } from './emprunt';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpruntService {
  /*Créer la constante api du serveur backend*/
  private apiUrl="http://localhost:3001/api/emprunt"

  constructor(private httpClient:HttpClient) { }
  /*Méthode permettant d’ajouter un livre*/
 create(emprunt:Emprunt):Observable<any>{
  return this.httpClient.post(this.apiUrl,emprunt);
 }
}
