import { Sidebar } from "../_components/sidebar";

const OrganizationLayout = (
    { children }: { children: React.ReactNode }
) => {
    return (
        <main className="pt-20 md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl mx-auto ">
            <div className="flex gap-x-7">
                <div className="w-full min-h-[600px] mb-8 bg-gradient-to-t from-gray-900 to-gray-800 rounded-3xl">
                    {children}
                </div>
                <div className="w-64 shrink-0 hidden md:block mb-5">
                    <Sidebar />
                </div>
            </div>
        </main >
    );
};

export default OrganizationLayout;

