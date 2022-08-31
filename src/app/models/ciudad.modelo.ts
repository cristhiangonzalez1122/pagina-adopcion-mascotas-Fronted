import { ModeloDatosDepartamento } from "./departamento.modelo";

export class ModeloDatosCiudad {
  id?: number;
  nombre?: String;
  departamentoId?: String;
  departamento?: ModeloDatosDepartamento;
}
