export async function getClientConfig() {
    console.log("config.getClientConfig()")
    return await fetch(`/api/config/getClientConfig`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
        .then((response) => {
            // If request is not successful, display error message
            if (!response.ok) {
                throw new Error("HTTP status " + response.status);
            }

            return response.json();
        })
        .catch((err) => {
            console.log("exception calling fetch: " + err);
        });
}