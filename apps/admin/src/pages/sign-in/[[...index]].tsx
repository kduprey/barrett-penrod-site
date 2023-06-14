import { SignIn } from "@clerk/nextjs";
import { AuthWrappper } from "../../components/AuthWrapper/AuthWrapper";

export default function Page() {
  return (
    <AuthWrappper>
      <SignIn />
    </AuthWrappper>
  );
}
