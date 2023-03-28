import React from 'react'
import Footer from './components/Footer'
import PlantHero from './components/plantComponent/PlantHero'
import PlantImportExportContent from './components/plantComponent/PlantImportExportContent'
import PlantMainContent from './components/plantComponent/PlantMainContent'
import PlantRecentNews from './components/plantComponent/PlantRecentNews'

export default function Home() {
    return (
        <div>
            <PlantHero/>
            <PlantMainContent/>
            <PlantImportExportContent/>
            <PlantRecentNews/>
            <Footer/>
        </div>
    )
}
