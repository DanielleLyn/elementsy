import React, { Component } from 'react';

import axios from 'axios';
import {Button, Modal} from 'react-bootstrap';

 
export default class Tarot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: [],
            myCard:[],
           
            // cards:[],


        }
        this.getOneCard = this.getOneCard.bind(this);
    }
        getOneCard () {

          
            axios.get('https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1').then(res => {
                console.log('******res.data', res)
                this.setState({
                    myCard: res.data.card,
                });
            });
        }

    //   getOneCard=()=>{  // let config = {
            //     headers: {'Access-Control-Allow-Origin': '*'}
            // };
    //       axios.get('https://rws-cards-api.herokuapp.com/api/v1/cards/random')
    //       .then(res => res.json())
    //       .then(res => { 
    //           console.log('json.data', json.data)
    //           this.setState({
    //               isLoaded: true,
    //               card: res.data.card
    //       })
             
       
    render() {
        const oneCard = this.state.myCard
        // const isLoaded = this.state
        console.log('props', this.props)
        console.log('one card******', oneCard);
        
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
                        <div>past</div>
                        <div>present</div>
                        <div>future</div>
                    </div>
                
                </Modal.Body>

                <Modal.Footer>
                <Button onClick={() => this.getOneCard()}>Tell me my fortune</Button> 
                <Button onClick={() => this.props.cancelReading()}>Cancel</Button> 
                </Modal.Footer>
                
                

            </Modal.Dialog>  

               
          
            </div>
           
                
            )
        }
        
    }

