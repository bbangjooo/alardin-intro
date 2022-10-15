import React from "react";
import Inquiry from "../inquiry/Inquiry";
import Production from "../production/Production";
import Thumbnail from "../thumbnail/Thumbnail";

interface IMainerProps {
  isHidden: boolean;
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

const Mainer = ({ isHidden, setIsHidden }: IMainerProps) => (
  <main>
    <Thumbnail {...{ isHidden, setIsHidden }} />
    <Production />
    <Inquiry />
  </main>
);

export default Mainer;
