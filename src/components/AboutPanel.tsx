import MaleIcon from "@mui/icons-material/Male";
import CustomTabPanel from "./CustomTabPanel";
import DetailsTypography from "./DetailsTypography";

export default function AboutPanel({ value }: { value: number }) {
  const about = [
    { label: "Address", value: "Camarin, North Caloocan" },
    { label: "Phone", value: "09610102006" },
    { label: "Email", value: "jkdeguzman@citco.com" },
    { label: "Birthday", value: "December 09, 2001" },
    { label: "Gender", icon: <MaleIcon /> },
  ];

  return (
    <CustomTabPanel value={value} index={0}>
      {about.map((item, index) => (
        <DetailsTypography key={index} detail={item} />
      ))}
    </CustomTabPanel>
  );
}
