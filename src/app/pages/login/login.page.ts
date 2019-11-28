import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal', { static: true }) slides: IonSlides;

  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
  ];

  avatarSlide = {
    slidePerView: 3.5
  }

  loginUser = {
    email: 'correo@gmail.com',
    password: 'user123'
  }

  constructor(private usuarioService: UsuarioService,
    private navCtrl: NavController,
    private uService: UiServiceService) { }

  ngOnInit() {
    this.slides.lockSwipes(true);
  }

  async login(fLogin: NgForm) {

    if (fLogin.invalid) { return; }

    const valido = await this.usuarioService.login(this.loginUser.email, this.loginUser.password);

    if (valido) {
      //Navegar al tabs
      //this.navCtrl.navigateRoot('/main/tabs/tab1', { animated: true });
      this.navCtrl.navigateRoot('/main/tabs/busqueda', { animated: true });

    } else {
      //alerta usuario y contraseña no correctos
      this.uService.Alertainformativa("Usuario o Contraseña son incorrectos");
    }

  }

  registro(fRegistro: NgForm) {

    console.log(fRegistro.valid);

  }

  seleccionarAvatar(avatar) {

    this.avatars.forEach(av => av.seleccionado = false);

    avatar.seleccionado = true;

  }

  mostrarRegistro() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }

  mostrarLogin() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

}
