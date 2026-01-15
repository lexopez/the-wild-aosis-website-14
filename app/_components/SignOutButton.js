import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "../_lib/actions";
import { auth } from "../_lib/auth";

async function SignOutButton() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <li className="mt-auto">
      <form action={signOutAction}>
        <button className="py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full">
          <ArrowRightOnRectangleIcon className="h-5 w-5 text-primary-600" />
          <span>Sign out</span>
        </button>
      </form>
    </li>
  );
}

export default SignOutButton;
