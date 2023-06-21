import msgPng from '../../i/msgInp.png'
import passwordKeyPng from '../../i/passwordKey.png'
import userImg from '../../i/user.png'
export const loginInputSchema = [
    {
        type : "inputBox",
        inputType : "text",
        placeholder : "Email",
        pngUrl : msgPng,
        name : "email"
    },
    {
        type : "inputBox",
        inputType : "password",
        placeholder : "Password",
        pngUrl : passwordKeyPng,
        name : "password"
    }
]

export const SignupInputSchema = [
    {
        type : "inputBox",
        inputType : "text",
        placeholder : "Name",
        pngUrl : userImg,
        name : "name"
    },
{
        type : "inputBox",
        inputType : "text",
        placeholder : "Email",
        pngUrl : msgPng,
        name : "email"
    },
    {
        type : "inputBox",
        inputType : "password",
        placeholder : "Password",
        pngUrl : passwordKeyPng,
        name : "password"
    },
    {
        type : "inputBox",
        inputType : "password",
        placeholder : "Re ennter Password",
        pngUrl : passwordKeyPng,
        name : "re_password"
    },


]


