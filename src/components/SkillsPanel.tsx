import Chip from "@mui/material/Chip";
import CustomTabPanel from "./CustomTabPanel";

export default function SkillsPanel({ value }: { value: number }) {
  const skills = [
    "TypeScript",
    "JavaScript",
    "Python",
    "Backend Development",
    "Frontend Development",
    "Fullstack Developer",
    "React.js",
    "React Native",
    "Machine Learning Development",
    "FastAPI",
    "Data Analysis",
    "TailwindCSS",
    "SQL",
    "HTML",
    "CSS",
    "Software Engineering",
  ];

  return (
    <CustomTabPanel value={value} index={1}>
      {skills.map((skill) => (
        <Chip sx={{ m: 0.5 }} label={skill} />
      ))}
    </CustomTabPanel>
  );
}
