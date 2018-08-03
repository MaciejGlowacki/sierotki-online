import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Sierotki from './Sierotki';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <Paper zDepth={2}>
                        <header className="App-header">
                            <h1 className="App-title">&lt;sierotki&gt;</h1>
                            <h2 className="App-description">
                                Application used to add "&amp;nbsp;" in the HTML code after a single letter in the text.
                                <span>Just paste your HTML code and copy the generated code</span>
                            </h2>
                        </header>
                    </Paper>
                    <Sierotki/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
