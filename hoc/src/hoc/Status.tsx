import { useState, FC} from "react";

export interface StatusProps {
  isError: boolean;
  isLoading: boolean;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Status = (WrappedComponent: FC<StatusProps>) => {
  const Component = () => {
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    return (
      <div>

      <WrappedComponent
        isLoading={isLoading}
        isError={isError}
        setIsError={setIsError}
        setIsLoading={setIsLoading}
      />

      <button
        type="button"
        onClick={() => setIsError(prev => !prev)}
      >
        toggle error
      </button>

      <button
        type="button"
        onClick={() => setIsLoading(prev => !prev)}
      >
        toggle loading
      </button>
      </div>
    )
  }

  return Component;
}
