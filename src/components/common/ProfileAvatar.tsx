"use client";
import React from "react";
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { RiUser2Fill } from "@remixicon/react";

const ProfileAvatar = () => {
  const { user, logout } = useAuth();
  return (
    <div>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage
                src={
                  process.env.NEXT_PUBLIC_BASE_URL! + user?.avatar ||
                  "https://github.com/evilrabbit.png"
                }
                alt="@evilrabbit"
              />
              <AvatarFallback>
                {user?.name?.charAt(0).toUpperCase() || "U"}
              </AvatarFallback>
              <AvatarBadge className="bg-green-600 dark:bg-green-800" />
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-accent w-40" align="start">
            <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <Link href="/profile" className="cursor-pointer">
                <DropdownMenuItem className="cursor-pointer">
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer" onClick={logout}>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <>
          <Link href="/login">
            <RiUser2Fill size={24} className="text-white" />
          </Link>
        </>
      )}
    </div>
  );
};

export default ProfileAvatar;
