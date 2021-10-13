import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Oferta } from "./shared/oferta.model"
import { URL_API , URL_API_2, URL_API_3 } from "./shared/app.api"
import { Observable } from "rxjs"
import { map } from 'rxjs/operators'

@Injectable()
export class OfertasService {

    // private url_api = 'http://localhost:3000/ofertas'

    constructor(private http: HttpClient) {}

    public getOfertas(): Promise<Oferta[]> {
        return this.http.get(`${URL_API}?destaque=true`)
            .toPromise()
            .then((resposta: any) => resposta)
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get(`${URL_API}?categoria=${categoria}`)
            .toPromise()
            .then((resposta: any) => resposta)
    }

    public getOfertasPorId(id: number): Promise<Oferta>{
       return this.http.get(`${URL_API}?id=${id}`)
       .toPromise()
       .then((resposta : any ) => {
        console.log(resposta[0])
         return resposta[0]
    })
}

 public getComoUsarOfertaPorId(id: number) : Promise<string> {
     return this.http.get(`${URL_API_3}?id=${id}`)
     .toPromise()
     .then((resposta: any) =>{
        console.log(resposta[0].descricao)

         return resposta[0].descricao
     })
 }

 public getOndeFicaOfertaPorId(id: number) : Promise<string> {
    return this.http.get(`${URL_API_2}?id=${id}`)
    .toPromise()
    .then((resposta: any) =>{
        
       console.log(resposta[0].descricao)
       
    //    console.log(resposta)
       console.log(id)
    //    console.log(resposta[id].descricao);
       
       return resposta[0].descricao
    })
}

public pesquisaOfertas(termo: string ): Observable<Oferta[]> {
    return this.http.get<Oferta[]>(`${URL_API}?descricao_ofertas=${termo}`)
    .pipe(map(resposta => resposta ))
}



}

