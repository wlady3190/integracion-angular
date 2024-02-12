import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MateriasService } from '../../services/materias.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private service: MateriasService) {}

  //METODO GET
  dataMateria: any = {};
  
  ngOnInit(): void {
    this.service.getMaterias().subscribe((materias) => {
      this.dataMateria = materias;
    });
  }

  // METODO POST
  saveMateria(id: string, nombre: string, nota: string) {
    const ide: number = parseInt(id);
    const not: number = parseFloat(nota);

    const temp = {
      id: ide,
      nombre: nombre,
      nota: not,
    };

    this.service.postMateria(temp).subscribe();
    alert('Materia guardada con éxito');
  }

  // METODO PUT
  updataMateria(id: string, nombre: string, nota: string) {
    const ide: number = parseInt(id);
    const not: number = parseFloat(nota);

    const temp = {
      id: ide,
      nombre: nombre,
      nota: not,
    };

    this.service.putMateria(temp, id).subscribe();
    alert('Materia actualizada con éxito');
  }

  deleteMateria(id: string) {
    const ide: number = parseInt(id);
    this.service.deleteMateria(ide).subscribe();
  }
}
