import React from 'react';
import {getPagesArray} from "../../../Utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages)
    return (
        <div className="page_wrapper">
            {pagesArray.map(p =>
                <span
                    key={p}
                    onClick={() => changePage(p)}
                    className={page === p ? 'page page_current' : 'page'}>
						{p}
					</span>
            )}
        </div>
    );
};

export default Pagination;