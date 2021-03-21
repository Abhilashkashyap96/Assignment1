import React from 'react';
import "./App.css"; 
import Topbar from './Components/Topbar';
import Cards from './Components/Cards';


class App extends React.Component{
  constructor (props){
    super (props);
    this.state = {
      loading: false,
      data: null
    };
  }

  fetchData = () => {
    this.setState({
      loading: true
    });

    fetch('https://reqres.in/api/users?page=1', {
      method: 'GET'
    }).then((response) => {
      if (response.ok) {
        response.json().then((result) => {
          this.setState({
            loading: false,
            data: result.data
          });
        });
      }
    }).catch((err) => {
      console.log(err);
      this.setState({
        loading: false
      });
    });
  }

  render () {
    return (
      <>
        <Topbar fetchData={this.fetchData} />
        {this.state.loading && <h1>Loading...</h1>}
        {this.state.data && <Cards data={this.state.data} />}
      </>
    );
  }
}

export default App;
