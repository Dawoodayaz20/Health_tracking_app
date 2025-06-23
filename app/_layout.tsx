import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native"; 

function RouteGuard({children} : { children: React.ReactNode }){

    const [isSignUp, setisSignUp] = useState<boolean>(false)
    const isAuth = false
    const router = useRouter()

    useEffect(() => {
      if(!isAuth) {
        router.replace("/auth");
      }
      else {
        setisSignUp(true)
      }
    });

    return <>{children}</>
}

export default function RootLayout() {
  return (
            // <RouteGuard>
              <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown:false }}/>
              </Stack>
            // </RouteGuard>  
  );
}
