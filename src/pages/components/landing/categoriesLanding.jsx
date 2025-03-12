import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import TSImg from "../../../img/1TreeSpades/6TractorMounted/BigJohn_TRACTOR_MainPhoto.png";
import LCEImg from "../../../img/6. Litter Collection Equipment/VT420/Votex_VT420_MainPhoto.png";
import GCImg from "../../../img/3. Grass Collector Machines/24. PHANTER PROFESSIONAL/PHOTOS/PERUZZO_PANTHERPROFESSIONAL_MainPhoto.png";
import GMImg from "../../../img/4. Grass Mower Machines/5. TEG SPECIAL - TEG SPECIAL HD/PHOTOS/PERUZZO_TEGSPECIALTEGSPECIALHD_MainPhoto.png";
import RCGMImg from "../../../img/5. Remote Controlled Grass Mower/1. ROBOFOX ELECTRIC/PHOTOS/PERUZZO_ROBOFOXELECTRIC_MainPhoto.png";
import BCMImg from "../../../img/2. Beach Cleaning Machine/Ride On Machines/Squalo 2.0/squalo-2.0.webp";
import WCMImg from "../../../img/7. Wood Chipper Machines/5. TB 120 C PROFESSIONAL/PHOTOS/PERUZZO_TB120PROFESSIONAL_MainPhoto.png";
import SMImg from "../../../img/8. Spading Machines/150.150 Series/SELVATICI_150.150series_MainPhoto.png";
import AWPImg from "../../../img/9. Aerial Working Platform/2. Octoplus 21/OS_OCTOPLUS21_MainPhoto.png";
import TMCImg from "../../../img/10. Truck Mounted Cranes/100 Series/V123_cropped.webp";
import HGImg from "../../../img/11. Hydraulics Generator/ELECTRICITY GENERATION/HGV POWER BOX Variable Hydraulic Generator System/PHOTOS/DYNASET_HGVPowerBoxVariableHydraulicGeneratorSystem_MainPhoto.png";
import ZTImg from "../../../img/12. Zoo Technology/8. 1000 UNIVERSAL/PHOTOS/PERUZZO_1000UNIVERSAL_MainPhoto.png";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import ForestIcon from "@mui/icons-material/Forest";
import WavesIcon from "@mui/icons-material/Waves";
import RecyclingIcon from "@mui/icons-material/Recycling";
import NatureIcon from "@mui/icons-material/Nature";
import GrassIcon from "@mui/icons-material/Grass";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import BoltIcon from "@mui/icons-material/Bolt";
import LocalCarWashIcon from "@mui/icons-material/LocalCarWash";

const images = [
  {
    url: TSImg,
    title: "Tree Spades",
    width: "16.66%",
    icon: <NatureIcon sx={{ fontSize: 40 }} />
  },
  {
    url: BCMImg,
    title: "Beach Cleaning Machines",
    width: "16.66%",
    icon: <WavesIcon sx={{ fontSize: 40 }} />
  },
  {
    url: GCImg,
    title: "Grass Collector Machines",
    width: "16.66%",
    icon: <RecyclingIcon sx={{ fontSize: 40 }} />
  },
  {
    url: GMImg,
    title: "Grass Mower Machines",
    width: "16.66%",
    icon: <ForestIcon sx={{ fontSize: 40 }} />
  },
  {
    url: RCGMImg,
    title: "Remote Controlled Grass Mower",
    width: "16.66%",
    icon: <AgricultureIcon sx={{ fontSize: 40 }} />
  },
  {
    url: LCEImg,
    title: "Litter Collection Equipment",
    width: "16.68%",
    icon: <GrassIcon sx={{ fontSize: 40 }} />
  },
  {
    url: WCMImg,
    title: "Wood Chipper Machines",
    width: "16.66%",
    icon: <GrassIcon sx={{ fontSize: 40 }} />
  },
  {
    url: SMImg,
    title: "Spading Machines",
    width: "16.66%",
    icon: <CleaningServicesIcon sx={{ fontSize: 40 }} />
  },
  {
    url: AWPImg,
    title: "Aerial Working Platform",
    width: "16.66%",
    icon: <CleaningServicesIcon sx={{ fontSize: 40 }} />
  },
  {
    url: TMCImg,
    title: "Truck Mounted Cranes",
    width: "16.66%",
    icon: <LegendToggleIcon sx={{ fontSize: 40 }} />
  },
  {
    url: HGImg,
    title: "Hydraulics Generator",
    width: "16.66%",
    icon: <PrecisionManufacturingIcon sx={{ fontSize: 40 }} />
  },
  {
    url: ZTImg,
    title: "Zoo Technology",
    width: "16.68%",
    icon: <PrecisionManufacturingIcon sx={{ fontSize: 40 }} />
  }
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important",
    height: 100
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15
    },
    "& .MuiImageMarked-root": {
      opacity: 0
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor"
    }
  }
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%"
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.6,
  transition: theme.transitions.create("opacity")
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity")
}));

export default function ButtonBaseDemo() {
  const navigate = useNavigate();

  const handleClick = title => {
    const categoryName = title.replace(/\s+/g, "").toLowerCase();
    navigate(`/categories/${categoryName}`);
  };

  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
    >
      {images.map(image => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width
          }}
          onClick={() => handleClick(image.title)}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: theme => `calc(${theme.spacing(1)} + 6px)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                textAlign: "center"
              }}
            >
              <span>{image.title}</span>
              {image.icon}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
