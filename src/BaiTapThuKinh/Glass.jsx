import React, { Component } from 'react'
import './BaiTapThuKinh.css'

export default class Glass extends Component {
    render() {
        let {glass, selectGlass} = this.props
        return (
            <div className="col-2 m-2  glass" onClick={() => selectGlass(glass)}>
                <img src={glass.url} alt="glass" width='100%' height='100%'/>
            </div>
        )
    }
}
