import React from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero'
import MainContent from './components/MainContent'
import RecentNews from './components/RecentNews'
import SubContent from './components/SubContent'
import VideoContent from './components/VideoContent'

export default function Home() {
    return (
        <div>
            <Hero/>
            <MainContent/>
            <SubContent/>
            <RecentNews/>
            <VideoContent/>
            <Footer/>
        </div>
    )
}
