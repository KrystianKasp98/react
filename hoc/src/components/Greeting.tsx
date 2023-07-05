import { FC } from "react";
import { Status, StatusProps } from "../hoc/Status";

const GreetingComponent: FC<StatusProps> = ({
  isLoading,
  isError
}) => {

  return (
    <div>
      <h1>
        Hi all
      </h1>

      <h3>
        Error: {`${isError}`}
      </h3>

      <h3>
        Loading: {`${isLoading}`}
      </h3>

    </div>
  );
};

export const Greeting = Status(GreetingComponent);
