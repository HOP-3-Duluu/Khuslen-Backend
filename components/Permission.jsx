import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Image } from 'react-native';
import { check, PERMISSIONS, request } from 'react-native-permissions'
import { launchImageLibrary } from 'react-native-image-picker'
import Contacts from 'react-native-contacts';

export default function Permission() {
    const [image, setImage] = useState();


    useEffect(() => {
        const handleCameraStatus = async () => {
            const result = await check(PERMISSIONS.IOS.CAMERA)
            console.log(result)
        }
        handleCameraStatus();
        const handleLibraryStatus = async () => {
            const result = await check(PERMISSIONS.IOS.CAMERA)
            console.log(result)
        }
        handleLibraryStatus();


    }, []);
    const requestCameraPermission = async () => {
        try {
            let cameraResult
            cameraResult = await request(PERMISSIONS.IOS.CAMERA)
            console.log(cameraResult, " cameraResult")
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    const requestLibraryPermission = async () => {
        try {
            let libraryResult
            libraryResult = await request(PERMISSIONS.IOS.PHOTO_LIBRARY)
            console.log(libraryResult, " libraryResult")
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    const requestContactsPermission = async () => {
        try {
            let contactsResult
            contactsResult = await request(PERMISSIONS.IOS.CONTACTS)
            console.log(contactsResult, " contactsResult")
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    const getContacts = async () => {
        Contacts.getAll((err, contacts) => {
            if (err) {
                throw err;
            }
            console.log(contacts)
        })
    }
    const pickImage = async () => {
        let options = {
            selectionLimit: 1,
            mediaType: 'photo',
            includeBase64: false,
            storageOptions: {
                skipBackup: true,
                path: 'images',

            },
        }
        launchImageLibrary(options, (response) => {
            console.log('Responce (url): ', response.assets[0].uri)
            setImage(response.assets[0].uri)
        })
    }

    return (
        <View style={styles.thingy}>
            <Button title='Camera Permission' onPress={requestCameraPermission}></Button>
            <Button title='Library Persmission' onPress={requestLibraryPermission}></Button>
            <Button title='Contacts Persmission' onPress={requestContactsPermission}></Button>
            <Button title='Pick Image' onPress={pickImage}></Button>
            <Button title='Get Contacts' onPress={getContacts}></Button>
            <Image style={styles.imagee} source={{ uri: image }} />
        </View>
    );
}
const styles = StyleSheet.create({
    thingy: {
        height: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagee: {
        width: 200,
        height: 200
    }
});