import React, {useState, useEffect} from 'react';
import {Text, View, Image} from 'react-native';

import images from '../../images';
interface Props {
  countryCode: string;
  size?: number;
  style?: any;
  variant?: 'emoji' | 'flat' | '3d';
}

const Flag = ({countryCode, size = 16, style, variant = 'emoji'}: Props) => {
  const [flag, setFlag] = useState<string | null>(null);
  useEffect(() => {
    if (variant === 'emoji') {
      const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt(0));
      setFlag(String.fromCodePoint(...codePoints));
    } else {
      setFlag(countryCode.toLowerCase());
    }
  }, [countryCode, variant]);

  const imageScale = 0.7;

  return (
    <View style={{...style}}>
      {variant === 'emoji' ? (
        <Text style={{fontSize: size}}>{flag}</Text>
      ) : (
        <Image
          source={images[variant][flag]}
          style={{width: size * imageScale * 1.6, height: size * imageScale}}
        />
      )}
    </View>
  );
};

export default Flag;
