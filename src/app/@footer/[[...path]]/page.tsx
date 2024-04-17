import Link from "next/link";
import * as React from "react";

const Default = ({ ...props }) => {
  console.log(props, "footer");
  return (
    <footer className="flex gap-2 border-dashed rounded p-4 border-green-500 border flex-col">
      app/@footer/[[...path]]/page.tsx
      <code>{JSON.stringify(props)}</code>
      <Link href="/about" className="text-blue-500">
        About
      </Link>
      <Link href="/contact" className="text-blue-500">
        Contact
      </Link>
      <Link href="/?referrer=footer" className="text-blue-500">
        /
      </Link>
    </footer>
  );
};

export default Default;
