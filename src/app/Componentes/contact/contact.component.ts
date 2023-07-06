import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Model/persona';
import { PersonaService } from 'src/app/Service/persona.service';
import { TokenService } from 'src/app/Service/token.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  persona: Persona = new Persona("","","","");

  constructor(private personaService: PersonaService, private tokenS: TokenService) { }
  
  isLogged = false;
  

  ngOnInit(): void {
   this.cargarPersona();
   if(this.tokenS.getToken()){
    this.isLogged = true;
   } else {
    this.isLogged = false;
   }
  }

 cargarPersona(): void {
  this.personaService.detail(1).subscribe(data => {
    this.persona = data;
  })
 }

}
