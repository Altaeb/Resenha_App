import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ImagePicker, Permissions } from 'expo';
import * as firebase from 'firebase';

class ImageUpload extends React.PureComponent {
    askPermissionsAsync = async () => {
        await Permissions.askAsync(Permissions.CAMERA);
        await Permissions.askAsync(Permissions.CAMERA_ROLL);
    }

    onChooseImagePress = async (fromCamera) => {

        await this.askPermissionsAsync();
        let result = fromCamera ?
            await ImagePicker.launchCameraAsync() :
            await ImagePicker.launchImageLibraryAsync();

        if (!result.cancelled) {
            this.uploadImage(result.uri, this.props.path)
                .then(() => {
                    console.log("Success");
                })

                .catch((error) => {
                    console.log(error);
                })


        }
    }

    uploadImage = async (uri, path = 'global') => {
        const response = await fetch(uri);
        const blob = await response.blob();

        let ref = firebase.storage().ref().child(`images/${path}/IMG_${Math.random(4000)}`);

        return ref.put(blob);
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.onChooseImagePress(this.props.fromCamera)}>
                    {this.props.children}
                </TouchableOpacity>
            </View>
        )
    }
}

export default ImageUpload;