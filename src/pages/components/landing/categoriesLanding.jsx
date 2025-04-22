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
import TMCImg from "../../../img/10. Truck Mounted Cranes/TRUCK CRANE.png";
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
import { useTranslation } from "react-i18next";

const images = [
  {
    url: TSImg,
    titleKey: "categories.tree_spades",
    englishName: "treespades",
    width: "16.66%",
    icon: <NatureIcon sx={{ fontSize: 40 }} />
  },
  {
    url: BCMImg,
    titleKey: "categories.beach_cleaning_machines",
    englishName: "beachcleaningmachines",
    width: "16.66%",
    icon: <WavesIcon sx={{ fontSize: 40 }} />
  },
  {
    url: GCImg,
    titleKey: "categories.grass_collector_machines",
    englishName: "grasscollectormachines",
    width: "16.66%",
    icon: <RecyclingIcon sx={{ fontSize: 40 }} />
  },
  {
    url: GMImg,
    titleKey: "categories.grass_mower_machines",
    englishName: "grassmowermachines",
    width: "16.66%",
    icon: <ForestIcon sx={{ fontSize: 40 }} />
  },
  {
    url: RCGMImg,
    titleKey: "categories.remote_controlled_grass_mower",
    englishName: "remotecontrolledgrassmower",
    width: "16.66%",
    icon: <AgricultureIcon sx={{ fontSize: 40 }} />
  },
  {
    url: LCEImg,
    titleKey: "categories.litter_collection_equipment",
    englishName: "littercollectionequipment",
    width: "16.68%",
    icon: <GrassIcon sx={{ fontSize: 40 }} />
  },
  {
    url: WCMImg,
    titleKey: "categories.wood_chipper_machines",
    englishName: "woodchippermachines",
    width: "16.66%",
    icon: <GrassIcon sx={{ fontSize: 40 }} />
  },
  {
    url: SMImg,
    titleKey: "categories.spading_machines",
    englishName: "spadingmachines",
    width: "16.66%",
    icon: <CleaningServicesIcon sx={{ fontSize: 40 }} />
  },
  {
    url: AWPImg,
    titleKey: "categories.aerial_working_platform",
    englishName: "aerialworkingplatform",
    width: "16.66%",
    icon: <CleaningServicesIcon sx={{ fontSize: 40 }} />
  },
  {
    url: TMCImg,
    titleKey: "categories.truck_mounted_cranes",
    englishName: "truckmountedcranes",
    width: "16.66%",
    icon: <LegendToggleIcon sx={{ fontSize: 40 }} />
  },
  {
    url: HGImg,
    titleKey: "categories.hydraulics_generator",
    englishName: "hydraulicsgenerator",
    width: "16.66%",
    icon: <BoltIcon sx={{ fontSize: 40 }} />
  },
  {
    url: ZTImg,
    titleKey: "categories.zoo_technology",
    englishName: "zootechnology",
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
  const { t } = useTranslation();

  const handleClick = englishName => {
    navigate(`/categories/${englishName}`);
  };

  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
    >
      {images.map(image => (
        <ImageButton
          focusRipple
          key={image.titleKey}
          style={{
            width: image.width
          }}
          onClick={() => handleClick(image.englishName)}
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
              <span>{t(image.titleKey)}</span>
              {image.icon}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
