import { Injectable } from '@angular/core';
import { FoodModel } from '../interfaces/FoodResponse';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  foods: FoodModel[] = [
    {
      title: "Fondue Suíço",
      subtitle: "Queijos Fundidos em um Banho de Vinho Branco para uma Experiência Inesquecível",
      content: "Um prato reconfortante que consiste em queijos suíços derretidos em um fondue de vinho branco, servido com pães crocantes, vegetais frescos e charcutaria. Perfeito para compartilhar em uma noite fria de inverno com amigos e família.",
      urlImage: "https://imagem.band.com.br/44/f_307244.jpg"
    },
    {
      title: "Pizza Artesanal",
      subtitle: "Massa Crocante, Molho de Tomate Fresco e Coberturas Saborosas",
      content: "Um clássico da culinária italiana, a pizza é uma verdadeira obra de arte gastronômica. Uma base de massa crocante e macia, coberta com molho de tomate fresco e uma variedade de ingredientes, como queijo derretido, pepperoni, cogumelos, pimentões e azeitonas. Cada mordida é uma explosão de sabores e texturas que aquecem o coração.",
      urlImage: "https://img.freepik.com/fotos-gratis/natureza-morta-de-pratos-de-fast-food_23-2149187953.jpg"
    },
    {
      title: "Hambúrguer Gourmet",
      subtitle: "Carne Suculenta, Queijo Derretido e Ingredientes Frescos em um Pão Macio",
      content: "Um hambúrguer artesanal é mais do que apenas um sanduíche - é uma experiência gastronômica. Uma carne suculenta e temperada grelhada até atingir o ponto perfeito, servida em um pão macio e coberta com queijo derretido, alface crocante, tomate fresco, cebola roxa e molho especial. Cada mordida é uma explosão de sabores que satisfaz até os paladares mais exigentes.",
      urlImage: "https://d21wiczbqxib04.cloudfront.net/H4QqTllcN6oof0qsRuiGDpzkDD8=/0x600/smart/https://osuper-ecommerce-supernahora.s3-sa-east-1.amazonaws.com/64f69c28-hamburguer.png"
    },
    {
      title: "Milkshake",
      subtitle: "Combinações Infinitas de Sorvete, Leite e Ingredientes Deliciosos",
      content: "O milkshake é uma verdadeira tentação para os amantes de doces. Feito com uma base de sorvete cremoso e leite gelado, pode ser personalizado com uma variedade de ingredientes, como chocolate, morango, banana, caramelo ou até mesmo biscoitos e brownies. Servido em um copo gelado, é uma sobremesa refrescante e indulgente que agrada a todas as idades.",
      urlImage: "https://w7.pngwing.com/pngs/547/938/png-transparent-several-assorted-flavor-sherbets-ice-cream-milkshake-juice-milkshake-cream-food-frozen-dessert.png"
    },
  ]



  constructor() { }



  getData(): FoodModel[] {
    return this.foods;
  }
}
