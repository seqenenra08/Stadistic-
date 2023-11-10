"use client"
import { createContext } from "react"
import { useState } from "react"

export const contextData = createContext()

export default function FunctionDataContex ({children}){ 
    const [data, cambioData] = useState()
    return  <contextData.Provider value={{data,cambioData}} > {children} </contextData.Provider>
}