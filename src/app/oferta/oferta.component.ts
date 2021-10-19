import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { interval, Observable } from 'rxjs';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { CarrinhoService } from '../carrinho.service'



@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService]

})
export class OfertaComponent implements OnInit {

  public oferta!: Oferta

  constructor( 
    private route: ActivatedRoute,
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService,
    private router: Router


    ) { 
  }

  ngOnInit(): void {
   this.route.params.subscribe((parametro: Params) => {
    this.ofertasService
    .getOfertasPorId(parametro.id)
    .then((oferta: Oferta) => {
      this.oferta = oferta;
     });
   })

   console.log(this.oferta);
   
 }

ngOnDestroy(){

}

public adicionarItemCarrinho(): void{
  this.carrinhoService.incluirItem(this.oferta);
  this.router.navigate(['/ordem-compra'])
  console.log(this.carrinhoService.exibirItens())
  
}
}