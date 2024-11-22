import { Box } from "@mui/joy";
import "./loading-book.css";

export function LoadingBook(): JSX.Element {
  return (
    <Box
      height="80vh"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      width="100%">
      <div className="remo-book-loader">
        <div className="inner">
          <div className="left" />
          <div className="middle" />
          <div className="right" />
        </div>
        <ul>
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    </Box>
  );
}
