import React from 'react'
import CategoryCard from '../../components/category/CatergoryCard'
import {useDocumentTitle} from '../../hooks/useDocumentTitle'

const Landing = props =>{
    const {title} = props;

    useDocumentTitle(title);
    return(
        <>

            <CategoryCard/>
        </>
    )
}


export default Landing;