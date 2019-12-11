import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;

  constructor(private http: HttpClient,
    private storage: Storage) { }

  login(email: string, password: string) {

    const data = { email, password };

    return new Promise(resolve => {

      //this.http.post('http://127.0.0.1/movilapp/test.php', data)
      this.http.post('http://appyudame.cl/consultas/test.php', data)
        .subscribe(resp => {
          console.log(resp);

          if (resp['validate'] == 1) {

            this.guardarToken(resp['token']);
            resolve(true);

          } else {

            this.token = null;

            this.storage.clear();

            resolve(false);

          }

        });

    });

  }

  getMecanico(){
    
    return new Promise(resolve => {

      //this.http.post('http://127.0.0.1/movilapp/get_mecanicos.php',true)
      this.http.post('http://appyudame.cl/consultas/get_mecanicos.php',true)
      .subscribe(resp => {
        console.log(resp);
        

      });

    });
  }

  async guardarToken(token: string) {

    this.token = token;

    await this.storage.set('token', token);

  }
}
