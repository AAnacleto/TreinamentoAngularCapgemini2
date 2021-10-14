import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../../ofertas.service';



@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css']
})
export class ComoUsarComponent implements OnInit {
  public comoUsar: string = ''

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit(): void {
  //  console.log(this.route.parent?.snapshot.params['id'])

  this.route.parent?.params.subscribe((parametro: Params) => {
    this.ofertasService.getComoUsarOfertaPorId(parametro.id)
   .then((resposta:string) =>{
     this.comoUsar = resposta
   })
  })
   
  }



}
