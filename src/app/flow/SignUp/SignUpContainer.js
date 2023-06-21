import * as reactRedux from 'react-redux'
import Signup from './SignUp'

export const connect = reactRedux.connect ;


export const mapStateToProps = (state , ownProps) => {
    return {
        authDetails : state.authDetails
    }
}

export const mapDispatchToProps = (dispatch , ownProps) => {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Signup)