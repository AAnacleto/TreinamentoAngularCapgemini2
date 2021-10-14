import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../../ofertas.service';


@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

  public ondeFica : string = '';

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit(): void {
    // console.log(this.route.parent?.snapshot.params['id'])

    this.route.parent?.params.subscribe((parametro: Params) => {
      this.ofertasService.getOndeFicaOfertaPorId(parametro.id)
     .then((resposta:string) =>{
      
      this.ondeFica = resposta
    })
    })
    
   }
 

}
