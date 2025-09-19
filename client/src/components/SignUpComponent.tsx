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
import { Lock, Mail, User } from "lucide-react";
import { Separator } from "./ui/separator";
import { SiGithub } from "react-icons/si";

const signUpFormSchema = z
  .object({
    // Personal Information
    fullName: z
      .string()
      .min(2, "First name must be at least 2 characters")
      .max(50),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),

    // Terms and Conditions
    acceptTerms: z
      .boolean()
      .refine(
        (val) => val === true,
        "You must accept the terms and conditions"
      ),
    acceptPrivacyPolicy: z
      .boolean()
      .refine((val) => val === true, "You must accept the privacy policy"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const SignUpComponent = () => {
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof signUpFormSchema>) {
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
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-500">Name</FormLabel>
                <FormControl>
                  <div className="border border-gray-50/10 rounded-full py-1 flex px-4 items-center">
                    <User className="w-4 h-4 text-gray-50" />
                    <Input
                      className="text-gray-50 border-0 placeholder:text-gray-400/30"
                      placeholder="Enter your Name here"
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-500">Email</FormLabel>
                <FormControl>
                  <div className="border border-gray-50/10 rounded-full py-1 flex px-4 items-center">
                    <Mail className="w-4 h-4 text-gray-50" />
                    <Input
                      className="text-gray-50 border-0 placeholder:text-gray-400/30"
                      placeholder="Enter your Email here"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        className="text-gray-50 border-0 placeholder:text-gray-400/30"
                        placeholder="***************"
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
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-500">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <div className="border border-gray-50/10 rounded-full py-1 flex px-4 items-center">
                      <Lock className="w-4 h-4 text-gray-50" />
                      <Input
                        className="text-gray-50 border-0 placeholder:text-gray-400/30"
                        placeholder="***************"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 w-full rounded-full h-10 text-gray-50 mt-4"
          >
            Create Account
          </Button>
        </form>
        <div className="flex items-center w-full gap-2 mt-8">
          <Separator className="flex-1 max-w-1/2 bg-gray-400/20" />
          <span className="mx-2 text-gray-400 text-xs font-medium">OR</span>
          <Separator className="flex-1 max-w-1/2 bg-gray-400/20" />
        </div>
        <Button className="bg-gray-50/10 w-full mt-8 h-10 ">
          <SiGithub className="h-6 w-6 text-gray-50" />
          <span className="text-gray-50 font-normal">Sign In with Github</span>
        </Button>
      </Form>
    </>
  );
};

export default SignUpComponent;
