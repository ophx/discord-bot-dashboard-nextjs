import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function GET(req: NextRequest, res: NextResponse) {
    const cookieStore = cookies();
    cookieStore.delete("token");
    redirect("/");
}