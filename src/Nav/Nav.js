import React from "react"
import {NavLink} from "react-router-dom"
import './Nav.css'
import Gumby from '../Gumby/Gumby'


const Nav = () => {
    return (
        <div className="Nav">
            <h1 id="title">Wedder Checker - PNW Bouldering</h1>
                <NavLink to='/gumby'>
                    Gumby Guide
                </NavLink>
        </div>
    )
}

export default Nav