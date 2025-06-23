import {Account, Client} from 'react-native-appwrite'

const myclient = new Client()
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
    .setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PLATFORM!)


export const myaccount = new Account(myclient)
