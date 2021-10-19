import { ItemCarrinho } from './shared/itemCarrinho.model'
import { Oferta } from './shared/oferta.model'

export class CarrinhoService {
   public itens: ItemCarrinho[] = []

   public exibirItens(): ItemCarrinho[]{
       return this.itens 
   }

   public incluirItem(oferta: Oferta): void {
       console.log(oferta)
       let itemCarrinho: ItemCarrinho = new ItemCarrinho(
           oferta.id,
           oferta.imagens[0],
           oferta.titulo,
           oferta.descricao_oferta,
           oferta.valor,
           1
       )
       console.log(itemCarrinho);
       
      let itemCarrinhooEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)

      if(itemCarrinhooEncontrado){
          itemCarrinhooEncontrado.quantidade += 1
      } else {
        this.itens.push(itemCarrinho)

      }
       
   }

   public totalCarrinho(): number{
      let total: number = 0;
      this.itens.map((item: ItemCarrinho) => {
         total = total + item.valor * item.quantidade
      })

      return total
   }

   public adicionarQuantidade (itemCarrinho : ItemCarrinho): void {
       
    let itemCarrinhoEncontrado = this.itens.find(( item: ItemCarrinho) => item.id === itemCarrinho.id)
    if(itemCarrinhoEncontrado){
        itemCarrinhoEncontrado.quantidade +=1;
    }
   }

   public retirarQuantidade (itemCarrinho : ItemCarrinho): void {
       
    let itemCarrinhoEncontrado = this.itens.find(( item: ItemCarrinho) => item.id === itemCarrinho.id)
    if(itemCarrinhoEncontrado){
        itemCarrinhoEncontrado.quantidade -=1;
        if(itemCarrinhoEncontrado.quantidade === 0){
            this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado), 1)
        }
    }
   }

   public limparCarrinho(): void {
       this.itens = [];
   }

}

