import React, {Component} from 'react';
import ImagePicker from './ImagePicker';
import MemePreview from './MemePreview';
import TextInputs from './TextInputs';

class MemeEditor extends Component {
    render() {
        const { images, topText, bottomText, selectedImage, selectPicture, setTopText, setBottomText} = this.props
        return(
            <div>
                <ImagePicker images={images} selectedImage={selectedImage} selectPicture={selectPicture}/>
                <MemePreview selectedImage={selectedImage} topText={topText} bottomText={bottomText}/>
                <TextInputs topText={topText} bottomText={bottomText} setTopText={setTopText} setBottomText={setBottomText}/>
            </div>
        )
    }
}

export default MemeEditor;