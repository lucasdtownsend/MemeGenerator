import React, { Component } from 'react';
import MemeEditor from './MemeEditor';
import cat from './chemistry_cat.jpeg'
import boramir from './one_does_not_simply.jpeg'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
        images: [cat, boramir],
        topText: '',
        bottomText: '',
        selectedImage: cat
    }
}

selectPicture = (image) => {
  const imageSource = image.target.src;
  this.setState({selectedImage: imageSource})
}

setTopText = (topText) =>{
  const text = topText.target.value;
  this.setState({topText: text.toUpperCase()})
}

setBottomText = (bottomText) =>{
  const text = bottomText.target.value;
  this.setState({bottomText: text.toUpperCase()})
}

  render() {
    return (
      <div className="App">
        <MemeEditor 
        images={this.state.images} 
        topText={this.state.topText} 
        bottomText={this.state.bottomText} 
        selectedImage={this.state.selectedImage}
        selectPicture={this.selectPicture}
        setTopText={this.setTopText}
        setBottomText={this.setBottomText}/>
      </div>
    );
  }
}

export default App;
