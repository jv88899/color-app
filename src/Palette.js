import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Slider from 'rc-slider'
import './palette.css'
import 'rc-slider/assets/index.css'

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
            <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={this.changeLevel}
            />
            {/* Navbar goes here */}
                <div className="palette-colors">
                    {colors[level].map( color => {
                        return <ColorBox background={color.hex} name={color.name} />
                    })}
                </div>
            {/* footer eventually */}
            </div>
        )
    }
}

export default Palette
