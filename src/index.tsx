import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';

interface Props {
  countryCode: string;
  size?: number;
  style?: any;
}

const Flag = ({countryCode, size = 32, style}: Props) => {
  const [flagEmoji, setFlagEmoji] = useState<string | null>(null);
  useEffect(() => {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt(0));
    setFlagEmoji(String.fromCodePoint(...codePoints));
  }, [countryCode]);

  return <Text style={{fontSize: size}}>{flagEmoji}</Text>;
};

export default Flag;
