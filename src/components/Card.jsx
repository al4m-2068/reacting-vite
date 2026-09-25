export const Card = function({ productName, productPrice, productRating }) {
   return (
      <div className="flex flex-col items-start justify-end w-full gap-5 p-5 text-sm uppercase border aspect-5/4">
         <div className="flex flex-col">
            <h1 className="text-base font-bold">{productName}</h1>
            <div className="flex">
               <p>Rp{productPrice}<span className="font-bold text-blue-400"> / </span>{productRating}</p>
            </div>
         </div>
         <button className="px-5 py-2 text-xs uppercase transition-transform duration-150 border cursor-pointer hover:text-white hover:border-blue-400 hover:bg-blue-400 hover:translate-x-1 hover:-translate-y-1">I want this ↗</button>
      </div>
   )
}