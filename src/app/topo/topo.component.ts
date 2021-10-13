import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas!: Observable<Oferta[]>

  constructor(private ofertaService: OfertasService) { }

  ngOnInit(): void {
  }

  public pesquisa(termoPesquisa: string): void {
    this.ofertas = this.ofertaService.pesquisaOfertas(termoPesquisa)
   console.log(termoPesquisa)

   this.ofertas.subscribe((oferta: Oferta[]) => {
     console.log(oferta);
     
   })
  }

}
