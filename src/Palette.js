import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './NavBar'
import './palette.css'

class Palette extends Component {
    state = {
        level: 500,
        format: 'hex'
    }

    changeLevel = level => {
        this.setState({ level })
    }

    changeFormat = val => {
        this.setState({ format: val })
    }

    render() {
        const { colors } = this.props.palette
        const { level, format } = this.state
        return (
            <div className="palette">
            <Navbar
                level={level}
                changeLevel={this.changeLevel}
                handleChange={this.changeFormat}
            />
                <div className="palette-colors">
                    {colors[level].map( color => {
                        return (
                            <ColorBox
                                background={color[format]}
                                name={color.name}
                            />
                        )
                    })}
                </div>
            {/* Footer eventually */}
            </div>
        )
    }
}

export default Palette
