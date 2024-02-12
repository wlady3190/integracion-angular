import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  id: number | null = null;
  materia: string = '';
  nota: number | null = null;

  onSubmit() {
    // Envia los datos del formulario aquí, usando un servicio u otro
    // mecanismo para manejar la lógica específica de tu aplicación.
    console.log('Formulario enviado:', this.id, this.materia, this.nota);

    // Puedes limpiar el formulario después de enviarlo si es necesario:
    this.id = null;
    this.materia = '';
    this.nota = null;
  }

  ngOnInit() {
    // Opcionalmente, busca datos iniciales para el formulario aquí, si aplica
  }
}