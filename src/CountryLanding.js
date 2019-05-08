import React from 'react';

class CountryLanding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount()
    {
        console.log(this.props.location.state)
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default CountryLanding;