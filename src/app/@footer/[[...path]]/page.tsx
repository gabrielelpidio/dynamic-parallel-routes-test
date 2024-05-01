import RouteDetails from "@/app/_components/route-details";
import Link from "next/link";

const Page = ({ ...props }) => {
  console.log(props, "footer");
  return (
    <footer className="flex gap-2 border-dashed rounded p-4 border-green-500 border flex-col">
      <div className="grid grid-cols-4 gap-2 max-w-max">
        <Link href="/about" className="text-blue-500">
          About
        </Link>
        <Link href="/user/joe" className="text-blue-500">
          User
        </Link>
        <Link href="/settings/profile" className="text-blue-500">
          Profile
        </Link>
        <Link href="/settings/profile/deactivate" className="text-blue-500">
          Deactivate Profile
        </Link>
        <Link href="/dashboard" className="text-blue-500">
          Dashboard
        </Link>
        <Link href="/dashboard/analytics" className="text-blue-500">
          Analytics
        </Link>
        <Link href="/dashboard/analytics/users" className="text-blue-500">
          User Analytics
        </Link>
      </div>
      <RouteDetails name="app/@footer/[[...path]]/page.tsx" {...props} />
    </footer>
  );
};

export default Page;
