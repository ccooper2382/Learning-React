import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0

    };
    //This is one way to bind eventhandlers to this the arrow function below is another but is experimental
    //it seems to be working as of 12/30/21
    // constructor() {
    //     super();
    //    this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = product => {
        console.log(product);
       this.setState({count: this.state.count +1})  }



    render() {

        return (
            <div>
                <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.handleIncrement("rawr") }
                        className="btn btn-secondary btn-sm">Increment</button>
            </div>

        );

    }

    getBadgeClasses() {
        let classes = "badge m-2 ";
        // the tutorial wants to put badge- in the above statement then just append
        // warning and primary below.  I'm keeping this because I feel it is more readable
        // for someone not familiar with the code.  Though this way I need a space either after m-2 or
        //before badge-warning/primary
        classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;