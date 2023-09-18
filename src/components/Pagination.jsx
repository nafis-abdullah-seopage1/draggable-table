import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';


const Pagination = ({ page, setPage, totalPage }) => {
    useEffect(() => {
        // window.scrollTo(0, 0);
    }, [page]);

    const pages = [];
    for (let i = 2; i < totalPage; i++) {
        pages.push(i);
    };

    const startIndex = (p) => {
        if (p <= 3) {
            return 0;
        }
        else if (p > 3 && p < totalPage - 2) {
            return p - 3
        }
        else if (p >= totalPage - 2) {
            return totalPage - 5
        }
    };

    const endIndex = (p) => {
        if (p <= 3) {
            return 3;
        }
        else if (p > 3 && p < totalPage - 2) {
            return p
        }
        else if (p >= totalPage - 2) {
            return totalPage
        }
    }



    return (
        <div className="p-3 d-flex justify-content-end align-items-center" style={{ gap: '3px' }}>
            <span style={{ fontWeight: 'bold', marginRight: '10px' }}>Page : {page}</span>
            <Button onClick={() => setPage(1)} size='sm' variant='danger'>
                <FaAngleDoubleLeft />
            </Button>

            <Button
                variant={`${1 === page ? 'danger' : 'outline-danger'}`}
                onClick={() => setPage(1)}
                size='sm'>
                1
            </Button>

            {
                page > 3 &&
                <span style={{ width: '25px', fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}>...</span>
            }

            {
                pages.slice(startIndex(page), endIndex(page)).map((p, i) =>
                    <Button
                        key={i}
                        variant={`${p === page ? 'danger' : 'outline-danger'}`}
                        onClick={() => setPage(p)}
                        size='sm'>
                        {p}
                    </Button>)
            }

            {
                page < totalPage - 2 &&
                <span style={{ width: '25px', fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}>...</span>
            }

            {
                totalPage &&
                <Button
                    size='sm'
                    onClick={() => setPage(totalPage)}
                    variant={`${totalPage === page ? 'danger' : 'outline-danger'}`}>
                    {totalPage}
                </Button>
            }

            <Button onClick={() => setPage(prev=>totalPage?totalPage:prev)} size='sm' variant='danger'>
                <FaAngleDoubleRight />
            </Button>
        </div>
    );
};

export default Pagination;