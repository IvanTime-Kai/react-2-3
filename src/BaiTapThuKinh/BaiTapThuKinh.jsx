import React, { Component } from 'react'
import './BaiTapThuKinh.css'
import dataGlasses from '../Data/dataGlasses.json'
import Glass from './Glass'

export default class BaiTapThuKinh extends Component {


    state = {
        glass: {
            id: 1,
            price: 30,
            name: "GUCCI G8850U",
            url: "./glassesImage/v1.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip."
        }
    }

    renderGlass = () => {
        return dataGlasses.map((glass, index) => {
            return (
                <Glass key={index} glass={glass} selectGlass={this.selectGlass} />
            )
        })
    }

    selectGlass = (glass) => {
        this.setState({
            glass: glass
        })
    }

    render() {
        return (
            <div>
                <div className="container-fluid bg" style={{ backgroundImage: 'url(./glassesImage/background.jpg)' }}>
                    <div className="title">
                        <h1 className="text-center">TRY GLASSES APP ONLINE</h1>
                    </div>
                </div>
                <div className="select_glass">
                    <div className="d-flex justify-content-around">
                        <div className="text-center my-5" style={{ position: 'relative'}}>
                            <img src="./glassesImage/model.jpg" alt="model" />
                            <img src={this.state.glass.url} alt="glass" className="glass_test"/>
                            <div className="info">
                                <h2 className="text-left pl-4 text-white">{this.state.glass.name}</h2>
                                <p>{this.state.glass.desc}</p>
                            </div>
                        </div>
                        <div className="text-center my-5">
                            <img src="./glassesImage/model.jpg" alt="model" />
                        </div>
                    </div>
                    <div className=" container row bg-white py-5 mx-auto" style={{paddingLeft: '100px'}}>
                        {this.renderGlass()}
                    </div>
                </div>
            </div>
        )
    }
}
