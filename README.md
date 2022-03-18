# React Flags

![coverage-branches](./coverage/badge-branches.svg)
![coverage-functions](./coverage/badge-functions.svg)
![coverage-lines](./coverage/badge-lines.svg)
![coverage-statements](./coverage/badge-statements.svg)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

React componets to display various flags.

## Table of Contents:

- [Packages](#packages)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Future Versions](#future-versions)
- [License](#license)

## Packages

React Flags consists of three packages:

- [`@markrabey/react-flags`](/packages/web/) - for projects using [React](https://reactjs.org/) (ReactJS)
- [`@markrabey/react-native-flags`](/packages/native/) - for projects using [React Native](https://reactnative.dev/)
- [`@markrabey/react-native-web-flags`](/packages/web/) - for projects using [React Native Web](https://necolas.github.io/react-native-web/)

## Installation and Setup

For installation and setup details, see the document for specific [package](#packages) being being used.

## Usage

```jsx
import {View} from 'react-native';
// Import `Flag` from selected package
import Flag from '@markrabey/react-flags';
import Flag from '@markrabey/react-native-flags';
import Flag from '@markrabey/react-native-web-flags';

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

React Flags is in active development with new features planned or being considered:

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
