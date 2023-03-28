import React from 'react'
import Footer from './components/Footer'
import PlantHero from './components/plantComponent/PlantHero'
import ProcessMainContent from './components/processComponent/ProcessMainContent'
import PlantRecentNews from './components/plantComponent/PlantRecentNews'
import PlantSubContent from './components/processComponent/PlantSubContent'

export default function Home() {
    return (
        <div>
            <PlantHero/>
            <ProcessMainContent/>
            <PlantSubContent/>
            <PlantRecentNews/>
            <Footer/>
        </div>
    )
}
