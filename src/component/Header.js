import React from 'react'
import './Header.css'
import {MenuItems} from './Menu-Items'
import {NavLink} from 'react-router-dom'
import Technology from './pages/Technology'
import Hollywood from './pages/Hollywood'
import Home from './pages/Home'
import Bollywood from './pages/Bollywood'
import Fitness from './pages/Fitness'
import Food from './pages/Food'
import {Route} from 'react-router-dom'



class Header extends React.Component{
    state={
        clicked: false
    }
    handleIcon=()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <div className='header'>
                {/* //the title of the page */}
                <div className='title'><h1><span className='title-the'>The</span>Siren</h1> </div>

                {/* menu-bar icon for mobile view */}
                <div className='menu-icon' onClick={this.handleIcon}>
                    <i class={this.state.clicked ? 'fas fa-times fa-2x':'fa fa-bars fa-2x'} aria-hidden="true">
                        </i> 
                    </div>

                <div className={this.state.clicked ?'menu-items1':'menu-items' }>
                    {MenuItems.map((value,index)=>{
                        return(
                            <div key={index}>
                                <NavLink to={value.path} className={value.cName} onClick={this.handleIcon}>{value.title}</NavLink>
                                </div>
                        )
                    })}                     
                    </div>   
                           
                    <hr></hr>
                    <Route path='/' exact component={Home}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/bollywood' component={Bollywood}/>
                    <Route path='/hollywood' component={Hollywood}/>
                    <Route path='/technology' component={Technology}/>
                    <Route path='/fitness' component={Fitness}/>
                    <Route path='/food' component={Food}/>
            </div>
        )
    }
}

export default Header