import React from 'react'
import Footer from './components/Footer'
import LiveStockHero from './components/liveStockComponent/LiveStockHero'
import LiveStockMainContent from './components/liveStockComponent/LiveStockMainContent'
import PlantRecentNews from './components/plantComponent/PlantRecentNews'
import LiveStockSubContent from './components/liveStockComponent/LiveStockSubContent'

export default function Home() {
    return (
        <div>
            <LiveStockHero/>
            <LiveStockMainContent/>
            <LiveStockSubContent/>
            <PlantRecentNews/>
            <Footer/>
        </div>
    )
}
