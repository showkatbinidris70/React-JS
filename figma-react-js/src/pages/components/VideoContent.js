import React from 'react'
import {ContainerSection, GridTwo} from '../../styles/Common.styled'
// import {GridTwoCard} from '../../styles/Navbar.styled'
import Iframe from 'react-iframe'
// import YouTube from 'react-youtube';


export default function VideoContent() {
    return (<div>
        <ContainerSection>
            <GridTwo>
                <div> {
                    < Iframe className = 'iframe1' url = "https://www.youtube.com/embed/uXWycyeTeCs" />
                }</div>
                {/* <div><YouTube videoId="wt_wYRN5c-8"/></div> */}
                <div> {
                    < Iframe className = 'iframe2' url = "https://www.youtube.com/embed/E7wJTI-1dvQ" />
                }</div>
                {/* <div>
                        <iframe width="500" height="280" auto src="https://www.youtube.com/watch?v=wt_wYRN5c-8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
                    </div> */} </GridTwo>
        </ContainerSection>
    </div>)
}
