const ClerkLayout = (
    { children } : { children: React.ReactNode }
) => {
    return (
        <div className="h-full flex items-center justify-center bg-gradient-to-b from-sky-700 to-purple-700">
            {children}
        </div>
    );
};

export default ClerkLayout;