import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'], 
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  public pedido: Pedido = new Pedido('', '', '', '')

  public idPedidoCompra!: number

  public endereco: string = ''
  public numero: string= ''
  public complemento: string = ''
  public formaPagamento: string = ''

  //controles de validacao dos campos
  public enderecoValido!: boolean
  public numeroValido!: boolean
  public complementoValido!: boolean
  public formaPagamentoValido!: boolean

  //
  public enderecoEstadoPrimitivo: boolean = true
  public numeroEstadoPrimitivo: boolean = true
  public complementoEstadoPrimitivo: boolean = true
  public formaPagamentoEstadoPrimitivo: boolean = true

  //
  public formEstado: string = 'disabled';



  constructor( private ordemCompraService: OrdemCompraService,
               private router: Router
    ) { }

  ngOnInit(): void {
  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco
    //console.log(this.endereco);
    this.enderecoEstadoPrimitivo = false
    
    //se a string for mais que 3
    if(this.endereco.length > 3){
      this.enderecoValido = true
    } else {
      this.enderecoValido = false
    }
    this.habilitaForm();
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero

    this.numeroEstadoPrimitivo = false

    if(this.numero.length >2 && this.numero.length < 5){
      this.numeroValido = true
    } else {
      this.numeroValido= false
    }
    console.log(this.numero);
    this.habilitaForm();
    
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento;

    this.complementoEstadoPrimitivo =false
    // console.log(this.complemento);
    if (this.complemento.length > 0) {
      this.complementoValido = true;
    }
    this.habilitaForm();
  }

  public atualizaFormaPagamento(formaDePagamento: string): void {
    this.formaPagamento = formaDePagamento;
    // console.log(this.formaPagamento);
    this.formaPagamentoEstadoPrimitivo = false
    if (this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }
    this.habilitaForm();
  }

  public habilitaForm(): void {
    if (
      this.enderecoValido === true &&
      this.numeroValido === true &&
      this.formaPagamentoValido === true
    ) {
      this.formEstado = '';
    }else {
      this.formEstado = 'disabled';
    }
  }

  public confirmarCompra(): void {

    this.pedido.endereco = this.endereco
    this.pedido.numero = this.numero
    this.pedido.complemento = this.complemento
    this.pedido.formaPagamento = this.formaPagamento

    this.ordemCompraService.efetivarCompra(this.pedido)
    .subscribe((idPedido: number) => {
      this.idPedidoCompra = idPedido
      
      console.log(this.idPedidoCompra);
      
      this.router.navigate(['/compra-sucesso']);

    })
  }

}
