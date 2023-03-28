import React from 'react'
import FishMainContent from './components/fishComponent/FishMainContent'
import FishRecentNews from './components/fishComponent/FishRecentNews'
import FishSubContent from './components/fishComponent/FishSubContent'
import Footer from './components/Footer'
import PlantHero from './components/plantComponent/PlantHero'

export default function Home() {
    return (
        <div>
            <PlantHero/>
            <FishMainContent/>
            <FishSubContent/>
            <FishRecentNews/>
            <Footer/>
        </div>
    )
}
