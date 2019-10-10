import React from 'react';
import Tab from './Tab';
import tabsProp from './tabsProp';

class App extends React.Component {
  render() {
    return <div>
      <Tab tabs={tabsProp} />
    </div>
  }
}

export default App;