export function Hero() {
   return (
      <section id="hero" className="flex items-end h-screen gap-5 p-5 overflow-hidden max-sm:flex-col max-sm:h-auto">
         <h1 className="text-trim font-bold text-[240px]/[90%] max-sm:text-7xl w-full uppercase break-all">
            Zinc<span className="text-blue-400 transition hover:-skew-x-10 duration-105">Technologies</span>INC.
         </h1>

         <div className="flex flex-col items-end gap-5 text-right w-88 shrink-0">
            <p className="text-sm uppercase text-trim">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum quisquam eum!</p>
            <div className="flex gap-5">
            <button className="px-5 py-2 text-xs uppercase transition-transform duration-150 border cursor-pointer hover:text-white hover:border-blue-400 hover:bg-blue-400 hover:translate-x-1 hover:-translate-y-1">View Projects ↗</button>
            <button className="px-5 py-2 text-xs uppercase transition-transform duration-150 border cursor-pointer hover:text-white hover:border-blue-400 hover:bg-blue-400 hover:translate-x-1 hover:-translate-y-1">I have a project! ↗</button>
            </div>
         </div>
      </section>
   )
}