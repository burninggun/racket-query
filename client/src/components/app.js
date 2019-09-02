import React from 'react';
import AppBar from './AppBar'
import Racket_Input from './racket_Input'
import '../assets/css/app.scss'

import Container from '@material-ui/core/Container';

const App = () => (
    <div>
        <AppBar maxWidth='sm' />
        <Racket_Input/>
    </div>
);

export default App;
