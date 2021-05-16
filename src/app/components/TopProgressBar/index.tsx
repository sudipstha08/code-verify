import React from 'react';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

nprogress.configure({
  easing: 'ease',
  speed: 400,
  trickle: false,
  showSpinner: false,
  minimum: 0.1,
});

class TopProgressBar extends React.Component {
  componentWillMount() {
    nprogress.start();
    nprogress.set(0.5);
  }
  componentDidMount() {
    nprogress.done();
  }
  render() {
    return <div />;
  }
}

export { TopProgressBar };
