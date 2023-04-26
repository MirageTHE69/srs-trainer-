import * as React from "react"
import hero from "../images/hero.png"
import Navbar from "../componets/Navbar"


const IndexPage = () => {
  return (
    <div className="bg-no-repeat bg-cover min-h-screen"
    style={{ backgroundImage: `url(${hero})` }}
    >
    <Navbar />
    <h1 className="text-3xl font-bold underline">
      
    </h1>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
