import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
 class Header extends Component {
navigate=(path)=>{
this.props.history.push(path);
}


    render() {
        return ( <div >
            <button onClick={()=> this.navigate('/home')}>Home</button> 
            <button onClick={()=> this.navigate('/details')}>Details</button> 
            <button onClick={()=> this.navigate('/filter')}>Filter</button> 
            </div>
        )
    }
}
export default withRouter(Header); // only read history if this line is wrtten

// this is the header that will contain all three filter home and detail button
// line 4 to 5 pushes the path into the param 