import { NextResponse } = require("next/server");

export async function POST(req) {
    //all the users in database
    const{ user } = req.json();
    //check user already exists
    const userData=await db.select().from(usersTable).where((eq(usersTable.email,user?.primaryEmailAddress.emailAddress)))
    //if not insert new user to database 
    if (userData?.length <= 0) {
        const result = await db.insert(usersTable).values({
            name: user?.fullname,
            email: user?.primaryEmailAddress.emailAddress,
            image: user?.immageUrl
        }).returning(usersTable);
        return NextResponse.json(result[0]);
    }

    return NextResponse.json(userData[0])
}