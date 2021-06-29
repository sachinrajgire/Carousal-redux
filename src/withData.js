// This function takes a component...
import React, { Component } from 'react';

function  withData(WrappedComponent, url) {
    // ...and returns another component...
    return class extends React.Component {
      constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this);
        this.state={
            data:{},
            error:null,
            loading:false 
        }

      }
      componentDidMount(){
        this.setState({loading:true})
         fetch(url)
         .then(response => response.json())
         .then(json => {
             console.log(json,'json');
           this.setState({loading:false})
           this.setState({data:json})
         })
         .catch(e => {
           this.setState({loading:false})
           this.setState({error:e})
         })
       
       }
      
  
      render() {
        console.log(this.state,'this.state FROM HOC ');
        console.log(this.props,'this.props FROM HOC ');

        // ... and renders the wrapped component with the fresh data!
        // Notice that we pass through any additional props
        return <WrappedComponent 
        data={this.state.data} 
        error={this.state.error} 
        loading={this.state.loading} 
        {...this.props} 
        
        />;
      }
    };
  }

  export default withData