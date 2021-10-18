import { Pedido } from "./shared/pedido.model";
import { Injectable } from "@angular/core";
import { HttpClient , HttpHeaders, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { URL } from "./shared/app.api";
import { map } from "rxjs/operators";

@Injectable()
export class OrdemCompraService{

    constructor(private http: HttpClient){}

    public efetivarCompra(pedido : Pedido): Observable<any> {

        let headers: HttpHeaders = new HttpHeaders()
        
        headers.append('Content-type', 'application/json')

        console.log(pedido);
        return this.http.post(
            `${URL}/pedidos`, pedido,
            {headers: headers}
        )
        .pipe(map((resposta: any) => resposta.id))
        
    }
}