import React, { Component } from 'react'
import './color-box.css'

class ColorBox extends Component {
    render() {
        const { name, background } = this.props
        return (
            <div style={{ background }} className="color-box">
                <div className="copy-container">
                    <div className="box-content">
                        <span>{name}</span>
                    </div>
                    <button className="copy-button">
                        Copy
                    </button>
                    <span className="see-more">More</span>
                </div>
            </div>
        )
    }
}

export default ColorBox