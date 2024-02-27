import { Component } from '@angular/core';
/*Les imports nécessaires*/
import { LivreService } from '../livre.service';
import { Livre } from '../livre';

@Component({
  selector: 'app-listlivres',
  templateUrl: './listlivres.component.html',
  styleUrls: ['./listlivres.component.css']
})
export class ListlivresComponent {
  livres:Livre[];
/*Injection des dépendances dans le constructeur*/
constructor(public livreserv: LivreService) {}
ngOnInit():void{
  /*appel a la méthode de récupération de la liste des livres*/
  
  this.livreserv.getAllLivres().subscribe((data:Livre[])=>{
    //on va remplir le tableau
    this.livres=data;
  })
}
  /*Méthode pour récupérer la liste des livres */
 //???????????????????
 
/*Méthode pour supprimer un livre de id donné*/
deleteLivre(_id:object){
  this.livreserv.delete(_id).subscribe((res:object)=>{
    this.livres = this.livres.filter(lr=>lr._id != _id);
    console.log("Post deleted successfully");
  })
}
}
