import * as routeGenerator from '../../shared/RouteGenerator'
import homeIcon from '../../../i/navbar_home.png'
import addPostIcon from '../../../i/plus-icon.png'
import userIcon from '../../../i/navbar_account.png'
export const navbarSchema = [
    {
        title : "Home",
        url : routeGenerator.home(),
        icon : homeIcon
    },
    {
        title : "Add Post",
        url : routeGenerator.add(),
        icon : addPostIcon
    },
    {
        title : "Profile",
        url : routeGenerator.user(),
        icon : userIcon
    },

]