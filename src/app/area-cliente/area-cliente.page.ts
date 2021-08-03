import { Component, OnInit } from '@angular/core';
import { CadastroService, Cliente } from '../servico/cadastro.service';

@Component({
  selector: 'app-area-cliente',
  templateUrl: './area-cliente.page.html',
  styleUrls: ['./area-cliente.page.scss'],
})
export class AreaClientePage implements OnInit {
    clientes: Cliente[];
      constructor(private service: CadastroService) { }


  ngOnInit() {
    this.service.getAll().subscribe(response => {

      this.clientes = response;
      console.log(response) 
      
    })
  }

}
