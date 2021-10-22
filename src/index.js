
import component from "./simple-components/dom";
import './theme/main.css';

const element = component();
document.body.appendChild(element);

if(module.hot) {
  module.hot.accept('./simple-components/dom', function() {
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  })
}