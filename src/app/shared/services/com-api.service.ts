import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// Esta  permite trabajr con los flujos. Tambien 
// son importantes para que puedas hacer las modificaciones
// al servicio antes de que se entregue en el subscribe.
//Y para capturar algun error si hay.
import { catchError, map } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
@Injectable()

export class com_apiservice {

  constructor(
    // inyectamos el servicio
    public http: HttpClient
  ) { }


  // consumirServicio(lugar:number, fecha:string,orden:number) {
  consumirServicioB(lugar: number, fecha: string, orden: number) {

    let json1 = [{ "sitio": 1, "nombre": "Comedor Principal y terraza Jardín\r\n", "id": 78, "nom_cliente": "Moreno Baez Natalia Maria", "ubicacion": "Mesa#006 para 3 personas", "fechaRev": "2021-04-09T10:00:00" },
    { "sitio": 1, "nombre": "Comedor Principal y terraza Jardín\r\n", "id": 79, "nom_cliente": "Ridriguez Rodriguez Jorge Enrique", "ubicacion": "Mesa#007 para 3 personas", "fechaRev": "2021-04-09T10:00:00" },
    { "sitio": 1, "nombre": "Comedor Principal y terraza Jardín\r\n", "id": 80, "nom_cliente": "Simon Bolivar", "ubicacion": "Mesa#008 para 3 personas", "fechaRev": "2021-04-09T10:00:00" },
    { "sitio": 1, "nombre": "Comedor Principal y terraza Jardín\r\n", "id": 81, "nom_cliente": "Pedro Perez", "ubicacion": "Mesa#009 para 3 personas", "fechaRev": "2021-04-09T10:00:00" },
    { "sitio": 1, "nombre": "Comedor Principal y terraza Jardín\r\n", "id": 82, "nom_cliente": "Fransico De Paula Santander", "ubicacion": "Mesa#010 para 3 personas", "fechaRev": "2021-04-09T10:00:00" },
    { "sitio": 1, "nombre": "Comedor Principal y terraza Jardín\r\n", "id": 83, "nom_cliente": "Peñaloza Castro Hernan", "ubicacion": "Mesa#011 para 1 personas", "fechaRev": "2021-04-09T10:00:00" },
    { "sitio": 1, "nombre": "Comedor Principal y terraza Jardín\r\n", "id": 84, "nom_cliente": "Antonio Jose De Sucre", "ubicacion": "Mesa#012 para 1 personas", "fechaRev": "2021-04-09T10:00:00" },
    { "sitio": 1, "nombre": "Comedor Principal y terraza Jardín\r\n", "id": 85, "nom_cliente": "Jaimes Espinosa Jose Manuel", "ubicacion": "Mesa#013 para 3 personas", "fechaRev": "2021-04-09T10:00:00" },
    { "sitio": 1, "nombre": "Comedor Principal y terraza Jardín\r\n", "id": 86, "nom_cliente": "Martinez Legazpi Luciano", "ubicacion": "Mesa#014 para 5 personas", "fechaRev": "2021-04-09T10:00:00" },
    { "sitio": 1, "nombre": "Comedor Principal y terraza Jardín\r\n", "id": 87, "nom_cliente": "Camacho Rojas Humberto", "ubicacion": "Mesa#015 para 6 personas", "fechaRev": "2021-04-09T10:00:00" },
    { "sitio": 1, "nombre": "Comedor Principal y terraza Jardín\r\n", "id": 88, "nom_cliente": "Perret De Eichmann Eliane Sonia", "ubicacion": "Mesa#061 para 4 personas", "fechaRev": "2021-04-09T10:00:00" }]
    return (json1)
  }
  consumirServicio(lugar: number, fecha: string, orden: number) {
    let url = 'http://181.63.254.35:8080/WebSiteF/reservas.json'

    return this.http.get(url).pipe(
      map((datos: any) => {

        //Aqui podemos hacer algunas modificaciones.

        return datos.resultados

      }),
      catchError(error => {
        console.error(error)
        return throwError(error)
      })

    )

  }

}