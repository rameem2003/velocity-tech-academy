import UserInfo from "@/components/layouts/dashboard/UserInfo";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

export default function Page() {
  return (
    <main className="mt-5">
      <h1 className="font-inter text-accent-foreground text-2xl font-semibold">
        Welcome to Your Dashboard
      </h1>
      <DropdownMenuSeparator />

      <section className="mt-6">
        <UserInfo />
      </section>
    </main>
  );
}
