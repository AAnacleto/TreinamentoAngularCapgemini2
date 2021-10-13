import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, Observable } from 'rxjs';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]

})
export class OfertaComponent implements OnInit {

  public oferta!: Oferta

  constructor( 
    private route: ActivatedRoute,
    private ofertasService: OfertasService
    ) { 
  }

  ngOnInit(): void {
   console.log(this.route.snapshot.params['id'])
   
   this.ofertasService
   .getOfertasPorId(this.route.snapshot.params['id'])
   .then((oferta: Oferta) => {
     this.oferta = oferta;
    });

    this.route.params.subscribe((parametro: any) =>{
      console.log(parametro);
      
    })
   console.log(this.oferta);
   
    // let tempo = interval(500)
    // tempo.subscribe((intervalo: number) =>{
    //  console.log(intervalo);
     
    // })

}
}