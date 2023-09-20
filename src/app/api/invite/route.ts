import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function GET(req: NextRequest, res: NextResponse) {
    const url = "https://discord.com/api/oauth2/authorize?" + new URLSearchParams({
        client_id: `${process.env.CLIENT_ID}`,
        permissions: "8",
        scope: "bot",
    });
    
    redirect(url);
}