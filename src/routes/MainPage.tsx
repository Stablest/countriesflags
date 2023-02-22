import { useState, useEffect } from 'react'
import Navbar from '../components/UI/organisms/navbar'
import Home from '../components/templates/home/home'
import '../components/styles/global.css'




export default function MainPage() {
    return (
        <>
            <Navbar></Navbar>
            <Home></Home>
        </>
    )
}

