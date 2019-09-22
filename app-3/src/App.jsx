import React, { Component } from 'react';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from './Spinner';

class App extends Component {

    state = {
        lat: null,
        errorMessage: '',
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return (<span>{this.state.errorMessage}</span>)
        }

        if (!this.state.errorMessage && this.state.lat) {
            return (
                <React.Fragment >
                    <SeasonDisplay
                        lat={this.state.lat}
                    />
                </React.Fragment >
            )
        }
        return <Spinner message="Please accept location request" />;
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default App;
