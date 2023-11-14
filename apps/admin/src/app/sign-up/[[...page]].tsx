import { SignUp } from "@clerk/nextjs";
import { AuthWrappper } from "../../components/AuthWrapper/AuthWrapper";

export default function Page() {
  return (
    <AuthWrappper>
      <SignUp />
    </AuthWrappper>
  );
}
