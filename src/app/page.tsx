import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await auth();
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex justify-between items-center">
          <div>Hello there {session?.user?.email}</div>
          <form
            action={async () => {
              "use server";
              await signOut({
                redirectTo: "/login",
              });
            }}
          >
            <Button variant="link" type="submit">
              Sign out
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
