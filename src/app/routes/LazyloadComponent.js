import React from "react";
import PropTypes from 'prop-types'
import { dynamicLoading } from "./dynamicMapping";
import { injectAsyncReducer } from "../redux/store";

export default class LazyloadComponent extends React.PureComponent {
    static contextTypes = { store: PropTypes.object };
  
    constructor() {
      super(...arguments);
      this.state = {
        renderComponent: null
      };
    }
  
    componentDidMount() {
      dynamicLoading(this.props.renderComponent)()
        .then(res => {
          this.setState({
            renderComponent: res.default.Container
          });
          res.default.reducer &&
            injectAsyncReducer(
              this.context.store,
              this.props.renderComponent,
              res.default.reducer
            );
        })
        .catch(err => {
          console.log('error in lazy loading, check LazyLoadComponent', err);
        });
    }
  
    render() {
      if (this.state.renderComponent === null) {
        return <></>;
      }
      return <this.state.renderComponent />;
    }
  }
  