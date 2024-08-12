import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import TractorImg from '../../../img/1.avif';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import ForestIcon from '@mui/icons-material/Forest';
import WavesIcon from '@mui/icons-material/Waves';
import RecyclingIcon from '@mui/icons-material/Recycling';
import NatureIcon from '@mui/icons-material/Nature';
import GrassIcon from '@mui/icons-material/Grass';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import BoltIcon from '@mui/icons-material/Bolt';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';

const images = [
  {
    url: TractorImg,
    title: 'Tree Spades',
    width: '14.28%',
    icon: <NatureIcon sx={{ fontSize: 40 }} />,
  },
  {
    url: TractorImg,
    title: 'Beach Cleaning Machines',
    width: '14.28%',
    icon: <WavesIcon sx={{ fontSize: 40 }} />,
  },
  {
    url: TractorImg,
    title: 'Litter Collection Equipments',
    width: '14.28%',
    icon: <RecyclingIcon sx={{ fontSize: 40 }} />,
  },
  {
    url: TractorImg,
    title: 'Wood Chipper Machines',
    width: '14.28%',
    icon: <ForestIcon sx={{ fontSize: 40 }} />,
  },
  {
    url: TractorImg,
    title: 'Stone Picking Machines',
    width: '14.28%',
    icon: <AgricultureIcon sx={{ fontSize: 40 }} />,
  },
  {
    url: TractorImg,
    title: 'Grass Mower Machines',
    width: '14.28%',
    icon: <GrassIcon sx={{ fontSize: 40 }} />,
  },
  {
    url: TractorImg,
    title: 'Grass Collector Equipment',
    width: '14.28%',
    icon: <GrassIcon sx={{ fontSize: 40 }} />,
  },
  {
    url: TractorImg,
    title: 'Suction Units',
    width: '14.28%',
    icon: <CleaningServicesIcon sx={{ fontSize: 40 }} />,
  },
  {
    url: TractorImg,
    title: 'Vacuum Trailers',
    width: '14.28%',
    icon: <CleaningServicesIcon sx={{ fontSize: 40 }} />,
  },
  {
    url: TractorImg,
    title: 'Tracked Platforms',
    width: '14.28%',
    icon: <LegendToggleIcon sx={{ fontSize: 40 }} />,
  },
  {
    url: TractorImg,
    title: 'Vehicle Mounted Cranes',
    width: '14.28%',
    icon: <PrecisionManufacturingIcon sx={{ fontSize: 40 }} />,
  },
  {
    url: TractorImg,
    title: 'Platforms In Crane Kit',
    width: '14.28%',
    icon: <PrecisionManufacturingIcon sx={{ fontSize: 40 }} />,
  },
  {
    url: TractorImg,
    title: 'Electricity Generator Equipment',
    width: '14.28%',
    icon: <BoltIcon sx={{ fontSize: 40 }} />,
  },
  {
    url: TractorImg,
    title: 'High Pressure Washer',
    width: '14.28%',
    icon: <LocalCarWashIcon sx={{ fontSize: 40 }} />,
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.6,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBaseDemo() {
  const navigate = useNavigate();

  const handleClick = (title) => {
    const categoryName = title.replace(/\s+/g, '').toLowerCase();
    navigate(`/categories/${categoryName}`);
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
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
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
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
