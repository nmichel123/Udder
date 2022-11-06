//Here integrate a news API & format with CSS to display on the right panel 
import React from 'react'
import './style.css'

class WhatsHappeningPanel extends React.Component {
    render () {
        return (
            <div className='WhatsHappeningBox'>
                <h5 id='whatsHappeningID' className='whatsHappeningClass' style={{color:'white'}}>What's Happening</h5>
            </div>
        )
    }
}

export default WhatsHappeningPanel 