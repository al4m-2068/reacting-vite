import { Nav } from "./components/Nav"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import React, { useState } from "react"
import { Footer } from "./components/Footer"
import { Products } from "./components/Products"
import Props from "./components/Props"

function App() {
  return (
    <React.Fragment>
      <Nav/>
      <Hero/>
      <About/>
      <Projects/>
      <Products/>
      <Footer/>
      {/* Shadcn Tryout */}
      {/* <Tabs defaultValue="account" className='w-50'>
         <TabsList>
            <TabsTrigger value='page1'>Page 1</TabsTrigger>
            <TabsTrigger value='page2'>Page 2</TabsTrigger>
         </TabsList>
         <TabsContent value="page1">
            <p>Content of page 1</p>
         </TabsContent>
         <TabsContent value="page2">
            <p>Content of page 2</p>
         </TabsContent>
      </Tabs> */}
    </React.Fragment>
  )
}

export default App
