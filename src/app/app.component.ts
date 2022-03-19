import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  numeroDigitado: number = 0;
  numeroTabuadaFinal: number = 0;
  respostas: string[] = [];

  ngOnInit() {
  }

  ngOnDestroy() {

  }


  calcular(pares: boolean = false) {
    this.respostas = [];
    for (let i = 0; i <= this.numeroTabuadaFinal; i++) {
      let valorResultado = this.numeroDigitado * i;
      let resultado = this.numeroDigitado + 'x' + i + '=' + valorResultado;

      if (pares) {
        if (valorResultado % 2 == 0) {
          this.respostas.push(resultado);
        }
      } else {
        this.respostas.push(resultado);
      }
    }
    console.log(this.respostas);
  }

}