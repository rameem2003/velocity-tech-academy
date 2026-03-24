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
  const { user, msg, login } = useAuth();
  // console.log(user);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(email, password);
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
          <h3 className="font-inter text-center text-[30px] font-bold text-white">
            Welcome
          </h3>

          <h2 className="font-inter text-center text-[36px] font-extrabold text-white">
            Signin to your account
          </h2>

          <p className="font-inter mt-4 text-center text-[20px] text-white">
            Provide your email and password
          </p>

          <section className="mt-10 w-full max-w-137.5 rounded-lg p-4 shadow-xl">
            <div className="mb-5">
              {msg && (
                <Alert variant="destructive">
                  <RiAlertFill />
                  <AlertTitle>{msg}</AlertTitle>
                </Alert>
              )}
            </div>
            <form onSubmit={handleLogin} className="flex w-full flex-col">
              <div className="grid w-full items-center gap-3">
                <Label
                  className="font-inter text-[20px] font-semibold text-white"
                  htmlFor="email"
                >
                  Your email address
                </Label>
                <Input
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  className="font-inter block w-full font-medium text-white placeholder:text-white"
                  type="email"
                  id="email"
                  placeholder="Your email address"
                />
              </div>

              <div className="mt-5 grid w-full items-center gap-3">
                <Label
                  className="font-inter text-[20px] font-semibold text-white"
                  htmlFor="password"
                >
                  Your password
                </Label>
                <Input
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                  className="font-inter block w-full font-medium text-white placeholder:text-white"
                  type="password"
                  id="password"
                  placeholder="Your password"
                />
              </div>

              <Button type="submit" className="mt-8 cursor-pointer">
                Sign In
              </Button>
            </form>

            <div className="mt-5 flex items-center justify-between">
              <Link
                className="font-inter text-base font-semibold text-white"
                href="/register"
              >
                Create a new account
              </Link>

              <Link
                className="font-inter text-base font-semibold text-white"
                href="/forgot-password"
              >
                Forget password?
              </Link>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
};

export default page;
