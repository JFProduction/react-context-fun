import React from 'react';

const MyContext = React.createContext({ 
    name: 'bob',
    changeName: () => {}
});

export default MyContext;