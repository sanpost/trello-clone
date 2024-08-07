import { LogoLight } from "@/components/logo-light";
import { Button } from "@/components/ui/button";

export const Footer = () => {
    return (
        <div className="fixed bottom-0 w-full p-4 pt-4 bg-gradient-to-t from-purple-900">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <LogoLight />
                <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
                    <Button size='sm' variant='ghost' className="text-white">
                        Privacy Policy
                    </Button>
                    <Button size='sm' variant='ghost' className="text-white">
                        Terms of Service
                    </Button>
                </div>
            </div>
        </div>
    );
};
