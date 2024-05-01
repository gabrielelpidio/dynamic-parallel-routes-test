import RouteDetails from "@/app/_components/route-details";

const Default = ({ ...props }) => {
  console.log(props, "header");
  return (
    <header className="flex gap-2 border-dashed rounded p-4 border-fuchsia-500 border flex-col">
      <RouteDetails name="app/@header/[[...path]]/page.tsx" {...props} />
    </header>
  );
};

export default Default;
