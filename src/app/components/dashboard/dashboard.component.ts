
import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/Forms';

//Importamos el servicio
import { com_apiservice } from '../../shared/services/com-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  /*
    c1Form = new FormGroup({
      c1 : new FormControl('', Validators.required),
      c2 : new FormControl('', Validators.required)
    })
  */
    conversion: any;
    rta: [];
  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    private http: HttpClient
  ) { }


  ngOnInit() {
    //'https://www.datos.gov.co/resource/xdk5-pm3f.json'
    //'http://legourmet.com.co/WebSiteF/reservas.json'
    //'http://181.63.254.35:8080/WebSiteF/reservas.json'
    //'http://localhost/WebSiteF/reservas.json'

    //--proxy.config proxy.comf.json

    this.http.get('http://181.63.254.35:8080/Recursos/divipola1.json')
      .subscribe(data => {
        this.conversion = data;
        this.rta = this.conversion;

        console.log('Respuesta:', this.rta);
        console.log('conversion',this.conversion);
      });
  }

  // on1form(form: any) {
  //   console.log(form)
  // }
}

// export class AppComponent {
//   name = 'Angular';

  /*   //Inyectamos nuestro servicio
    constructor(public _com_apiservice:
       com_apiservice) { }
    datosCargados = null
    cargarDatos() {
      this._com_apiservice.consumirServicio(1, '20210409', 1)
      .subscribe(datos => { 
      this.datosCargados = datos });
      console.log(this.datosCargados);
  
      } */
 
