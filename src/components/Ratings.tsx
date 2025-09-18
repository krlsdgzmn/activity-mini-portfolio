import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function Ratings() {
  return (
    <Box>
      {Array(4)
        .fill(null)
        .map(() => (
          <Rating value={5} readOnly />
        ))}
    </Box>
  );
}
