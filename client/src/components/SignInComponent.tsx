import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";
import { Lock, Mail } from "lucide-react";
import { Separator } from "./ui/separator";
import { SiGithub } from "react-icons/si";

const signInFormSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
});

const SignInComponent = () => {
  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof signInFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-500">Email</FormLabel>
                <FormControl>
                  <div className="border border-gray-50/10 rounded-full py-1 flex px-4 items-center">
                    <Mail className="w-4 h-4 text-gray-50" />
                    <Input
                      className="text-gray-50 border-0 placeholder:text-gray-400/30"
                      placeholder="Enter your email here"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-500">Password</FormLabel>
                <FormControl>
                  <div className="border border-gray-50/10 rounded-full py-1 flex px-4 items-center">
                    <Lock className="w-4 h-4 text-gray-50" />
                    <Input
                      type="password"
                      placeholder="************"
                      {...field}
                      className="text-gray-50 border-0 placeholder:text-gray-400/30"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-end">
            <Link
              className="text-xs text-blue-500 hover:text-blue-600"
              to={"/auth/forgot-password"}
            >
              Forgot Password?
            </Link>
          </div>
          <Button
            className="bg-blue-500 hover:bg-blue-600 w-full rounded-full h-10 text-gray-50 mt-4"
            type="submit"
          >
            Sign In
          </Button>
        </form>
      </Form>
      <div className="flex items-center w-full gap-2 mt-8">
        <Separator className="flex-1 max-w-1/2 bg-gray-400/20" />
        <span className="mx-2 text-gray-400 text-xs font-medium">OR</span>
        <Separator className="flex-1 max-w-1/2 bg-gray-400/20" />
      </div>
      <Button className="bg-gray-50/10 w-full mt-8 h-10 ">
        <SiGithub className="h-6 w-6 text-gray-50" />
        <span className="text-gray-50 font-normal">Sign Up with Github</span>
      </Button>
    </>
  );
};

export default SignInComponent;
