import React from 'react'
import Header from '../components/shared/Header'
import Landing from './Landing'
import {Route, Routes} from "react-router-dom"

const Views = () => {
    return (
        <>
            <Header/>

            <div className={'container my-5'}>
                <Routes>
                    <Route
                        path={"/"}
                        element={<Landing title="Landing Page"/>}
                    />
                </Routes>
            </div>
        </>
    )
}

export default Views;