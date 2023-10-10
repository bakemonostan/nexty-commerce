import { Button } from "@/components/ui/button";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function SetupPage() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <p>this is a protected route</p>
    </div>
  );
}
