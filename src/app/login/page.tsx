import { redirect } from "next/navigation";
import { signIn, auth } from "@/auth";
import { AuthError } from "next-auth";
import { LoginForm } from "./components/login-form";

export default async function SignInPage(props: {
  searchParams: Promise<{
    callbackUrl: string | undefined;
    error: string | undefined;
  }>;
}) {
  const searchParams = await props.searchParams;
  const session = await auth();

  if (session?.user) {
    return redirect("/");
  }
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm
          onSubmit={async (formData) => {
            "use server";
            try {
              await signIn("credentials", {
                email: formData.get("email"),
                password: formData.get("password"),
              });
            } catch (error) {
              if (error instanceof AuthError) {
                return redirect(`/login?error=${error.type}`);
              }
              throw error;
            }
          }}
          error={searchParams.error}
        />
      </div>
    </div>
  );
}
