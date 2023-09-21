import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

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

async function getUser(access_token: string) {
    const headers = {
        "Authorization": `Bearer ${access_token}`,
    }

    const response = await fetch("https://discord.com/api/oauth2/@me", { headers, method: "GET" });
    if (response.ok) {
        return await response.json();
    }
}

export async function GET(req: NextRequest, res: NextResponse) {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get("code")?.toString();

    if (!code) {
        return redirect("/api/login");
    }

    const { access_token, refresh_token } = await exchangeToken(code);

    const cookieStore = cookies();
    cookieStore.set("token", access_token);

    const { user } = await getUser(access_token);
    console.log(user);

    return redirect("/dashboard");
}