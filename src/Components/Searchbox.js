import React from 'react';

const search=({searchChange})=>{ //here we are passing seachchange as a destructor
    return(
        <div className='pa2'>
            <input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='who?' onChange={searchChange} />
        </div>
    );
}

export default search;