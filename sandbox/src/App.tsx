import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Flag, {PlatformInfo, countries} from '@markrabey/react-native-flags';

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity
    style={{
      borderBottomColor: '#ddd',
      borderBottomWidth: 1,
      ...backgroundColor,
      alignItems: 'center',
      flexDirection: 'row',
      padding: 10,
    }}
    onPress={onPress}>
    <Text style={{...textColor, fontSize: 14, flex: 1}}>{item.name}</Text>
    <Flag size={24} countryCode={item.code} />
    <Flag size={24} countryCode={item.code} variant="flat" />
  </TouchableOpacity>
);

const App = () => {
  const [selectedCountryCode, setSelectedCountryCode] = useState<number | null>(
    null,
  );
  const renderItem = ({item}) => {
    const isActive = item.code === selectedCountryCode;
    const backgroundColor = isActive ? '#ddd' : '#fff';
    const color = isActive ? '#121212' : '#333';

    return (
      <Item
        item={item}
        onPress={() =>
          isActive
            ? setSelectedCountryCode(null)
            : setSelectedCountryCode(item.code)
        }
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{padding: 6, flex: 1}}>
        <PlatformInfo />
        <Flag countryCode="CA" variant="flat" />
        <View style={{flex: 1}}>
          <FlatList
            style={{marginTop: 12}}
            data={countries}
            renderItem={renderItem}
            keyExtractor={({code}) => code}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
