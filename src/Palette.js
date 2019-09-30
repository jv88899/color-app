import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './NavBar'
import './palette.css'

class Palette extends Component {
    state = {
        level: 500
    }

    changeLevel = level => {
        this.setState({ level })
    }

    render() {
        const { colors } = this.props.palette
        const { level } = this.state
        return (
            <div className="palette">
            <Navbar
                level={level}
                changeLevel={this.changeLevel}
            />
                <div className="palette-colors">
                    {colors[level].map( color => {
                        return <ColorBox background={color.hex} name={color.name} />
                    })}
                </div>
            {/* Footer eventually */}
            </div>
        )
    }
}

export default Palette
