import * as reactRedux from 'react-redux' ; 
import * as actions from '../redux/actionCreator'
import { bindActionCreators } from 'redux'; 
import Flow from './Flow';
export const connect = reactRedux.connect ;


export const mapStateToProps = (state , ownProps) => {
    return {
        userDetails : state.userDetails
    };
};

export  const mapDispatchToProps = (dispatch , ownProps) => {
    return bindActionCreators(actions , dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Flow)

