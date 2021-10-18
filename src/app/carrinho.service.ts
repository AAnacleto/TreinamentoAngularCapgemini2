import { ItemCarrinho } from './shared/itemCarrinho.model'
import { Oferta } from './shared/oferta.model'

export class CarrinhoService {
   public itens: ItemCarrinho[] = []

   public exibirItens(): ItemCarrinho[]{
       return this.itens 
   }

   public incluirItem(oferta: Oferta): void {
       console.log(oferta);
       
       let itemCarrinho: ItemCarrinho = new ItemCarrinho(
           oferta.id,
           oferta.imagens[0],
           oferta.titulo,
           oferta.descricao_oferta,
           oferta.valor,
           1
       )

       console.log(itemCarrinho);
       
   }
}

