import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MateriasService {
  constructor(private http: HttpClient) {}

  private API_MATERIAS = 'http://localhost:9091/materias';

  getProducto(): Observable<any> {
    return this.http.get(this.API_MATERIAS);
  }

  postProducto(materia: any): Observable<any> {
    return this.http.post(this.API_MATERIAS, materia);
  }

  putProductos(materia: any, id: any): Observable<any> {
    this.API_MATERIAS = `${this.API_MATERIAS}/${id}`;
    return this.http.put(this.API_MATERIAS, materia);
  }

  deleteProductos(id: any): Observable<any> {
    this.API_MATERIAS = `${this.API_MATERIAS}/${id}`;
    return this.http.delete(this.API_MATERIAS);
  }
}
