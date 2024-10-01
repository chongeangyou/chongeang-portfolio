function courseAPI() {
    console.log(process.env.NODE_ENV)
    if (process.env.NODE_ENV == "development") {
        return "/jn 3:16"
    } else {
        return `${process.env.VUE_APP_URL}/jn 3:16`
    }
}
function usersAPI() {
    if (process.env.NODE_ENV == "development") {
        return "/v1/users"
    } else {
        return `${process.env.VUE_APP_URL}/v1/users`
    }
}
export { courseAPI, usersAPI }