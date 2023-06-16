import * as reactRedux from 'react-redux' ; 
import { bindActionCreators } from 'redux'; 
import Navbar from './Navbar';
export const connect = reactRedux.connect ;


export const mapStateToProps = (state , ownProps) => {
    return {
        userDetails : state.userDetails
    };
};

export  const mapDispatchToProps = (dispatch , ownProps) => {
    return {
        
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar)

