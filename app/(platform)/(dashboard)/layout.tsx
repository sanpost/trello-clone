import { Navbar } from "./_components/navbar";


const DashboardLayout = (
    { children }: { children: React.ReactNode }
) => {
    return (
        <div className="bg-gradient-to-b from-sky-700 to-purple-700 min-h-full">
            <div className="h-full">
                <Navbar />
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;