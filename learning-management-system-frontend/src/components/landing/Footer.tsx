import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRight, Copyright, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-indigo-950 text-white py-8">
      <div className="px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold !text-white">
              EduElevate<span className="!text-white">.</span>
            </Link>
            <p className="!text-gray-400 text-sm">Ethiopia, AddisAbaba</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Categories</h4>
            <ul className="space-y-2 text-indigo-200">
              <li>
                <Link to="/" className="!text-gray-400 hover:text-white">
                  Graphics Design
                </Link>
              </li>
              <li>
                <Link to="/" className="!text-gray-400 hover:text-white">
                  Video Editing
                </Link>
              </li>
              <li>
                <Link to="/" className="!text-gray-400 hover:text-white">
                  Web development
                </Link>
              </li>
              <li>
                <Link to="/" className="!text-gray-400 hover:text-white">
                  UI/UX
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Stay Connected</h4>
            <div className="flex mb-4">
              <Input
                placeholder="Email address"
                className="rounded-r-none bg-gradient-to-br from-blue-50 to-purple-50 border-indigo-800 !text-black placeholder:!text-black"
              />
              <Button className="rounded-l-none !bg-indigo-800 hover:bg-blue-600">
                <ChevronRight className="h-5 w-5 !text-white" />
              </Button>
            </div>
            <div className="space-y-2 text-indigo-200">
              <div className="flex items-center gap-2">
                <Phone />
                <span className="!text-gray-400">Call 09-01-02-03-04</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail />
                <span className="!text-gray-400">Support@EduElevate.net</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-indigo-900 mt-6 pt-4 flex flex-col md:flex-row justify-center items-center text-sm !text-indigo-300">
          <div className="text-center !text-gray-400 flex items-center justify-center">
            <span className="mr-2">
              <Copyright />
            </span>
            Copyright 2025 Group 1 Students
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
