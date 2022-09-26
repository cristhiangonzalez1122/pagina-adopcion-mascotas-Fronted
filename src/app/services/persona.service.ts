import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from '../config/general.data';
import { ModeloPersona } from '../models/persona.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url: String = GeneralData.urlBackend;
  token?: String = '';
  constructor(
    private http: HttpClient,
    private securityService: SeguridadService
  ) {
    this.token = this.securityService.obtenerToken();
  }

  ListarRegistros(): Observable<ModeloPersona[]> {
    return this.http.get<ModeloPersona[]>(`${this.url}/personas`, {
      headers: new HttpHeaders({
      })
    });
  }

  BuscarRegistro(id: number): Observable<ModeloPersona> {
    return this.http.get<ModeloPersona>(`${this.url}/personas/${id}`, {
      headers: new HttpHeaders({
      })
    });
  }

  GuardarRegistro(modelo: ModeloPersona): Observable<ModeloPersona> {
    return this.http.post<ModeloPersona>(`${this.url}/personas`, {
      nombres: modelo.nombres,
      apellidos: modelo.apellidos,
      documento: modelo.documento,
      direccion: modelo.direccion,
      telefono: modelo.telefono
    }, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

  ActualizarRegistro(modelo: ModeloPersona): Observable<ModeloPersona> {
    return this.http.put<ModeloPersona>(`${this.url}/personas/${modelo.id}`, modelo, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

  EliminarRegistro(modelo: ModeloPersona): Observable<any> {
    return this.http.delete<any>(`${this.url}/personas/${modelo.id}`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }
}
