"use server";

import { fetchAllUsers } from "@/lib/FetchFakeStoreApi";
import { generateSessionId } from "@/utils/uuid";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_ID, SESSION_USER } from "../../constants/contants";

const EXPIRY_TIME = 60 * 60 * 24 * 7;

export async function SubmitLoginForm(formData: FormData) {
    const res = await fetchAllUsers();

    const emailFormData = formData.get("email");
    const passwordFormData = formData.get("password");

    const user = res.find(
        ({ email, password }: UserProps) => email === emailFormData && password === passwordFormData
    );

    if (user) {
        const sessionId = generateSessionId();
        cookies().set(SESSION_ID, sessionId, { maxAge: EXPIRY_TIME });
        const sessionUser = user.id;
        cookies().set(SESSION_USER, sessionUser, { maxAge: EXPIRY_TIME });

        redirect("/cart");
    } else {
        console.log("Invalid credentials");
    }
}
