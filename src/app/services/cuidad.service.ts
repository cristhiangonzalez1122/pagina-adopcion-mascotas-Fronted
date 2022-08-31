import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from '../config/general.data';
import { ModeloDatosCiudad } from '../models/ciudad.modelo';
import { ModeloDatosDepartamento } from '../models/departamento.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class CuidadService {

  url: String = GeneralData.urlBackend;
  token?: String = '';
  constructor(
    private http: HttpClient,
    private securityService: SeguridadService
  ) {
    this.token = this.securityService.obtenerToken();
  }

  ListarRegistros(): Observable<ModeloDatosCiudad[]> {
    return this.http.get<ModeloDatosCiudad[]>(`${this.url}/ciudades/?filter={"include":["departamento"]}`, {
      headers: new HttpHeaders({
      })
    });
  }

  BuscarRegistro(id: number): Observable<ModeloDatosCiudad> {
    return this.http.get<ModeloDatosCiudad>(`${this.url}/ciudades/${id}`, {
      headers: new HttpHeaders({
      })
    });
  }

  GuardarRegistro(modelo: ModeloDatosCiudad): Observable<ModeloDatosCiudad> {
    let deptoId = 0;
    if(modelo.departamentoId){
      deptoId = parseInt(modelo.departamentoId.toString());
    }
    return this.http.post<ModeloDatosCiudad>(`${this.url}/ciudades`, {
      nombre: modelo.nombre,
      departamentoId: deptoId
    }, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

  ActualizarRegistro(modelo: ModeloDatosCiudad): Observable<ModeloDatosCiudad> {
    return this.http.put<ModeloDatosCiudad>(`${this.url}/ciudades/${modelo.id}`, modelo, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }

  EliminarRegistro(modelo: ModeloDatosCiudad): Observable<any> {
    return this.http.delete<any>(`${this.url}/ciudades/${modelo.id}`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })
    });
  }
}
