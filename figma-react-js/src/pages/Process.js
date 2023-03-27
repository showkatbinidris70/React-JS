import React from 'react'
import Footer from './components/Footer'
import PlantHero from './components/plantComponent/PlantHero'
import PlantMainContent from './components/plantComponent/PlantMainContent'
import PlantRecentNews from './components/plantComponent/PlantRecentNews'

export default function Home() {
    return (
        <div>
            <PlantHero/>
            <PlantMainContent/>
            <PlantRecentNews/>
            <Footer/>
        </div>
    )
}
