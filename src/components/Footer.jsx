export const Footer = function() {
   return (
      <>
         <footer>
            <div className="p-5 overflow-hidden">
               <h1 className="text-trim font-bold text-[228px]/[90%] w-full uppercase break-all">
                  Zinc<span className="text-blue-400 transition hover:-skew-x-10 duration-105">Technologies</span>INC.
               </h1>
            </div>
            <div className="p-5 pt-0">
               <nav className="flex justify-end gap-5 text-sm uppercase">
                  <ul>
                     <li className="text-base font-bold">Links</li>
                     <li>Sponsors</li>
                     <li>Work with us</li>
                     <li>Callibration</li>
                  </ul>
                  <ul>
                     <li className="text-base font-bold">Socials</li>
                     <li>Instagram</li>
                     <li>X</li>
                     <li>Discord Community</li>
                  </ul>
               </nav>
            </div>
         </footer>
      </>
   )
}