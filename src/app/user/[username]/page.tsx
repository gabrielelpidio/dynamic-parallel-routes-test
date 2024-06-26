import PageWrapper from "@/app/_components/page-wrapper";
import RouteDetails from "@/app/_components/route-details";

const Page = (props: any) => {
  console.log(props, "page");
  return (
    <PageWrapper>
      <RouteDetails name="app/user/[username]/page.tsx" {...props} />
    </PageWrapper>
  );
};

export default Page;
