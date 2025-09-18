import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ToggleThemeButton from "./ToggleThemeButton";

export default function Header() {
  return (
    <AppBar position={"static"} sx={{ bgcolor: "#121212" }}>
      <Toolbar sx={toolbarStyle}>
        <Typography sx={headerTitleStyle}>{"DE GUZMAN ¯\\_(ツ)_/¯"}</Typography>
        <ToggleThemeButton />
      </Toolbar>
    </AppBar>
  );
}

const toolbarStyle = { justifyContent: "space-between" };
const headerTitleStyle = { fontWeight: "bold" };
