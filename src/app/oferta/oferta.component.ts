import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { interval, Observable } from 'rxjs';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { CarrinhoService } from '../carrinho.service'



@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService , CarrinhoService ]

})
export class OfertaComponent implements OnInit {

  public oferta!: Oferta

  constructor( 
    private route: ActivatedRoute,
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService    

    ) { 
  }

  ngOnInit(): void {
  //  console.log(this.route.snapshot.params['id'])
   this.route.params.subscribe((parametro: Params) => {
    this.ofertasService
    .getOfertasPorId(parametro.id)
    .then((oferta: Oferta) => {
      this.oferta = oferta;
     });
   })

  

  // console.log(this.carrinhoService.exibirItens());
  

}

ngOnDestroy(){

}

public adicionarItemCarrinho(): void{
 console.log(this.carrinhoService.incluirItem(this.oferta))
  
}
}