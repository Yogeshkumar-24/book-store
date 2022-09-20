import React from 'react';

const Books = (props) => {
    console.log(props.selectedBook)
    const book = props.selectedBook;
    return(
        <div className='content-container container ' >
            <div className='content '>
                <h3 className=''>Title:</h3>
                <p className=''>{book.volumeInfo.title}</p>
            </div>
            <div className='content'>
                <h3 className=''>Publisher:</h3>
                <p className=''>{book.volumeInfo.publisher}</p>
            </div>
            <div className='content'>
                <h3 className=''>Author:</h3>
                <p className=''>{book.volumeInfo.authors}</p>
            </div>
            <div className='content'>
                <h3 className=''>Ratings:</h3>
                <p className=''>{book.volumeInfo.ratingsCount}</p>
            </div>
            <div className='content'>
                <h3 className=''>Pages:</h3>
                <p className=''>{book.volumeInfo.pageCount}</p>
            </div>
        </div>
    )
}

export default Books