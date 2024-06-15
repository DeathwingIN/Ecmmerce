import React, {useEffect} from 'react';
import CategoryCard from '../../components/category/CatergoryCard';
import {useDocumentTitle} from '../../hooks/useDocumentTitle';
import CategoryRequest from '../../services/Requests/Category';
import {connect} from 'react-redux';
import {setCategories} from '../../redux/actions'

const Landing = (props) => {
    const {title, setCategories, categories} = props;
    useDocumentTitle(title);

    const getCategories = () => {

        try {
            const category = CategoryRequest.getAllCategories();
            setCategories(category?.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }

    }
    useEffect(() => {
        getCategories();

    }, []);


    return (
        <>
            <CategoryCard/>
        </>
    );
};


const mapStateToProps = ({category}) => {
    const {categories} = category;
    return {categories};
}

const mapDispatchToProps = {
    setCategories
};
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
