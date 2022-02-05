

//stateless functional component
//using argument destructuring instead of passing props to the Navbar function use parenthesis and curly brackets to
//pass only the methods needed. changing the prop.totalCounters to just totalCounters
const Navbar = ({totalCounters}) => {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar{" "}</a>
                    <span className="badge badge-pill badge-secondary">{totalCounters}</span>
                </div>
            </nav>
        );
    }


export default Navbar;