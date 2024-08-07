import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full bg-gradient-to-b from-sky-700 to-purple-700">
            <Navbar />
            <main className="h-full pt-40 bg-gradient-to-b from-sky-700 to-purple-700">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MarketingLayout;