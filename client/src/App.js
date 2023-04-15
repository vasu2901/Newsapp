import "./App.css";
import React, { Component } from "react"
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import LoadingBar from "react-top-loading-bar"
export default class App extends Component {

  
  apikey = 'cb24506b5f17478aa39f6506b69be1bb'
  state = {
    progress: 55,
  }
  setProgress = (progress) =>{
    this.setState({
      progress: progress    
    })
  };
  render() {
    console.log('cb24506b5f17478aa39f6506b69be1bb')
    
    return (
      <div>
      <Router>
      < Navbar />
      <LoadingBar color='#f11946'
      height={3}
        progress={this.state.progress} />
      <Routes>
      <Route path = "/" element={ <News setProgress={this.setProgress} apikey={this.apikey} key="general"  country="in" category='general' />} ></Route>
      <Route path = "/" element={<News setProgress={this.setProgress} apikey={this.apikey} key="home"  country="in" category='general'/>}> </Route>
      <Route path = "/business" element={<News setProgress={this.setProgress}  apikey={this.apikey} key="business"  country="in" category='business'/>}/>
      <Route path = "/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment"  country="in" category="entertainment"/>}/>
      <Route path = "/health" element={<News setProgress={this.setProgress}  apikey={this.apikey} key="health"  country="in" category="health"/>}/>
      <Route path = "/sports" element={<News setProgress={this.setProgress} apikey={this.apikey} key="sports"  country="in" category="sports"/>}/>
      <Route path = "/science" element={<News setProgress={this.setProgress} apikey={this.apikey} key="science"  country="in" category="science"/>}/>
      <Route path = "/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology"  country="in" category="technology"/>}/>
      </Routes>
      </Router>
      </div>
    )
  }
}

