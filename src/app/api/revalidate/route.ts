import { revalidatePath, revalidateTag } from "next/cache";

export async function GET() {
    revalidateTag("post");
    revalidatePath("/detail/bai-1");
    return Response.json({
        validate: true,
    });
}
