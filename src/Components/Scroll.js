import React from 'react'
// now you can use 'children' like there was 'state' to render the childrn of scroll
const Scroll = (props) => {
    return (
        <div style={{overflow : 'scroll',border:'1px solid black', height:'380px'}}> {/*in jsx to use style use double curly braces  */}
            {props.children}
        </div>
    )
}
export default Scroll