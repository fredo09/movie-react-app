import React from 'react';
import Pagination from 'rc-pagination';


import './Paginate.scss';

export const Paginate = ({ currentPage, totalItems, onChengePage }) => {
    return (
        <Pagination
            className="pagination"
            current={currentPage}
            total={totalItems}
            pageSize={20}
            onChange={ onChengePage}
        />
    )
}
