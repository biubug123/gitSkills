import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import TabBarExample from "./js/example/paramExample";

class Root extends React.Component {
    render() {
        return(
            <div>
                <TabBarExample />
            </div>

        )
    }
}

ReactDOM.render(<Root/>,document.getElementById('root'));
registerServiceWorker();
