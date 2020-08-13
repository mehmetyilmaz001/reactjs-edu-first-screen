export const getToken = async () => {
    const token = await localStorage.getItem("token");
    return token;
}

export const getUser = async () => {
    const user = await localStorage.getItem("user");
    return user;
}