const mappings = {
    login : () => 
    import(/* webpackChunkName: "login" */`../flow/Login`)
}


export const dynamicLoading = name => {
    return mappings[name];
}