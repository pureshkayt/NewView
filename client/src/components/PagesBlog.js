import React, {useContext} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination} from "react-bootstrap";

const PagesBlog = observer(() => {
    const {blog} = useContext(Context)
    const pageCount = Math.ceil(blog.totalCountArt / blog.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination className='pageblog'>
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={blog.page === page}
                    onClick={() => blog.setPageArt(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
})

export default PagesBlog;