import React from "react";
import axios from 'axios';
import './App.js';

 
export default class Tarot extends Component {
    constructor() {
        super();
        this.state = {
            card: [],
            myCards:[],
            // cards:[],
        }
    }
        componentDidMount() {
            axios.get('/api/cards/random1').then(res => {
                this.setState({
                    myCards: res.data.card
                });
            });
        }

      getOneCard=()=>{
          axios.get('/api/v1/cards/random').then(res =>{
              this.setState({
                  card: res.data.card
              })
          })
      }  
    
    render() {
        const oneCard = this.state.card
        return (
            <div className='tarotWidget'>

               <div className='getOne'>
               </div>
                <Button>Get One </Button>
                <Button> Get Three </Button
            </div>
        );
    }
}
