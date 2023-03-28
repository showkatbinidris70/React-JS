import React from 'react'
import {ContainerSection} from '../../../styles/plantStyle/PlantCommon.styled'
import {HeaderSection} from '../../../styles/liveStockStyle/LiveStockNavbar.styled'

export default function LiveStockHeader() {
    return (
        <div>
            <ContainerSection>
                <HeaderSection>
                    <div>
                        <h2>AGRO TRADE SECTION</h2>
                    </div>
                    <div>
                        <ul>
                            <li>EN</li>
                            <li>BN</li>
                        </ul>
                    </div>
                </HeaderSection>
            </ContainerSection>
        </div>
    )
}
