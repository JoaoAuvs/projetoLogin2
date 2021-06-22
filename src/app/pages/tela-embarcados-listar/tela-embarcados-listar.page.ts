import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tela-embarcados-listar',
  templateUrl: './tela-embarcados-listar.page.html',
  styleUrls: ['./tela-embarcados-listar.page.scss'],
})
export class TelaEmbarcadosListarPage implements OnInit {

  constructor(
    private navCtr : NavController
  ) { }

  ngOnInit() {
  }

  clickDetalhes(){
    this.navCtr.navigateForward('tabs')
  }

}
