import { Card } from "./Card"

const products = [
   {
      pName: 'Lenovo Zinx Quadro',
      pPrice: '58.199.000',
      pRate: '4.9'
   },
   {
      pName: 'ASUS Rebel',
      pPrice: '47.299.000',
      pRate: '5.0'
   },
   {
      pName: 'Omen Raptor Zinc',
      pPrice: '92.199.000',
      pRate: '4.9'
   },
]
export const Products = function() {
   return (
      <section id="products" className="flex flex-col">
         <h1 className="sticky top-0 p-5 pt-5 text-sm uppercase bg-white border-b border-zinc-400">Products</h1>
         <div className="flex max-sm:flex-col p-5">
            {products.map((products, index) => (
               <Card key={index} productName={products.pName} productPrice={products.pPrice} productRating={products.pRate}/>
            ))}
         </div>
      </section>
   )
}