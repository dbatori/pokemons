import * as style from "./ErrorMsg.css";

type Props = {
  centered?: boolean;
};

export const ErrorMsg = (props: Props) => {
  const className = props.centered ? style.errorCentered : style.error;
  return (
    <div className={className}>Something went wrong:( Please try again!</div>
  );
};
