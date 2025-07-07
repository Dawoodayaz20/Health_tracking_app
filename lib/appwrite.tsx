import {Account, Client} from 'appwrite'

const myclient = new Client()
    .setEndpoint("https://fra.cloud.appwrite.io/v1")
    .setProject("684d8fd1002b5462c7ab")
    // .setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PLATFORM!)


export const account = new Account(myclient)
