import React from 'react'
import {Link} from 'react-router-dom'

class CardItem extends React.Component{
    render(){
        return(
            <div>
                <Link to='/fitness' className='card' to='#'><h4>{this.props.text} </h4>
                <div class='image'>
                    <img src={this.props.src} alt='Image'/>
                </div>
                <div className='image-content'>
                    Here we godfsfd
                </div>
                 </Link>
                 {/* <Link to='fitness'> Fitness</Link> */}
            </div>
        )
    }
}

export default CardItem