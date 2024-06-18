import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {setCurrentCategory} from '../../redux/actions/Category';
import {useParams} from 'react-router-dom';
import useLoading from '../../hooks/useLoading';
import CategoryRequest from '../../services/Requests/Category';
import CategoryCard from '../../components/category/CatergoryCard';

const CategoryDetails = props => {
    const {currentCategory, setCurrentCategory} = props;
    const [loading, withLoading] = useLoading();
    const {id} = useParams();

    const handleGetACategory = async () => {
        try {
            const category = await withLoading(CategoryRequest.getACategory(id));
            setCurrentCategory(category?.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleGetACategory();
    }, [id]);

    return (
        <>
            {
                loading && currentCategory ?
                    <h4>Loading Category ...</h4>
                    :
                    <div className="container">
                        <CategoryCard category={currentCategory} showMore={false}/>
                    </div>
            }
        </>
    );
}

const mapStateToProps = ({category}) => {
    const {currentCategory} = category;
    return {currentCategory};
};

const mapDispatchToProps = {
    setCurrentCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetails);
