react-native-gravatar
=============

### Install

```shell
npm install --save react-native-gravatar
```

### Use

eg.

```js
import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {Gravatar, GravatarApi} from 'react-native-gravatar';

class MyComponent extends Component {
	render() {

		return (
      <View >
        <Gravatar options={{
              email: 'example@gmail.com',
              parameters: { "size": "200", "d": "mm" },
              secure: true
            }}
            style={styles.roundedProfileImage} />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  roundedProfileImage: {
    width:100, height:100, borderWidth:3,
    borderColor:'white', borderRadius:50
  }
})

```

For a better idea of what options can be passed, please view [gravatar-api](https://www.npmjs.com/package/gravatar-api)

### Notes
- pull requests are welcome
