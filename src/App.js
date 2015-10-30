import React, {Component} from 'react';
import PubList from './components/PubList.jsx';
import PubInspector from './components/PubInspector.jsx';

export default class App extends Component {
  render() {
    return (
      // Add your component markup and other subcomponent references here.
      <div>
        <PubInspector />
      </div>
    );
  }
}
