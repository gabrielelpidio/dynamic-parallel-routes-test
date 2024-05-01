import PageWrapper from "@/app/_components/page-wrapper";
import RouteDetails from "@/app/_components/route-details";

const Page = ({ ...props }) => {
  console.log(props, "page");
  return (
    <PageWrapper>
      <RouteDetails name="app/dashboard/[[...slug]]/page.tsx" {...props} />
    </PageWrapper>
  );
};

export default Page;
