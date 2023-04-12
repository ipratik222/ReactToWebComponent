import Greet from "./Greet";
import React from 'react';
import ReactDOM from 'react-dom';

class MyWebComponent extends HTMLElement {
    connectedCallback(props) {
        const name = this.getAttribute('name');
        const element = <Greet name={name} />;
        ReactDOM.render(element, this);
    }
  }

  
  customElements.define('my-component', MyWebComponent);