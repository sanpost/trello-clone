import { auth } from "@clerk/nextjs/server";

const OrganizationIdPage = () => {

    const { userId, orgId} = auth();
    return (
        <div>
            Organization Page
        </div>
    )
}

export default OrganizationIdPage;