import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
   console.log(this.route.parent?.snapshot.params['id'])
   this.ofertasService.getComoUsarOfertaPorId(this.route.parent?.snapshot.params['id'])
   .then((resposta:string) =>{
     this.comoUsar = resposta
     console.log(this.comoUsar)
   })
  }



}
