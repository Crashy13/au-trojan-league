import React from "react";

const TwoColumns = ({ className, children, thin, centered }) => {
  return (
    <>
      {centered && thin && (
        <div className={"flex justify-center " + className}>
          <div className={"grid grid-cols-1 gap-6 lg:w-1/2 lg:grid-cols-2"}>
            {children}
          </div>
        </div>
      )}
      {!centered && (
        <div className={"grid grid-cols-1 lg:grid-cols-2 gap-6 " + className}>
          {children}
        </div>
      )}
    </>
  );
};

export default TwoColumns;
