import React, { useRef, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {
    LongPressGestureHandler,
    TapGestureHandler,
    State,
} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function Gestures() {
    const doubleTapRef = useRef(null);
    const LongPress = event => {
        if (event.nativeEvent.state === State.ACTIVE) {
            alert('LONG PRESS');
        }
    };
    const SingleTap = event => {
        if (event.nativeEvent.state === State.ACTIVE) {
            alert('ONE TAP');
        }
    };
    const DoubleTap = event => {
        if (event.nativeEvent.state === State.ACTIVE) {
            alert('DOUBLE TAP');
        }
    };

    const Swipe = event => {
        alert('SWIPE');
    };


    return (
        <View style={styles.thingy}>
            <Swipeable
                activeOffsetX={[-30, 30]}
                failOffsetY={[-30, 30]}
                renderRightActions={Swipe}
            >
                <TapGestureHandler
                    onHandlerStateChange={SingleTap}
                    waitFor={doubleTapRef}>
                    <TapGestureHandler
                        ref={doubleTapRef}
                        onHandlerStateChange={DoubleTap}
                        numberOfTaps={2}>
                        <LongPressGestureHandler
                            onHandlerStateChange={LongPress}
                            minDurationMs={800}>
                            <Image
                                style={styles.img}
                                source={{
                                    uri: 'https://play-lh.googleusercontent.com/faeQHD0g9jPHIvoxZWqEzJBzrrjItahQ_5rAy1OcUuF-qC79CZ9AW2SQnyiEUDAGtrOf',
                                }}
                            />
                        </LongPressGestureHandler>
                    </TapGestureHandler>
                </TapGestureHandler>
            </Swipeable>
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
    img: {
        width: 200,
        height: 200,
    },
});  