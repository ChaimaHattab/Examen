import { Injectable } from '@angular/core';
/*les imports nécessaires*/ 
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Livre } from './livre';
import { Observable,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  /*créer la constante api du serveur backend*/ 
private apiUrl="http://localhost:3001/api/livres"

  constructor(private httpClient:HttpClient) { }

  /*Méthode permettant de renvoyer tous les livres*/
  getAllLivres():Observable<any>{
    return this.httpClient.get(this.apiUrl)
  }
  /*Méthode permettant de supprimer un livre de id donné*/
 delete(_id:object){
  return this.httpClient.delete(this.apiUrl+"/"+_id);
 }
 /*Méthode permettant d’ajouter un livre*/
 create(livre:Livre):Observable<any>{
  return this.httpClient.post(this.apiUrl,livre);
 }
 /*Méthode permettant de renvoyer un livre de id donné*/
 find(_id:object):Observable<any>{
  return this.httpClient.get(this.apiUrl+"/"+_id);
 }
 /*Méthode permettant de modifier un livre en entré de id donné */
 update(_id:object,livre:Livre):Observable<any>{
 return this.httpClient.put(this.httpClient+"/"+_id,livre);
 }
}
