const projects = [
   {
      nama: 'Nama-E',
      desc: 'Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, veritatis!',
      date: {
         month: 'July',
         day: 29,
         year: 2024
      }
   },
   {
      nama: 'Ultra S-Mill',
      desc: 'Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, veritatis!',
      date: {
         month: 'June',
         day: 30,
         year: 2010
      }
   },
   {
      nama: 'Zumbawa',
      desc: 'Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, veritatis!',
      date: {
         month: 'December',
         day: 12,
         year: 1987
      }
   },
]

// It can also use expression function
export const Projects = function() {
   // if (projects.length > 0) return (<div>Pass</div>)
   // Rewrites all component item
   return (
      <section id="projects" className="flex flex-col">
         <h1 className="sticky top-0 p-5 pt-5 text-sm uppercase bg-white border-b border-zinc-400">Projects</h1>
         {/* Only this part will be rewritten */}
         {projects.length === 0 ? (
            <p className="p-5 uppercase text-5xl font-bold">No projects to display, come back soon</p>
         ) : projects.length > 2 ? (
            <p className="p-5 uppercase text-5xl font-bold">We're sorting projects to display, come back soon</p>
         ) : projects.map((el, index) => (    
            <div className={`flex justify-between items-center p-5 hover:bg-blue-400 hover:text-white cursor-pointer transition duration-105 group max-sm:flex-col ${index != projects.length - 1 ? "border-b border-zinc-400" : ""}`} key={index}>
               <div className="flex flex-col items-end text-right uppercase">
                  <h1 className={`group-hover:${index % 2 == 0 ? 'rotate-2' : 'rotate-1'} text-5xl font-bold`}>{el.nama}</h1>
               </div>
               <div className="flex flex-col items-end gap-2 text-right">
                  <p className="text-sm uppercase">{el.desc}</p>
                  <span className="flex gap-5 *:uppercase *:text-sm items-center">
                     <p>{el.date.month}<span className="font-bold text-blue-400"> / </span>{el.date.day}<span className="font-bold text-blue-400"> / </span>{el.date.year}</p>
                     <span>|</span>
                     <button className="px-5 py-2 text-xs uppercase transition-transform duration-150 border cursor-pointer hover:text-blue-400 hover:border-white hover:bg-white hover:translate-x-1 hover:-translate-y-1">View ↗</button>
                  </span>
               </div>
            </div>
         ))}
      </section>
   )
}