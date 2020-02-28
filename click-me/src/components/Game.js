import React, { Component } from 'react';
import numbers from '../numbers.json';
import NumberCard from './NumbersCard';
class Game extends Component {
    state = {
        numbers,
        score: 0,
        topScore: 0
    }
    componentDidMount(){
        this.setState({numbers:this.shuffledata(this.state.numbers)})
    }
    shuffledata = (numbers) => {
        let i = numbers.length -1; //2
        while(i>0){
            const randomNumber = Math.floor(Math.random() *(i+1))//1
            const temp = numbers[i]; //img2
            numbers[i] = numbers[randomNumber]; //
            numbers[randomNumber] = temp;
            i--;
        }
    }
    handleNumberClick = (id) => {
        console.log("clicked on NUmber card: ", +id)
        let guessedCorrectly = false;
        const newNumbers = this.state.numbers.map(number => {
            const newNumber = {...number};
            if(newNumber.id === id){
                if(!newNumber.clicked){
                    newNumber.clicked = true;
                    guessedCorrectly = true;
                }
            }
            return newNumber
        })
        guessedCorrectly ? correctGuess(newNumbers) : incorrectGuess(newNumbers)
    }
    render() {
        return (
            <div>
                {this.state.numbers.map(number => (
                    <NumberCard key={number.id}
                        id={number.id}
                        image={number.img}
                        handleClick = {this.handleNumberClick}
                    />
                ))}
                
            </div>
        );
    }
}

export default Game;