import React from 'react';
import Input from '@material-ui/core/Input';
import './App.css'

class PinEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { texts: [] }
    }

    updateText(index, text, tpPrevious, tpNext) {

        console.log('text', text.target.value)
        text=text.target.value
        const items = this.state.texts;
        items[index] = text;
        this.setState({
            items,
        })

        let pin = ''

        items.map((i) => pin = pin + i)


        if (text !== '') {
            if (tpNext != null)
                tpNext.focus()

        } else {
            if (tpPrevious != null)
                tpPrevious.focus()
        }


    }

    render() {
        return (
            <div style={{
                display: 'flex', flexDirection: 'row',
                justifyContent: 'space-between', flex: 1,
                paddingLeft: 50, paddingRight: 50
            }}>

                <input
                    ref={(input) => { this.tp0 = input; }}
                    className="pin"
                    maxLength={1}
                    type="password" pattern="[0-9]*" inputmode="numeric"
                    onChange={(text) => this.updateText(0, text, null, this.tp1)}
                />

                <input
                    ref={(input) => { this.tp1 = input; }}
                    className="pin"
                    type="password" pattern="[0-9]*" inputmode="numeric"
                    onChange={(text) => this.updateText(1, text, this.tp0, this.tp2)}
                    maxLength={1}

                />
                <input
                    ref={(input) => { this.tp2 = input; }}
                    className="pin"
                    type="password" pattern="[0-9]*" inputmode="numeric"
                    onChange={(text) => this.updateText(2, text, this.tp1, this.tp3)}
                    maxLength={1}

                />
                <input
                    ref={(input) => { this.tp3 = input; }}
                    className="pin"
                    maxLength={1}
                    type="password" pattern="[0-9]*" inputmode="numeric"
                    onChange={(text) => this.updateText(3, text, this.tp2, this.tp4)}

                />
                <input
                    onChange={(text) => this.updateText(4, text, this.tp3, this.tp5)}
                    ref={(input) => { this.tp4 = input; }}
                    className="pin"
                    type="password" pattern="[0-9]*" inputmode="numeric"
                    maxLength={1}

                />
                <input
                    ref={(input) => { this.tp5 = input; }}
                    className="pin"
                    type="password" pattern="[0-9]*" inputmode="numeric"
                    onChange={(text) => this.updateText(5, text, this.tp4, null)}
                    maxLength={1}

                />


            </div>
        );
    }
}

const styles = theme => ({
    input: {
        height: 40, display: 'flex', flexWrap: 'wrap', flex: 1 / 7, fontSize: 16, textAlign: 'center'
    },
});



export default PinEntry;