import React from 'react';

const CategoryCard = props => {
    return (
        <>
            <div className="category my-4 ">
                <div className="d-flex justify-content-between align-items-center">
                    <h1>Category Name</h1>
                    <h5>More</h5>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <img src="https://placehold.co/300x200" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <p className={'card-text'}><strong>$20.00</strong></p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CategoryCard;