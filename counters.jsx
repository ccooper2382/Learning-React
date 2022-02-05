import React, {Component} from 'react';
import Counter from "./counter";

class Counters extends Component {

    render() {
        // this line is argument destructuring so the code is simpler instead of doing this.props.onReset and so on
        // make the const then set it to equal this.props
        const {onReset, counters, onDelete, onIncrement} = this.props;
        return (
            <div>
                <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {counters.map(counter =>
                    <Counter key={counter.id}
                             onDelete={onDelete}
                             onIncrement={onIncrement}
                             counter={counter}>

                    </Counter>
                )}
            </div>
        );
    }
}

export default Counters;