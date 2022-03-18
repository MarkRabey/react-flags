# React Native Flags

A React Native component to display country flags with the ISO 3166-1 alpha 2 Standard.

## Table of Content:

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
  - [Variants](#variants)
- [Future Versions](#future-versions)
- [License](#license)

## Installation

```
yarn add @markrabey/react-native-flags
```

## Usage

```jsx
import {View} from 'react-native';
import Flag from '@markrabey/react-native-flags';

function App() {
  return (
    <View>
      <Flag countryCode="CA" />
      <Flag countryCode="CA" variant="flat" />
      <Flag countryCode="CA" size="14" />
    </View>
  );
}
```

## Props

| Prop          | Required | Options                                                  | Default |
| ------------- | -------- | -------------------------------------------------------- | ------- |
| `countryCode` | Yes      | ISO-3166-1 alpha-2 Country Code                          |
| `variant`     | No       | `emoji` , `flat` - see [Variants](#variants) for details | `emoji` |
| `size`        | No       | `number`                                                 | `14`    |

### Variants

Variants offer different styles of flags.

`emoji` - displays the standard flag emoji. The appearance the flags depends on the operating system's use of emojis.

`flat` - displays a `.png` of the flag with a flat style

## Future Versions

React Native Flags is still in active development with new features planned or being considered:

- Additional variants, including a `3d` style
- Color variants - currently planning to offer color or black and white
- Replace `.png` files with `.svg` for better scaling and smaller package size
- New flags to be added:
  - LGBT
  - Canadian Provinces
  - US States
  - Unofficial or dissolved countries
  - Fantasy worlds (Star Wars, LOTR, etc.)

## License

MIT license @ [Mark Rabey](markrabey.com)
