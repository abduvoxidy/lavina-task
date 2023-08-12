import cls from "./styles.module.scss";
import { FC } from "react";

const FullScreenSpinner: FC = () => {
  return (
    <div className={cls.loader}>
      <div className={cls.loading}>
        <div className={cls.ldsSpinner}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenSpinner;
