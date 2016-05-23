var ReactNative = require('react-native');
var React = require('react');
var gravatarApi = require('gravatar-api');
var {Image} = ReactNative;

class Gravatar extends React.Component {
  constructor(props) {
      super(props);
    }
	render() {
		return (
          <Image style={[{width: 50, height:50}, this.props.style]}
                source={{uri:gravatarApi.imageUrl(this.props.options)}} />
		);
	}
}

module.exports = {
  Gravatar: Gravatar,
  GravatarApi: gravatarApi
}
