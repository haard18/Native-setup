// import SignIn from '@/app/(auth)/sign-in';
import { Account,Avatars,Client, Databases, ID } from 'react-native-appwrite';
export const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.haard.aora",
    projectId: "6762f646001986adfefb",
    databaseId: '6762f8030016d2d3da1d',
    userCollectionId: '6762f90b0001d0dfdfb4',
    videoCollectionId: '6762f94d0039422d77fc',
    storageId: '6762fb33002cb59d99d6'
}
// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
    ;
const account = new Account(client);
const avatars=new Avatars(client);
const databases=new Databases(client);
export const createUser = async(username,email,password) => {

    try {
        
        const newAccount=await account.create(ID.unique(), email, password, username);
        // console.log(newAccount);
        if(!newAccount){
            throw new Error('Failed to create user');

        }
        const avatarUrl= avatars.getInitials(username);
        await signIn(email,password);
        const newUser=await databases.createDocument(appwriteConfig.databaseId,appwriteConfig.userCollectionId,ID.unique(),
        {
            accountId:newAccount.$id,
            email,
            username,
            avatar:avatarUrl
        }
    );
    return newUser;
        
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
    // account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    //     .then(function (response) {
    //         console.log(response);
    //     }, function (error) {
    //         console.log(error);
    //     });
}
export async function signIn(email,password){
    try {
        const session=await account.createEmailPasswordSession(email,password);
        return session;
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}