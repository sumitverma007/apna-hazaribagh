import React, { Component } from 'react'
import store, {history} from '../redux/store';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import FlowContainer from '../flow/FlowContainer';
import NavbarContainer from '../flow/Navbar/NavbarContainer';

export default class RootComponent extends React.PureComponent {
    constructor(){
        super(...arguments);
        this.store = store;
        this.state = this.store.getState();
    }
   
  render() {
    if(this.store){
        return (
            <>
            <Provider store={this.store}>
                {/* <ConnectedRouter history={history}> */}
                    <div className='root'>
                       <FlowContainer />
                       <NavbarContainer />
                    </div>
                {/* </ConnectedRouter> */}
            </Provider>
            </>
        )
    }
    return (
        <div className='root'>
        </div>
    )
  }
}

