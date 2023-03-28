import React from 'react'
import Footer from './components/Footer'
import PlantHero from './components/plantComponent/PlantHero'
import PlantSubContent from './components/processComponent/PlantSubContent'
import ProcessMainContent from './components/processComponent/ProcessMainContent'
import ProcessRecentNews from './components/processComponent/ProcessRecentNews'

export default function Home() {
    return (
        <div>
            <PlantHero/>
            <ProcessMainContent/>
            <PlantSubContent/>
            <ProcessRecentNews/>
            <Footer/>
        </div>
    )
}
