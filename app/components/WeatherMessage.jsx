var React = require('react');


var WeatherMessage = ({temp,location}) => {
  //  var {temp, location} = props;
  return (
    <h3 className="text-center">It is {temp} in {location} please visit jaynejacobs.com.</h3>
  )
}
module.exports = WeatherMessage;
