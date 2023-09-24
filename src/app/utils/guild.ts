export async function fetchGuilds(access_token: string) {
    const headers = {
        "Authorization": `Bearer ${access_token}`,
    }

    const response = await fetch("https://discord.com/api/users/@me/guilds", { headers, method: "GET" });
    if (response.ok) {
        return await response.json();
    }
}

export async function fetchBotGuilds() {
    const headers = {
        "Authorization": `Bot ${process.env.CLIENT_TOKEN}`,
    }

    const response = await fetch("https://discord.com/api/users/@me/guilds", { headers, method: "GET" });
    if (response.ok) {
        return await response.json();
    }
}

export async function fetchGuildInfo(id: string) {
    const headers = {
        "Authorization": `Bot ${process.env.CLIENT_TOKEN}`,
    }

    const response = await fetch(`https://discord.com/api/guilds/${id}?with_counts=true`, { headers, method: "GET" });
    if (response.ok) {
        return await response.json();
    }
}