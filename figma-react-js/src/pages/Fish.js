import React from 'react'
import Footer from './components/Footer'
import PlantHero from './components/plantComponent/PlantHero'
import FishMainContent from './components/fishComponent/FishMainContent'
import PlantRecentNews from './components/plantComponent/PlantRecentNews'
import FishSubContent from './components/fishComponent/FishSubContent'

export default function Home() {
    return (
        <div>
            <PlantHero/>
            <FishMainContent/>
            <FishSubContent/>
            <PlantRecentNews/>
            <Footer/>
        </div>
    )
}
