import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Cliente{
  id: string;
  nome: string;
  senha: string;
  email: string;
  dtnasc: Date;
  usuario: string;
  ss_temp: string;
  ss_umidade: string;
  ss_chuva: string;
  ss_nivelagua: string;
  ss_chamas: string;
  bomba_agua: string;
}

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
private url = 'http://127.0.0.1/api.php';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<[Cliente]>(this.url);
  }
}
