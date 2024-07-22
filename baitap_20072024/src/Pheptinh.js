import {Component} from "react";

export default class Pheptinh extends Component{
    constructor() {
        super();
        this.state ={
            add: 0,
            sub:0,
            multi:1,
            division: 1
        }
    }
    render() {
        return(
            <> cộng, trừ, nhân, chia {this.state.add}


            </>
                )
    }
}