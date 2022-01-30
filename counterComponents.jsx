import React, {Component} from 'react';

class Counter extends Component {
    state = {
        value: this.props.value

    };
    //This is one way to bind eventhandlers to this the arrow function below is another but is experimental
    //it seems to be working as of 12/30/21
    // constructor() {
    //     super();
    //    this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = product => {

       this.setState({value: this.state.value +1})  }



    render() {
        console.log(this.props);

        return (
            <div>
                {this.props.children}
                <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.handleIncrement() }
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
        classes += this.state.value === 0 ? "badge-warning" : "badge-primary";
        return classes;
    }

    formatCount() {
        const {value} = this.state;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;