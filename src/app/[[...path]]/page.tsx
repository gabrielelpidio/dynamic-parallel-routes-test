import Image from "next/image";
import { notFound } from "next/navigation";

const page = ({ ...props }) => {
  console.log(props, "footer");
  if (props?.params?.path?.[0] === "about") {
    return notFound();
  }
  return (
    <footer className="flex gap-2 border-dashed rounded p-4 border-yellow-500 border flex-grow flex-col">
      app/[[...path]]/page.tsx
      <code>{JSON.stringify(props)}</code>
    </footer>
  );
};

export default page;
