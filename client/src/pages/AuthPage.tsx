import SignInComponent from "@/components/SignInComponent";
import SignUpComponent from "@/components/SignUpComponent";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const AuthPage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-5">
      <div className="flex flex-col mb-8">
        <h1 className="text-4xl text-gray-400 font-semibold text-center">
          Welcome Back
        </h1>
        <span className="text-gray-700 text-sm">
          Sign In to access your track your contributions
        </span>
      </div>
      <Card className="border-gray-800/50 shadow-2xl sm:w-md md:w-lg">
        <CardContent>
          <CardDescription className="py-8">
            <Tabs defaultValue="sign-in">
              <TabsList className="bg-none flex w-full px-1 mb-4">
                <TabsTrigger
                  className="data-[state=active]:bg-none  data-[state=active]:border-blue-500 data-[state=active]:rounded-full data-[state=active]:text-blue-500 h-10 text-gray-700"
                  value="sign-in"
                >
                  Sign In
                </TabsTrigger>
                <TabsTrigger
                  className="data-[state=active]:bg-none  data-[state=active]:border-blue-500 data-[state=active]:rounded-full data-[state=active]:text-blue-500 h-10 text-gray-700"
                  value="sign-up"
                >
                  Sign Up
                </TabsTrigger>
              </TabsList>
              <TabsContent value="sign-in">
                <SignInComponent />
              </TabsContent>
              <TabsContent value="sign-up">
                <SignUpComponent />
              </TabsContent>
            </Tabs>
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthPage;
