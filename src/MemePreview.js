import React, {Component} from 'react';
import './MemePreview.css';

class MemePreview extends Component {
    render() {
        const {selectedImage, topText, bottomText} = this.props;
        return(
            <div>
                <p className="topOverlay">{topText}</p>
                <img src={selectedImage} className="previewImage" width='500px' height='500px'/>
                <p className="bottomOverlay">{bottomText}</p>
            </div>
        );
    }
}

export default MemePreview;