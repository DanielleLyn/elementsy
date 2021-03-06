import React, { Component } from 'react';
import axios from 'axios';
import {Button, Modal} from 'react-bootstrap';
import './Tarot.css';
 
export default class Tarot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: [],
            myCards:[],
           
           
        }
        this.getFortune = this.getFortune.bind(this);
    }
        getFortune () {
            axios.get('https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3').then(res => {
                console.log('******res.data.cards', res.data.cards)
                this.setState({
                    myCards: res.data.cards,
                });
                console.log('---state', this.state)
                console.log('first card', this.state.myCards[0])
            });
        }

    render() {
      
        console.log('first card', this.state.myCards)
      return(
    

                       <div className = 'tarotWidget'>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Tarot Reading</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className = 'tarotReading'>
                        {/* {cards} */}
                        
                        <div>
                            <h4>{this.state.myCards[0] ? 'Past:' : ''}</h4>
                            <h3>{this.state.myCards[0] ? this.state.myCards[0].name : ''}</h3>
                            <h6>{this.state.myCards[0] ? 'Meaning:' : ''}</h6>
                            <p>{this.state.myCards[0] ? this.state.myCards[0].meaning_up : ''}</p>
                        </div>

                        <div>
                            <h4>{this.state.myCards[1] ? 'Present:' : ''} </h4>
                            <h3>{this.state.myCards[1] ? this.state.myCards[1].name : ''}</h3>
                            <h6>{this.state.myCards[1] ? 'Meaning:' : ''} </h6>
                            <p>{this.state.myCards[1] ? this.state.myCards[1].meaning_up : ''}</p>
                        </div>

                        <div>
                            <h4>{this.state.myCards[2] ? 'Future:' : ''}</h4>
                            <h3>{this.state.myCards[2] ? this.state.myCards[2].name : ''}</h3>
                            <h6>{this.state.myCards[2] ? 'Meaning:' : ''}</h6>
                            <p>{this.state.myCards[2] ? this.state.myCards[2].meaning_up : ''}</p>
                        </div>
                    </div>
                
                </Modal.Body>

                <Modal.Footer>
                <Button className='button' onClick={() => this.getFortune()}>Tell me my fortune</Button> 
                <Button className='button' onClick={() => this.props.cancelReading()}>Cancel</Button> 
                </Modal.Footer>
                

            </Modal.Dialog>  

            </div>
           
                
            )
        }
        
    }

