import React, { FC } from "react";

interface props {
  isLoading: boolean;
}

export function withLoading<T extends props = props>(WrappedComponent: FC<T>) {
  const ComponentWithLoading = (props: T) =>
    props.isLoading ? <div>Loading...</div> : <WrappedComponent {...props} />;

  return ComponentWithLoading;
}
