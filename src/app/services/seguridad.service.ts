import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GeneralData } from '../config/general.data';
import { ModeloIdentificar } from '../models/identificar.modelo';

@Injectable({
  providedIn: 'root',
})
export class SeguridadService {
  url: String = GeneralData.urlBackend;
  datosUsuariosEnSesion = new BehaviorSubject<ModeloIdentificar>(
    new ModeloIdentificar()
  );
  constructor(private http: HttpClient) {
    this.verificarSesionActual();
  }

  verificarSesionActual() {
    const datos = this.obtenerInformacionSesion();
    if (datos) {
      this.refrescarDatosSesion(datos);
    }
  }

  refrescarDatosSesion(datos: ModeloIdentificar) {
    this.datosUsuariosEnSesion.next(datos);
  }

  obtenerDatosUsuarioSesion() {
    return this.datosUsuariosEnSesion.asObservable();
  }

  Identificar(usuario: string, clave: string): Observable<ModeloIdentificar> {
    return this.http.post<ModeloIdentificar>(
      `${this.url}/identificar`,
      {
        usuario: usuario,
        clave: clave,
      },
      {
        headers: new HttpHeaders({}),
      }
    );
  }

  AlmacenarSesion(datos: ModeloIdentificar) {
    datos.isLogged = true;
    const stringDatos = JSON.stringify(datos);
    localStorage.setItem('datosSesion', stringDatos);
    this.refrescarDatosSesion(datos);
  }

  obtenerInformacionSesion() {
    const datosString = localStorage.getItem('datosSesion');
    if (datosString) {
      const datos = JSON.parse(datosString);
      return datos;
    } else {
      return null;
    }
  }

  eliminarInformacionSesion() {
    localStorage.removeItem('datosSesion');
    this.refrescarDatosSesion(new ModeloIdentificar());
  }

  seHaIniciadoSesion() {
    const datosString = localStorage.getItem('datosSesion');
    return datosString;
  }

  obtenerToken() {
    const datosString = localStorage.getItem('datosSesion');
    if (datosString) {
      const datos = JSON.parse(datosString);
      return datos.tk;
    } else {
      return '';
    }
  }
}
