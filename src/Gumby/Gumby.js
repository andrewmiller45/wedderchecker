import React from 'react'
import {Link} from 'react-router-dom'
import areaBlurbs from '../areaBlurbs'
import './Gumby.css'

const Gumby = () => {
  return (
    <main>
        <Link id="homeLink" to={'/'}>Home</Link>
        <div>
            <h1 className="new">New to Washington? Start here:</h1>
        </div>
        <section className='gumby-container'>
            <div className="resource-link">
                <h3>Free Online Guides</h3>
                <ul>
                <li><a id='tester' href={areaBlurbs.leavenworth.mtnProj}>Leavenworth</a></li>
                <li><a href={areaBlurbs.goldbar.mtnProj}>Gold Bar</a></li>
                <li><a href={areaBlurbs.lostledge.mtnProj}>Lost Ledge</a></li>
                </ul>
            </div>
            <div className="resource-link">
                <h3>Guidebook Links</h3>
                <h4>Leavenworth Guidebook</h4>
                <a href={areaBlurbs.leavenworth.guide}>Kelly Sheridan</a>
                <h4>Western Washington Bouldering</h4>
                <a href={areaBlurbs.goldbar.guide}>Pablo Zuleta</a>
            </div>
            <div className="resource-link">
                <h3>Too Rainy? Here are gyms to visit</h3>
                <ul>
                    <li><a href={areaBlurbs.gyms.sbp}>Seattle Bouldering Project</a></li>
                    <li><a href={areaBlurbs.gyms.vw}>Vertical World: Seattle</a></li>
                    <li><a href={areaBlurbs.gyms.ulc}>Uplift Climbing</a></li>
                    <li><a href={areaBlurbs.gyms.sg}>Edgeworks</a></li>
                </ul>
            </div>
        </section>
        {/* <section className="videos">

        </section> */}
    </main>
  )
}

export default Gumby

