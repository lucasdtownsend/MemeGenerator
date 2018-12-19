import React, {Component} from 'react';
import './ImagePicker.css'

class ImagePicker extends Component {
    render() {
        const { images, selectPicture, selectedImage} = this.props;
        const displayImageList = images.map((x) => <li><img src={x} className={x===selectedImage?'selectedImage': ''} width='50px' height='50px' onClick={selectPicture}/></li>);
        return(
            <div>
            <li list-style='none' style={{display: 'flex'}}>
                {displayImageList}
            </li>
            </div>
        );
    }
}

export default ImagePicker;