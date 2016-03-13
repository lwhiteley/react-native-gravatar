react-native-gravatar
=============

### Install

```shell
npm install --save react-native-gravatar
```

### Use

eg.

```js
var React = require('react-native');
var {StyleSheet, Component} = React;

var gravatar = require('react-native-gravatar');
var {Gravatar, GravatarApi} = gravatar;

class MyComponent extends Component {
	render() {

		return (
      <View >
        <Gravatar options={{
              email: 'example@gmail.com',
              parameters: { "size": "200", "d": "mm" },
              secure: true }
            } style={styles.profileImage}/>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  profileImage: {width:100,height:100,borderWidth:3,borderColor:'white',borderRadius:50},
})

```

For a better idea of what options can be passed, please view [gravatar-api](https://www.npmjs.com/package/gravatar-api)

### Notes
- pull requests are welcome
