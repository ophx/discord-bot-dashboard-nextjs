# discord-bot-dashboard-nextjs
#### discord bot dashboard i made in nextjs cus I was bored. feel free to use it for your own discord bot!

## .env example
```
CLIENT_NAME="Yippy Bot"
CLIENT_DESC="The Best Bot!"
ICON="https://cdn.discord.com/app-icons/......"
CLIENT_ID="1234567890987"
CLIENT_SECRET="vtW-29328djfklsjdfk"
REDIRECT_URI="http(s)://domain.com/api/callback" - MAKE SURE TO SET THIS IN YOUR APPLICATION TOO OR AUTH WILL NOT WORK!!!!!!
```

## Dashboard oauth2 api?

#### (file: src/app/api/callback/route.ts - line 5)
```ts
async function exchangeToken(code: string) {
    const data = {
        client_id: `${process.env.CLIENT_ID}`,
        client_secret: `${process.env.CLIENT_SECRET}`,
        grant_type: "authorization_code",
        code: code,
        redirect_uri: `${process.env.REDIRECT_URI}`,
    }
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
    }
    
    const response = await fetch("https://discord.com/api/oauth2/token", { headers, method: "POST", body: new URLSearchParams(data) });
    if (response.ok) {
        return await response.json();
    }
}
```
This gets the access token to get the users information from discords api

#### (file: src/app/api/callback/route.ts - line 23)
```ts
async function getUser(access_token: string) {
    const headers = {
        "Authorization": `Bearer ${access_token}`,
    }

    const response = await fetch("https://discord.com/api/oauth2/@me", { headers, method: "GET" });
    if (response.ok) {
        return await response.json();
    }
}
```
This gets the users information