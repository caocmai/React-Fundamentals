import react, { Component, useState } from 'react'

// export default class Calculator extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             bill: 78,
//             tip: 20,
//             split: 9, 
//             total: null,
//         }
//     }

//     render() {


//         this.state.total = this.state.bill * (this.state.tip/100) / this.state.split

//         return (
//             <div>

//                 <h1>Tip Calculator</h1>
//                 <h2>Total: ${ (this.state.total).toFixed(2) }</h2>

//                 <label>
//                     Bill 
//                     <input type="number"
//                         value={this.state.bill}
//                         onChange={ (e) => { this.setState({ bill: e.target.value })}}
//                     />
//                 </label>

//                 <label>
//                     Tip % 
//                     <input type="number"
//                         value={ this.state.tip }
//                         onChange={ (e) => { this.setState({ tip: e.target.value }) } }
        
//                     />
//                 </label>

//                 <label>
//                     Split Between
//                     <input type="number"
//                         value={this.state.split}
//                         onChange={ (e) => { this.setState( { split: e.target.value} )}}
//                     />
//                     People
//                 </label>

//             </div>
//         )

//     }
// }

export default function Calculator () {
    const [ tip, setTip ] = useState(14)
    const [ bill, setBill ] = useState()
    const [ partyOf, setPartyOf ] = useState()
    const total = (bill * (1 + tip/100)) / partyOf

    return (
        <div>
            <h1>Total Per Party: ${total.toFixed(2)}</h1>
            <h2>Bill Total: ${ (bill * (1 + tip/100)).toFixed(2) }</h2>
            <label>
                Bill: ${bill}
                <input 
                    value={bill}
                    type="number"
                    onChange={ (e) => { setBill(e.target.value) }}
                />
            </label>

            <label>
                Tip: {tip}%
                <input 
                    value={tip}
                    type="number"
                    onChange={ (e) => { setTip(e.target.value) }}
                />
            </label>

            <label>
                Set Party Of
                <input 
                    value={partyOf}
                    type="number"
                    onChange={
                        (e) => {
                            setPartyOf(e.target.value)
                        }
                    }
                />
            </label>

        </div>
        )
}