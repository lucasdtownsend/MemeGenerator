import React, {Component} from 'react';
import './TextInputs.css'

class TextInputs extends Component {
    render() {
        const { topText, bottomText, setTopText, setBottomText } = this.props;
        return(
            <div>
                <div style={{display:'flex'}}>
                    <p>Top Text</p> 
                    <input type="text" value={topText} onChange={setTopText}/>
                 </div>
                 <div style={{display:'flex'}}>
                    <p>Bottom Text</p>
                    <input type="text" value={bottomText} onChange={setBottomText}/>
                </div>
            </div>
        )
    }
}

export default TextInputs;