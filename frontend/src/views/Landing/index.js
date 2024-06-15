import React, {useEffect} from 'react';
import CategoryCard from '../../components/category/CatergoryCard';
import {useDocumentTitle} from '../../hooks/useDocumentTitle';
import CategoryRequest from '../../services/Requests/Category';

const Landing = (props) => {
    const {title} = props;

    useDocumentTitle(title);


    useEffect(() => {
        // get all categories
        const fetchCategories = async () => {
            try {
                const response = await CategoryRequest.getAllCategories();
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories();
    }, []);



    return (
        <>
            <CategoryCard/>
        </>
    );
};

export default Landing;
