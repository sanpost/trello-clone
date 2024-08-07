import { Board } from "@prisma/client";
import { BoardTitleForm } from "./board-title-form";
import { BoardOptions } from "./board-options";

interface BoardNavbarProps {
    data: Board;
};

export const BoardNavbar = async ({
    data,
}: BoardNavbarProps) => {
    return (
        <div className="rounded-full mx-[0.5%] mt-2 w-[99%] h-14 z-[40] bg-black/50 fixed top-14 flex items-center px-6 gap-x-4 text-white">
            <BoardTitleForm data={data} />
            <div className="ml-auto">
                <BoardOptions id={data.id} />
            </div>
        </div>
    );
};

