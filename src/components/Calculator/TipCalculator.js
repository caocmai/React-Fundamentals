import react, { Component, useState } from 'react'
import './TipCalculator.css'
import API from '../API/API'


// Building a Tip Calculator using React with either hooks or class
// Uncomment one or the other to test it out, and not both!

///////////////////////////////////////////
//            USING CLASS               //
/////////////////////////////////////////

export default class TipCalculator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bill: null,
            tip: 20,
            split: 1, 
            total: 0,
            answer: '',
        }
        
    }

    // state = { answer: '' }
    handleSubmit = (event) => {
        this.setState({ answer: event.target.name });
        // setTimeout(() => { this.setState({ answer: '' }) }, 2000);

    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.state.answer === 'yes'  && prevState.answer != '') {
    //         this.setState({ answer: '' })
    //     }
    // }

    // saveChanges = () => {
    //     ..
    //     this.setState({ showSnackbar: true, message: 'Saved successfully' }, () => {
    //       setTimeout(() => { this.setState({ showSnackbar: false }) }, 2000);
    //     })
    //   };
    

    render() {
        this.state.total = (this.state.bill * (1 + (this.state.tip/100)))/ this.state.split

        return (
            <div>

        <h1>(CLASS) Tip Calculator Bill Total: ${(this.state.bill * (1+this.state.tip/100)).toFixed(2)}</h1>
                <h2>Total Per Person: ${ (this.state.total).toFixed(2) }</h2>

                <label>
                    Bill $
                    <input type="number"
                        value={this.state.bill}
                        onChange={ (e) => { this.setState({ bill: e.target.value })}}
                    />
                </label>

                <label>
                    Tip % 
                    <input type="number"
                        value={ this.state.tip }
                        onChange={ (e) => { this.setState({ tip: e.target.value }) } }
        
                    />
                </label>

                <label>
                    Split Between
                    <input type="number"
                        value={this.state.split}
                        onChange={ (e) => { this.setState( { split: e.target.value} )}}
                    />
                    People
                </label>

                <div>
        {/* {this.state.answer === "yes" && <API data={this.state}/>} */}
        {/* <button onClick={this.handleSubmit} name="yes">Search</button>
        <button onClick={this.handleSubmit} name="no">Clear</button> */}
      </div>

            </div>
        )
    }
}


/////////////////////////////////////////
//    USING HOOKS                     //
///////////////////////////////////////

// export default function TipCalculator () {
//     const [ tip, setTip ] = useState(20)
//     let [ bill, setBill ] = useState()
//     const [ partyOf, setPartyOf ] = useState(1)
//     let total = (bill * (1 + tip/100)) / partyOf

//     if (isNaN(bill) && isNaN(total)) {
//         total = 0
//         bill = 0
//     }

//     return (
//         <div>
//             <h1>(HOOKS) Tip Calculator Bill Total: ${ (bill * (1 + tip/100)).toFixed(2) }</h1>
//             <h2>Total Per Person: ${total.toFixed(2)}</h2>
//             <label>
//                 Bill: ${bill}
//                 <input 
//                     value={bill}
//                     type="number"
//                     onChange={ (e) => { setBill(e.target.value) }}
//                 />
//             </label>

//             <label>
//                 Tip: {tip}%
//                 <input 
//                     value={tip}
//                     type="number"
//                     onChange={ (e) => { setTip(e.target.value) }}
//                 />
//             </label>

//             <label>
//                 Set Party Of
//                 <input 
//                     value={partyOf}
//                     type="number"
//                     onChange={
//                         (e) => {
//                             setPartyOf(e.target.value)
//                         }
//                     }
//                 />
//             </label>

//         </div>
//         )
// }