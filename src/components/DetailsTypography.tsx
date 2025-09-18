import Typography from "@mui/material/Typography";
import type { JSX } from "react";

type Detail = {
  label: string;
  value?: string;
  icon?: JSX.Element;
};

export default function DetailsTypography({ detail }: { detail: Detail }) {
  return (
    <Typography component={"p"} sx={textStyle}>
      {detail.label}:{" "}
      <Typography component={"span"}>
        {detail.value ? detail.value : detail.icon}
      </Typography>
    </Typography>
  );
}

const textStyle = {
  display: "flex",
  alignItems: "center",
  gap: 2,
  fontWeight: "bold",
  fontSize: "1rem",
  paddingBottom: 1,
};
