import * as React from "react";

const Default = ({ ...props }) => {
  console.log(props, "header");
  return (
    <header className="flex gap-2 border-dashed rounded p-4 border-fuchsia-500 border flex-col">
      app/@header/[[...path]]/page.tsx
      <code>{JSON.stringify(props)}</code>
    </header>
  );
};

export default Default;
