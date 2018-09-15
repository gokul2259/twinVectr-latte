import React, { Component } from 'react';

const Image = (props) => {
    const {source} = props;
    return ( 
        <img src={source} />
     );
}
 
export default Image;