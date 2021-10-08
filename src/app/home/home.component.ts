import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.services';
import { Oferta } from "../shared/oferta.model"


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas : Oferta[] = []

  constructor(private ofertaService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.ofertaService.getOfertas();   
    console.log(this.ofertas);
    
  }



}
