// Components
import React, { Component } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

// UI & CSS
import jaybird from './jaybird.png';
import './App.css';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

registerPlugin(FilePondPluginImagePreview);

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={jaybird} className="App-logo" alt="logo" />
          <p>
            Upload file(s). Enter phone number. Fax.
            <FilePond allowMultiple={true} name={"file"} server="http://localhost:3001/upload"/>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
