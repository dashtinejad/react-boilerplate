import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorldComponent from './HelloWorldComponent';

ReactDOM.render(
    <HelloWorldComponent name="World" />,
    document.getElementById('app')
);