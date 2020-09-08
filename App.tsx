import React from 'react';
// Notice the '@src', this is the path alias
// This import will not work until we finish setting up.
import Application from '@src/App';

export default () => {
  // Nice and simple, just render a component we'll make in a sec.
  return <Application />;
};
