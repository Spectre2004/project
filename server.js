async function getResponse(IdUser){
    let response = await fetch('https://api.baserow.io/api/database/rows/table/152130/?user_field_names=true', {
        headers:{
            Authorization: 'Token v1hcfl8ldK6GuvpNzlPXcQBEO91TeGjn'
        }
    })
    let contentJson = await response.json()
    let login = contentJson.results[IdUser].Login
    console.log(login)
    console.log(contentJson.results[IdUser].IdUser)
    console.log(contentJson.results[IdUser].Login)
    console.log(contentJson.results[IdUser].Password)
    return login
}

let loginU = getResponse(0)
console.log(loginU)


