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

## How do I change the font family?
#### (file: src/app/layout.tsx)
```ts
import "./globals.css";
import type { Metadata } from "next";

/////////// FONT FAMILY //////////////////
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});
/////////// FONT FAMILY //////////////////

export const metadata: Metadata = {
  title: process.env.CLIENT_NAME,
  description: process.env.CLIENT_DESC,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-[#0f0f0f] ${poppins.className}`}> // font family class name
        {children}
      </body>
    </html>
  )
}
```

## How does the dashboard oauth2 api work?

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