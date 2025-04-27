import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "@/api/auth";
import { toast } from "sonner"; // or your preferred toast library
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { EyeIcon, EyeOffIcon, Loader2, Upload } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from "@/utils/validation";
import { Checkbox } from "@radix-ui/react-checkbox";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const navigate = useNavigate();

  const { mutate: register, isPending } = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      toast.success("Account created successfully!");
      if (data.role === "teacher" && !data.isApproved) {
        toast.info("Your teacher account is pending approval");
      }
      navigate("/login");
    },
    onError: (error) => {
      const errorMessage =
        (error as any)?.response?.data?.message || "Registration failed";
      toast.error(errorMessage);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    const cvFile = formData.get("cv") as File;

    // Validation
    if (!validateUsername(username)) {
      toast.error("Username must be between 3 and 30 characters");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!validatePassword(password)) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (isTeacher && cvFile.size > 5 * 1024 * 1024) {
      toast.error("CV file must be less than 5MB");
      return;
    }

    const userData = {
      username,
      email,
      password,
      role: isTeacher ? "teacher" : "student",
    };

    if (isTeacher) {
      const expertise = formData.get("expertise") as string;
      const bio = formData.get("bio") as string;

      Object.assign(userData, {
        bio,
        expertise: expertise.split(",").map((item) => item.trim()),
        cv: cvFile,
      });
    }

    register(userData);
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-purple-50 overflow-y-auto">
      <div className="min-h-screen w-full flex items-center justify-center p-4">
        <Card className="w-full max-w-4xl shadow-xl flex flex-col md:flex-row overflow-hidden items-center justify-center p-4">
          <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center p-4 md:p-6">
            <img
              src="https://images.unsplash.com/photo-1516321310764-8a2388336560?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
              alt="Education illustration"
              className="object-cover w-full h-72 md:h-full rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col">
            <CardHeader className="space-y-2 text-center px-8 pt-8">
              <CardTitle
                className="text-3xl font-bold !text-indigo-950"
                style={{ color: "#312e81 !important" }}
              >
                Create an account
              </CardTitle>
              <CardDescription
                className="!text-gray-600"
                style={{ color: "#4b5563 !important" }}
              >
                Enter your information to create an account
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="px-8 py-8 space-y-6 flex-1">
                <Tabs defaultValue="student" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4 p-2 gap-4">
                    <TabsTrigger
                      value="student"
                      onClick={() => setIsTeacher(false)}
                      className="rounded-md py-2 text-sm font-medium data-[state=active]:!bg-indigo-950 data-[state=active]:!text-white"
                    >
                      Student
                    </TabsTrigger>
                    <TabsTrigger
                      value="teacher"
                      onClick={() => setIsTeacher(true)}
                      className="rounded-md py-2 text-sm font-medium data-[state=active]:!bg-indigo-950 data-[state=active]:!text-white"
                    >
                      Teacher
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="student" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input
                          id="username"
                          name="username"
                          type="text"
                          placeholder="Enter your username"
                          required
                          className="h-11"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          required
                          className="h-11"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <Input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a password"
                            required
                            className="h-11 pr-10"
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2 !text-gray-500 hover:!text-gray-700"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                          </button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">
                          Confirm Password
                        </Label>
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          required
                          className="h-11"
                        />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="teacher" className="space-y-6">
                    {/* Teacher */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input
                          id="username"
                          name="username"
                          type="text"
                          placeholder="Enter your username"
                          required
                          className="h-11"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          required
                          className="h-11"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <Input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a password"
                            required
                            className="h-11 pr-10"
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2 !text-gray-500 hover:!text-gray-700"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                          </button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">
                          Confirm Password
                        </Label>
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          required
                          className="h-11"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="expertise">Area of Expertise</Label>
                      <Input
                        id="expertise"
                        name="expertise"
                        type="text"
                        placeholder="e.g., Web Development, Data Science"
                        required
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        name="bio"
                        placeholder="Tell us about yourself and your teaching experience"
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cv">Upload CV</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center !bg-white">
                        <Upload className="mx-auto h-12 w-12 !text-gray-400" />
                        <div className="mt-3">
                          <label
                            htmlFor="cv"
                            className="cursor-pointer !text-indigo-600 hover:!text-indigo-800 font-medium"
                          >
                            <span>Upload a file</span>
                            <Input
                              id="cv"
                              name="cv"
                              type="file"
                              className="sr-only"
                              accept=".pdf,.doc,.docx"
                              required
                            />
                          </label>
                          <p className="text-xs !text-gray-500 mt-2">
                            PDF, DOC, or DOCX up to 5MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="flex items-center space-x-2 pt-4">
                  <Checkbox id="terms" required />
                  <label
                    htmlFor="terms"
                    className="text-sm !text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    style={{ color: "#4b5563 !important" }}
                  >
                    I agree to the{" "}
                    <Link
                      to="/terms"
                      className="!text-indigo-600 hover:!text-indigo-800"
                      style={{ color: "#4f46e5 !important" }}
                    >
                      terms of service
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/privacy"
                      className="!text-indigo-600 hover:!text-indigo-800"
                      style={{ color: "#4f46e5 !important" }}
                    >
                      privacy policy
                    </Link>
                  </label>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4 px-8 pb-8">
                <Button
                  type="submit"
                  className="w-full h-11 !bg-indigo-950 hover:!bg-indigo-800 !text-white font-medium"
                  disabled={isPending}
                >
                  {isPending ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Creating account...
                    </div>
                  ) : (
                    "Create account"
                  )}
                </Button>
              </CardFooter>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
}
