import TabelUser from "@/components/TabelUser/TabelUser";
import { IUser } from "@/utils/interface";

export interface IPagin {
    totalCount: number;
    limit: 1;
}

export default async function HomePage(props: {
    params: {};
    searchParams: {
        page: number;
        pageSize: number;
    };
}) {
    const res = await fetch(
        `http://localhost:5000/users?_page=${props.searchParams.page}&_limit=${props.searchParams.pageSize}`,
        {
            next: {
                tags: ["users_list"],
            },
        }
    );

    const meta: IPagin = {
        limit: 1,
        totalCount: (res.headers.get("X-Total-Count") ?? 0) as number,
    };

    const data: IUser[] | [] = await res.json();

    return (
        <div>
            <TabelUser data={data} pagin={meta} />
        </div>
    );
}
