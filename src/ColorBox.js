import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './color-box.css'

class ColorBox extends Component {
    state = {
        copied: false
    }

    changeCopyState = () => {
        this.setState({ copied: true }, () => {
            setTimeout( () => this.setState({ copied: false }), 1500)
        })
    }

    render() {
        const { name, background } = this.props
        const { copied } = this.state
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className="color-box">
                    <div style={{ background }} className={`copy-overlay ${copied && "show"}`}></div>
                    <div className={`copy-msg ${copied && "show"}`}>
                        <h1>Copied!</h1>
                        <p>{background}</p>
                    </div>
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
            </CopyToClipboard>
        )
    }
}

export default ColorBox