import { Component, OnInit } from '@angular/core';
import { CadastroService, Cliente } from '../servico/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
clientes: Cliente[];
  constructor(private service: CadastroService) { }

  ngOnInit() {
    this.service.getAll().subscribe(response => {
      console.log(response);
  })

 }
}
