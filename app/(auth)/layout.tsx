import { getServerSession } from "next-auth";
import config from "@/auth";
import { redirect } from "next/navigation";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(config);

  if (session) {
    redirect("/");
  }

  return (
    <section className="flex justify-center items-center w-full">
      {children}
    </section>
  );
};

export default AuthLayout;
