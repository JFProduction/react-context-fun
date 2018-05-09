import React from 'react';

const MyContext = React.createContext({ 
    name: '',
    changeName: () => {}
});

export default MyContext;