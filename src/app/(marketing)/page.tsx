import TabelUser from "@/components/TabelUser/TabelUser";
import { IUser } from "@/utils/interface";

export default async function HomePage() {
    const res = await fetch("http://localhost:5000/users", {
        next: {
            tags: ["users_list"],
        },
    });
    const data: IUser[] | [] = await res.json();

    return (
        <div>
            <TabelUser data={data} />
        </div>
    );
}
