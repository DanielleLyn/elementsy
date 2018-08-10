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
           
            // cards:[],


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
      
        // console.log('props', this.props)
        // console.log('one card******', oneCard);
        // const cards = this.state.myCards.map((e,i) =>{
        //     return <div key={e.id}>
        //     <h6>Name: </h6>
        //     <h3>{e.name}</h3>
        //     <h6>Meaning: </h6>
        //     <p>{e.meaning_up}</p>
        //     </div>
        // })

        console.log('first card', this.state.myCards)
      return(

                
        //    <div className =  {props.showMenu ? "menuopen" : "menu"}>
        //    <EditModal cancelMenu = {props.cancelMenu} listing={listing} />

             

                       <div className = 'tarotWidget'>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Tarot Reading</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className = 'tarotReading'>
                        {/* {cards} */}
                        <div>
                            <h5>{this.state.myCards[0] ? 'Past:' : ''}</h5>
                            <h3>{this.state.myCards[0] ? this.state.myCards[0].name : ''}</h3>
                            <h6>{this.state.myCards[0] ? 'Meaning:' : ''}</h6>
                            <p>{this.state.myCards[0] ? this.state.myCards[0].meaning_up : ''}</p>
                        </div>

                        <div>
                            <h5>{this.state.myCards[1] ? 'Present:' : ''} </h5>
                            <h3>{this.state.myCards[1] ? this.state.myCards[1].name : ''}</h3>
                            <h6>{this.state.myCards[1] ? 'Meaning:' : ''} </h6>
                            <p>{this.state.myCards[1] ? this.state.myCards[1].meaning_up : ''}</p>
                        </div>

                        <div>
                            <h5>{this.state.myCards[2] ? 'Future:' : ''}</h5>
                            <h3>{this.state.myCards[2] ? this.state.myCards[2].name : ''}</h3>
                            <h6>{this.state.myCards[2] ? 'Meaning:' : ''}</h6>
                            <p>{this.state.myCards[2] ? this.state.myCards[2].meaning_up : ''}</p>
                        </div>
                    </div>
                
                </Modal.Body>

                <Modal.Footer>
                <Button onClick={() => this.getFortune()}>Tell me my fortune</Button> 
                <Button onClick={() => this.props.cancelReading()}>Cancel</Button> 
                </Modal.Footer>
                

            </Modal.Dialog>  

            </div>
           
                
            )
        }
        
    }

