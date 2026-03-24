"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import Container from "@/components/common/Container";
import { RiAlertFill } from "@remixicon/react";
import { Alert, AlertTitle } from "@/components/ui/alert";

const page = () => {
  const { user, register, loading, msg } = useAuth();
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register(name, phone, email, password);
  };

  useEffect(() => {
    if (user?.id) {
      router.push("/");
    }
  }, [user]);

  return (
    <main className="">
      <Container>
        <div className="flex min-h-225 flex-col items-center justify-center">
          <h3 className="font-inter text-center text-[36px] font-extrabold text-white">
            Welcome to Velocity Tech Academy
          </h3>

          <h2 className="font-inter text-center text-[30px] font-medium text-white">
            Create your account and start learning today!
          </h2>

          <section className="mt-10 w-full max-w-137.5 rounded-lg p-4 shadow-xl">
            <div className="mb-5">
              {msg && (
                <Alert variant="destructive">
                  <RiAlertFill />
                  <AlertTitle>{msg}</AlertTitle>
                </Alert>
              )}
            </div>
            <form onSubmit={handleRegister} className="flex w-full flex-col">
              <div className="grid w-full items-center gap-3">
                <Label
                  className="font-inter text-[20px] font-semibold text-white"
                  htmlFor="name"
                >
                  Your Full Name
                </Label>
                <Input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="font-inter block w-full font-medium text-white placeholder:text-white"
                  type="name"
                  id="name"
                  placeholder="Your Full Name"
                />
              </div>
              <div className="grid w-full items-center gap-3">
                <Label
                  className="font-inter text-[20px] font-semibold text-white"
                  htmlFor="phone"
                >
                  Your Phone Number
                </Label>
                <Input
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  className="font-inter block w-full font-medium text-white placeholder:text-white"
                  type="phone"
                  id="phone"
                  placeholder="Your Phone Number"
                />
              </div>
              <div className="mt-5 grid w-full items-center gap-3">
                <Label
                  className="font-inter text-[20px] font-semibold text-white"
                  htmlFor="email"
                >
                  Your Email Address
                </Label>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="font-inter block w-full font-medium text-white placeholder:text-white"
                  type="email"
                  id="email"
                  placeholder="Your Email Address"
                />
              </div>

              <div className="mt-5 grid w-full items-center gap-3">
                <Label
                  className="font-inter text-[20px] font-semibold text-white"
                  htmlFor="password"
                >
                  Your Password
                </Label>
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="font-inter block w-full font-medium text-white placeholder:text-white"
                  type="password"
                  id="password"
                  placeholder="Your Password"
                />
              </div>

              <Button
                disabled={loading}
                type="submit"
                className="mt-8 cursor-pointer"
              >
                Register Account
              </Button>
            </form>

            <div className="mt-5 flex items-center justify-between">
              <Link
                className="font-inter text-base font-semibold text-white"
                href="/login"
              >
                Already have an account? Login here
              </Link>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
};

export default page;
