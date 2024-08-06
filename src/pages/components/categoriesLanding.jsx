import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import TractorImg from '../../img/1.avif';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import BuildIcon from '@mui/icons-material/Build';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const images = [
  {
    url: TractorImg,
    title: 'Tractors',
    width: '14.28%',
    icon: <AgricultureIcon sx={{ fontSize: 40 }} />,
  },
  {
    url: TractorImg,
    title: 'Construction',
    width: '14.28%',
    icon: <BuildIcon sx={{ fontSize: 40 }} />,
  },
  {
    url: TractorImg,
    title: 'Sports Equipment',
    width: '14.28%',
    icon: <SportsFootballIcon sx={{ fontSize: 40 }} />,
  },
  {
    url: TractorImg,
    title: 'Boats',
    width: '14.28%',
    icon: <DirectionsBoatIcon sx={{ fontSize: 40 }} />,
  },
  {
    url: TractorImg,
    title: 'Air Conditioning',
    width: '14.28%',
    icon: <AcUnitIcon sx={{ fontSize: 40 }} />,
  },
  {
    url: TractorImg,
    title: 'Tractors',
    width: '14.28%',
    icon: <AgricultureIcon sx={{ fontSize: 40 }} />,
  },
  {
    url: TractorImg,
    title: 'Tractors',
    width: '14.28%',
    icon: <AgricultureIcon sx={{ fontSize: 40 }} />,
  },
  {
    url: TractorImg,
    title: 'Tractors',
    width: '14.28%',
    icon: <AgricultureIcon sx={{ fontSize: 40 }} />,
  },
  {
    url: TractorImg,
    title: 'Tractors',
    width: '14.28%',
    icon: <AgricultureIcon sx={{ fontSize: 40 }} />,
  },
  {
    url: TractorImg,
    title: 'Tractors',
    width: '14.28%',
    icon: <AgricultureIcon sx={{ fontSize: 40 }} />,
  },
  {
    url: TractorImg,
    title: 'Tractors',
    width: '14.28%',
    icon: <AgricultureIcon sx={{ fontSize: 40 }} />,
  },
  {
    url: TractorImg,
    title: 'Tractors',
    width: '14.28%',
    icon: <AgricultureIcon sx={{ fontSize: 40 }} />,
  },
  {
    url: TractorImg,
    title: 'Tractors',
    width: '14.28%',
    icon: <AgricultureIcon sx={{ fontSize: 40 }} />,
  },
  {
    url: TractorImg,
    title: 'Tractors',
    width: '14.28%',
    icon: <AgricultureIcon sx={{ fontSize: 40 }} />,
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
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
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
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
              {image.icon} {/* Render the icon based on the image object */}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}