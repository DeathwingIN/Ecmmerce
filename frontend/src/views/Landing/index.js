import React, {useEffect} from 'react';
import CategoryCard from '../../components/category/CatergoryCard';
import {useDocumentTitle} from '../../hooks/useDocumentTitle';
import CategoryRequest from '../../services/Requests/Category';
import {connect} from 'react-redux';
import {setCategories} from '../../redux/actions'
import useLoading from '../../hooks/useLoading';

const Landing = (props) => {
    const {title, setCategories, categories} = props;
    const [loading, withLoading] = useLoading();

    useDocumentTitle(title);

    const getCategories = async () => {
        try {
            const category = await withLoading(CategoryRequest.getAllCategories());
            console.log('category:', category);
            setCategories(category?.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };


    useEffect(() => {

        if (categories?.length < 1) {
            getCategories();
        }
    }, []);


    return (
        <>

            {
                loading
                    ? "Loading Categories and Products"
                    : categories?.length > 0
                        ? categories?.map(category => (
                            <CategoryCard key={category?.id} category={category}/>
                        ))
                        :
                        !loading && <h4>No Categories Found</h4>
            }
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


