import { NextRequest, NextResponse } from "next/server";
import { SESSION_ID } from "../constants/contants";

export function middleware(request: NextRequest) {
    request.cookies.get(SESSION_ID);

    if (request.cookies.get(SESSION_ID) !== undefined && request.cookies.get(SESSION_ID) !== null) {
        return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
    matcher: ["/cart", "/profile"],
};
