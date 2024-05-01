import * as React from "react";
import Pathname from "./pathname";

const RouteDetails = ({
  name,
  ...props
}: Record<string, any> & { name: string }) => {
  return (
    <>
      <Pathname />
      <details className="p-2">
        <summary>Props</summary>
        <div className="p-2">
          <span>{name}</span>
          <pre>{JSON.stringify(props, null, 2)}</pre>
        </div>
      </details>
    </>
  );
};

export default RouteDetails;
