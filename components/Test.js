import {
  StyleSheet,
  Text,
  Image,
  View,
  FlatList,
  Dimensions,
  ImageBackground,
  ScrollView,
  //   Animated,
} from 'react-native';
import {useState, useRef, useEffect} from 'react';

export default function Scroll() {
  const Data = [
    {
      id: '1',
      name: 'Iron Man',
      image:
        'https://cdn.vox-cdn.com/thumbor/l9vD7M4_4IIW9CcvvkjIjy27MmA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21882543/marvel_avengers_a_day_prologue.jpg',
    },
    {
      id: '2',
      name: 'Spider-Man',
      image:
        'https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png',
    },
    {
      id: '3',
      name: 'Venom',
      image:
        'https://www.cnet.com/a/img/resize/b03e1f17e9d2d12377582516fe1906818ea95b4b/hub/2021/09/03/afa4abf1-ea46-45bf-b4d0-84259920a236/qlwgiefucodivdzjgil7.jpg?auto=webp&fit=crop&height=1200&width=1200',
    },
    {
      id: '4',
      name: 'Person',
      image:
        'https://toppng.com/uploads/preview/happy-person-11545688398rslqmyfw4g.png',
    },
  ];

  const [rotation, setRotation] = useState(0);

  const Item = props => {
    let rotation2 = JSON.stringify(rotation) + 'deg';
    // Horrible name ^^^^^
    return (
      <View style={styles.container}>
        <ImageBackground
          resizeMode="cover"
          style={styles.cover_image}
          source={{uri: props.image}}
          blurRadius={3}>
          <Image
            style={[
              styles.image,
              {
                transform: [{rotate: rotation2}],
              },
            ]}
            source={{uri: props.image}}
          />
          <Text style={styles.text}> {props.name}</Text>
        </ImageBackground>
      </View>
    );
  };

  const styles = StyleSheet.create({
    cover_image: {
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      height: 350,
      width: 200,
      borderRadius: 20,
    },
    container: {
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    text: {
      color: 'white',
      fontSize: 40,
    },
  });

  const [pos, setPos] = useState(0);
  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
  const ScrollControll = e => {
    setPos(clamp(e.nativeEvent.contentOffset.x, -45, 45));
    setRotation(clamp(pos, -45, 45));
    return;
  };

  return (
    <View>
      <ScrollView
        onScroll={e => ScrollControll(e)}
        snapToAlignment="start"
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').width}
        horizontal>
        <FlatList
          data={Data}
          renderItem={({item}) => <Item name={item.name} image={item.image} />}
          keyExtractor={item => item.id}
          horizontal
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'collumn',
  },
});
