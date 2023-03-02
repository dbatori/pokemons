import * as style from "./Spinner.css";

type Props = {
  centered?: boolean;
};

export const Spinner = (props: Props) => {
  const className = props.centered ? style.spinnerCentered : style.spinner;
  return <span className={className} />;
};
