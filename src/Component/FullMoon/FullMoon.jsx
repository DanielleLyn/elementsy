import React, { Component } from 'react';
import axios from 'axios';
import {Button, Modal} from 'react-bootstrap';

export default class Moon extends Component{
    constructor(props){
        super(props);
        this.state={
            moonInfo: '',
            newMoon:'',
        }
        this.getMoonPhase = this.getMoonPhase.bind(this);
        this.getNewMoon = this.getNewMoon.bind(this);
    }

    getMoonPhase(){
        axios.get(`http://api.aerisapi.com/sunmoon/moonphases/search?query=type:full&limit=1&client_id=YOQDOHzNmN2Uw1Yw44Zr1&client_secret=Ato1oZ6uPkFIgjBPNgAS6HHGSdWF0XYbTbGWrYb0`)
        .then(res => {
            console.log('---res.data', res.data.response)
            this.setState({
                moonInfo: res.data.response
            })
            console.log('this.state', this.state)
        })
    }

    getNewMoon(){
        axios.get(`http://api.aerisapi.com/sunmoon/moonphases/search?query=type:new&limit=1&client_id=YOQDOHzNmN2Uw1Yw44Zr1&client_secret=Ato1oZ6uPkFIgjBPNgAS6HHGSdWF0XYbTbGWrYb0`)
        .then(res => {
            console.log('new moon res.data', res.data.response)
            this.setState({
                newMoon: res.data.response
            })
            console.log('this.state', this.state)
        })
    }




    render(){
      
      
        return(

            <div className = 'moonWidget'>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Moon Phase</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div>
                    <div className = 'moon'>
                        <h4>{this.state.moonInfo ? 'the next full moon will be on:' : ''}</h4>
                        <h4>{this.state.moonInfo ? this.state.moonInfo[0].dateTimeISO.split('T')[0] : ''}</h4>
                      
                    </div>
                    <div>
                        <h4>{this.state.newMoon ? 'the next new moon will be on:' : ''}</h4>
                        <h4>{this.state.newMoon ? this.state.newMoon[0].dateTimeISO.split('T')[0] : ''}</h4>
                    </div>
                    </div>

                </Modal.Body>

                <Modal.Footer>
                <Button onClick={() => this.getNewMoon()}>View Next New Moon</Button>
                <Button onClick={() => this.getMoonPhase()}>View Next Full Moon</Button> 
                <Button onClick={() => this.props.cancelMoon()}>Cancel</Button> 
                </Modal.Footer>
               
            </Modal.Dialog>  

            </div>  
        )
    }
}

