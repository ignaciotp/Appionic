import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {
  results: any;
  url: 'http://127.0.0.1/movilapp/get_mecanicos.php';

  constructor(private geolocation: Geolocation, private http: HttpClient) { }
  ngOnInit() {
    // this.results = this.http.get('http://127.0.0.1/movilapp/get_mecanicos.php').pipe(
    this.results = this.http.get('http://appyudame.cl/consultas/get_mecanicos.php').pipe(
      map(results => {
        console.log(results);
        return results;
      })
    )
    //const valido = this.usuarioService.getMecanico();
  }

  Locacion(lat: string, lgn: string) {
    console.log(lat + "-" + lgn);
    // this.geolocation.getCurrentPosition().then((resp) => {
    //   // resp.coords.latitude
    //   // resp.coords.longitude
    //   console.log(resp.coords.latitude);
    //   console.log(resp.coords.longitude);
    // }).catch((error) => {
    //   console.log('Error getting location', error);
    // });
  }

}
