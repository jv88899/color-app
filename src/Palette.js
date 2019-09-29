import React, { Component } from 'react'
import ColorBox from './ColorBox'
import './palette.css'

class Palette extends Component {
    render() {
        return (
            <div className="palette">
            {/* Navbar goes here */}
                <div className="palette-colors">
                    {this.props.colors.map( color => {
                        return <ColorBox background={color.color} name={color.name} />
                    })}
                </div>
            {/* footer eventually */}
            </div>
        )
    }
}

export default Palette
