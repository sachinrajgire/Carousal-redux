

import React, { Component } from 'react';
import withData from './withData'

class Appy extends Component {
    constructor(props) {
        super(props)
        // this.state={
        //     data:{},
        //     error:null,
        //     loading:false 
        // }
    }
    
// componentDidMount(){
//  this.setState({loading:true})
//   fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => {
//       console.log(json,'json');
//     this.setState({loading:false})
//     this.setState({data:json})
//   })
//   .catch(e => {
//     this.setState({loading:false})
//     this.setState({error:e})
//   })

// }
    render() {

        if(this.props.existingCustomer) {
            return 'Existing Customer '
        }
        console.log(this.state,'this.state ');
        console.log(this.props,'this.props');
        const {loading, data, error} = this.props
        if(loading) {
         return 'loading'
        }
        return (
            <div>
                {data.title}
            </div>
        );
    }
}

export default withData(Appy,'https://jsonplaceholder.typicode.com/todos/1');

