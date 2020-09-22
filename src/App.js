import React, {Component} from 'react'

export default class App extends Component {
    state = {
        astros: []
    }
    fetchApi = ()=>{
        fetch('http://api.open-notify.org/astros.json')
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                astros: json
            })
        })
    }

    componentDidMount(){
        this.fetchApi()
    }

    render(){
        return(
            <div>
             {this.state.astros}
            </div>
        )
    }
}