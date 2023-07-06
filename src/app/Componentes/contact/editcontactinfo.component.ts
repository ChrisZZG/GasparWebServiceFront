import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/Model/persona';
import { PersonaService } from 'src/app/Service/persona.service';

@Component({
  selector: 'app-editcontactinfo',
  templateUrl: './editcontactinfo.component.html',
  styleUrls: ['./editcontactinfo.component.css']
})
export class EditcontactinfoComponent implements OnInit {

  persona: Persona = null;

  constructor(private personaService: PersonaService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error al Actualizar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al Modificar");
        this.router.navigate(['']);
      }
    )
  }

}
