import { Component } from '@angular/core';
/*les imports nécessaires*/
import { EmpruntService } from '../emprunt.service';
import { Emprunt } from '../emprunt';
import { Router } from '@angular/router';
import { LivreService } from 'src/app/livres/livre.service';
import { Livre } from 'src/app/livres/livre';

@Component({
  selector: 'app-emprunt',
  templateUrl: './emprunt.component.html',
  styleUrls: ['./emprunt.component.css']
})
export class EmpruntComponent {
constructor (private emprServ:EmpruntService,private livrserv:LivreService){}
emprunt:Emprunt=new Emprunt()
tablivres:Livre[]
ngOnInit(){
  this.loadlivres()
}
/*Méthode pour charger la liste des livres dans un tableau tablivres*/ 
loadlivres(){


  
}
/*Méthode pour ajouter un emprunt dans la base de données*/ 
sauvegarder(){
  this.emprServ.create(this.emprunt).subscribe((data =>{
    console.log("Emprunt Added Successfully")
  }))
}


}
