import reactToWebComponent from "react-to-webcomponent"
import Greeting from "./Greet";
import React from 'react'
import * as ReactDOM from "react-dom/client"

const WebGreeting = reactToWebComponent(Greeting, React, ReactDOM)

customElements.define("web-greeting", WebGreeting);