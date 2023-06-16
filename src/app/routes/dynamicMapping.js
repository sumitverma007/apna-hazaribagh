const mappings = {
    login : () => 
    import(/* webpackChunkName: "login" */`../flow/Login`),

    signup : () => 
    import(/* webpackChunkName: "singup" */`../flow/SignUp`),

    post : () => 
    import(/* webpackChunkName: "post" */`../flow/Post`),

    home : () => 
    import(/* webpackChunkName: "post" */`../flow/Home`),

    createPost : () => 
    import(/* webpackChunkName: "createPost" */`../flow/CreatePost`),
}


export const dynamicLoading = name => {
    return mappings[name];
}