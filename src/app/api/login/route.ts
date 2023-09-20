import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function GET(req: NextRequest, res: NextResponse) {
    const url = "https://discord.com/api/oauth2/authorize?" + new URLSearchParams({
        client_id: `${process.env.CLIENT_ID}`,
        redirect_uri: `${process.env.REDIRECT_URI}`,
        response_type: "code",
        scope: "identify guilds",
    });
    
    redirect(url);
}