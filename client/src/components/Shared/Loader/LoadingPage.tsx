import { ScaleLoader } from "react-spinners";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const LoadingPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(isSmallScreen);
  

  return (
    <div
      className="
      h-[90vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <ScaleLoader
        height={100}
        width={isSmallScreen ? 10 : 16}
        color="#800ede"
      />
    </div>
  );
};

export default LoadingPage;
