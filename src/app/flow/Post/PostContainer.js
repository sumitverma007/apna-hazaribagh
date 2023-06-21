import * as reactRedux from 'react-redux'
import Post from './Post';
import { bindActionCreators } from 'redux';
import actionCreator from './actionCreator'
export const connect = reactRedux.connect ;


export const mapStateToProps = (state , ownProps) => {
    return {
        authDetails : state.authDetails
    }
}

export const mapDispatchToProps = (dispatch , ownProps) => {
    return {
        ...bindActionCreators(actionCreator , dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post)