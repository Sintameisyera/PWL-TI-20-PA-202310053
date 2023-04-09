import React from 'react'
import Footers from './component/footers/Footers'
import HeaderNav from './component/headers/HeadersNav'
import ModalPopUp from './component/modals/ModalPopUp'
import './Layouts.css'

export default function Layouts(props) {
    return (
        <div id="main-layout">
            <HeaderNav />

            <main className='mt-20 py-10'>
                {props.children}
            </main>

            <Footers />
            <ModalPopUp />
        </div>
    )
}