"use server";

import { IUser } from "@/utils/interface";
import { revalidateTag } from "next/cache";

export async function UpdateUserAction(data: IUser) {
    const res = await fetch(`http://localhost:5000/users/${data.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: data.name,
            avatar: data.avatar,
            id: data.id,
        }),
    });
    revalidateTag("users_list");
    return res.json();
}
