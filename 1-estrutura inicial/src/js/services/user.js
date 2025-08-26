import { baseUrl } from "../variaveis.JS";

async function getUser(userName) {
    const response = await fetch(`${baseUrl}/${userName}`)
    return await response.json()
}

export {getUser}