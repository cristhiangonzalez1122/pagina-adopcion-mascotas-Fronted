import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from '../config/general.data';
import { ModeloDatosDepartamento } from '../models/departamento.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root',
})
export class DepartamentoService {
  url: String = GeneralData.urlBackend;
  token?: String = '';
  constructor(
    private http: HttpClient,
    private securityService: SeguridadService
  ) {
    this.token = this.securityService.obtenerToken();
  }

  ListarRegistros(): Observable<ModeloDatosDepartamento[]> {
    return this.http.get<ModeloDatosDepartamento[]>(`${this.url}/departamentos/`, {
      headers: new HttpHeaders({
      })
    });
  }

  BuscarRegistro(id: number): Observable<ModeloDatosDepartamento> {
    return this.http.get<ModeloDatosDepartamento>(`${this.url}/departamentos/${id}`, {
      headers: new HttpHeaders({
      })
    });
  }

  GuardarRegistro(modelo: ModeloDatosDepartamento): Observable<ModeloDatosDepartamento> {
    return this.http.post<ModeloDatosDepartamento>(`${this.url}/departamentos`, {
      nombre: modelo.nombre
    }, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

  ActualizarRegistro(modelo: ModeloDatosDepartamento): Observable<ModeloDatosDepartamento> {
    return this.http.put<ModeloDatosDepartamento>(`${this.url}/departamentos/${modelo.id}`, modelo, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

  EliminarRegistro(modelo: ModeloDatosDepartamento): Observable<any> {
    return this.http.delete<any>(`${this.url}/departamentos/${modelo.id}`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }
}
