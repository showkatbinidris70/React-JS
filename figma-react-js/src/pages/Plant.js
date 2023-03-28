import React from 'react'
import Footer from './components/Footer'
import PlantHero from './components/plantComponent/PlantHero'
import PlantMainContent from './components/plantComponent/PlantMainContent'
import PlantRecentNews from './components/plantComponent/PlantRecentNews'
import PlantSubContent from './components/plantComponent/PlantSubContent'

export default function Home() {
    return (
        <div>
            <PlantHero/>
            <PlantMainContent/>
            <PlantSubContent/>
            <PlantRecentNews/>
            <Footer/>
        </div>
    )
}
