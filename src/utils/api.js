function articleAPI() {
    //console.log(process.env.NODE_ENV)
    if (process.env.NODE_ENV == "development") {
        return "/author,random/William Shakespeare;4"
    } else {
        return `${process.env.VUE_APP_URL}/author,random/William Shakespeare;4`
    }
}

export { articleAPI }