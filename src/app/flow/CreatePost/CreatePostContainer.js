import * as reactRedux from 'react-redux' ; 
import { bindActionCreators } from 'redux';
import actions from './actionCreator' 
import CreatePost from './CreatePost';
export const connect = reactRedux.connect ;


export const mapStateToProps = (state , ownProps) => {
    return {
        userDetails : state.userDetails
    };
};

export  const mapDispatchToProps = (dispatch , ownProps) => {
    return {
        ...bindActionCreators(actions , dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreatePost)

