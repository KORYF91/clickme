import React, { Component } from 'react';
import numbers from '../numbers.json';
import NumberCard from './NumbersCard';
import Navigation from './Navigation.js';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

class Game extends Component {
    state = {
        numbers,
        clickedArr: [],
        score: 0,
        topScore: 0
    }
    componentDidMount(){
      console.log(this.state.numbers)
        this.setState(
          {
            numbers:this.shuffledata(this.state.numbers)
          }
        )
    }
    shuffledata = (numbers) => {
      console.log(numbers)
      console.log("shuffle data")
        let i = numbers.length -1; //2
        while(i>0){
            const randomNumber = Math.floor(Math.random() *(i+1))//1
            const temp = numbers[i]; //img2
            numbers[i] = numbers[randomNumber]; //
            numbers[randomNumber] = temp;
            i--;
        }
        return numbers
    }
    handleNumberClick = (id) => {
        console.log("clicked")
        if (this.state.clickedArr.includes(id)) {
          this.setState({
            score: 0,
            clickedArr: []
          });
          setTimeout(() => {
            this.setState({message: "Click an image to Play"})
          }, 3000)
        } else {
          var newScore = this.state.score + 1;
          var newTopScore = Math.max(newScore, this.state.topScore)
          this.setState({
            clickedArr: this.state.clickedArr.concat(id),
            topScore: newTopScore,
            score: newScore
          });
          console.log("new top score: " +this.state.topScore)
          setTimeout(() => {
            this.setState({message: ""})
          }, 3000)
        }
        this.shuffledata(this.state.numbers);
      }
    render() {
        return (
           <>
               <Navigation  score={this.state.score} topScore={this.state.topScore} />
               <div>
                 <Container>
                   <Row>
                      <Col>
                        {this.state.numbers.map(number => (
                              <NumberCard 
                                  key={number.id}
                                  id={number.id}
                                  image={number.img}
                                  handleClick = {this.handleNumberClick}
                              />
                          ))}   
                      </Col>
                   </Row>
                 </Container>
               </div>
                      
            </>
        );
    }
}

export default Game