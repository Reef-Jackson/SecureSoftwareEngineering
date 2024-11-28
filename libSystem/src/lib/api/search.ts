import type { Email } from "$lib/types/types"

export async function searchBar(value: String, email: Email, token: String) {
    const searchResponse = await fetch("http://127.0.0.1:3000/media/search/search-bar", { headers: { "Content-Type": "application/json" }, method: "POST", body: JSON.stringify({ "email": email, "token": token, "value": value }) })
    const searchResponseData = await searchResponse.json()
    return searchResponseData.token
}   