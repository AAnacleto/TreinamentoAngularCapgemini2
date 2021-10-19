import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../shared/pedido.model'
import { CarrinhoService } from '../carrinho.service'
import { ItemCarrinho } from '../shared/itemCarrinho.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {
  
  public formulario : FormGroup = new FormGroup({
    endereco: new FormControl(null , [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    numero: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]) ,
    complemento: new FormControl(null),
    formaPagamento: new FormControl(null, [Validators.required])
  })
  
  idPedidoCompra!: number;
  itenscarrinho: ItemCarrinho [] = []

  constructor(private ordemCompraService: OrdemCompraService,
              public carrinhoService: CarrinhoService    
    ) { }

  ngOnInit() {
    this.itenscarrinho = this.carrinhoService.exibirItens()
    console.log(this.itenscarrinho);
    
  }

  public confirmarCompra(): void {
    if(this.formulario.status === 'INVALID') {
      console.log('formulario esta invalido')
      this.formulario.get('endereco')?.markAsTouched()
      this.formulario.get('numero')?.markAsTouched()
      this.formulario.get('complemento')?.markAsTouched()
      this.formulario.get('formaPagamento')?.markAsTouched()
    } else {

      if(this.carrinhoService.exibirItens().length === 0){
        alert('você não selecionou nenhum item')
      } else {
      let pedido: Pedido = new Pedido(
       this.formulario.value.endereco,
       this.formulario.value.numero,
       this.formulario.value.complemento,
       this.formulario.value.formaPagamento,
       this.carrinhoService.exibirItens()
      )

      this.ordemCompraService.efetivarCompra(pedido)
      .subscribe((idPedido: number) => {
       this.idPedidoCompra = idPedido
       this.carrinhoService.limparCarrinho()

      })
      console.log(this.idPedidoCompra); 
      
      console.log('formulario esta valido!!!!')
      }
    }
  }

  public adicionar (item: ItemCarrinho): void {
    this.carrinhoService.adicionarQuantidade(item)
  }

  public retirar(item: ItemCarrinho): void {
    this.carrinhoService.retirarQuantidade(item)
  }
}
