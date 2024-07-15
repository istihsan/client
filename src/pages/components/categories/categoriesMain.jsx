import * as React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Box, Card, CardContent, CardMedia, CardActionArea, Typography, Button } from '@mui/material/';
import { Link } from 'react-router-dom';
import category from '../../../data/data.js'; // Adjust the path as necessary

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [mainTabValue, setMainTabValue] = React.useState(0);
  const [subTabValue, setSubTabValue] = React.useState(0);
  const [variantTabValue, setVariantTabValue] = React.useState(0);

  const handleMainTabChange = (event, newValue) => {
    setMainTabValue(newValue);
    setSubTabValue(0);
    setVariantTabValue(0);
  };

  const handleSubTabChange = (event, newValue) => {
    setSubTabValue(newValue);
    setVariantTabValue(0);
  };

  const handleVariantTabChange = (event, newValue) => {
    setVariantTabValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        {/* Main Category Tabs */}
        <Tabs value={mainTabValue} onChange={handleMainTabChange} aria-label="main tabs example" centered variant='scrollable'>
          {category.map((cat, index) => (
            <Tab label={cat.name} key={index} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {category.map((cat, mainIndex) => (
        <CustomTabPanel value={mainTabValue} index={mainIndex} key={mainIndex}>
          {/* Sub-category Tabs */}
          <Tabs value={subTabValue} onChange={handleSubTabChange} aria-label="sub tabs example" centered variant='scrollable' sx={{marginLeft: "35%"}}>
            {cat.type.map((type, subIndex) => (
              <Tab label={type.name} key={subIndex} {...a11yProps(subIndex)} />
            ))}
          </Tabs>
          {cat.type.map((type, subIndex) => (
            <CustomTabPanel value={subTabValue} index={subIndex} key={subIndex}>
              <Typography variant="h6" sx={{marginX: "11%", textAlign: "center"}}>{type.description}</Typography>
              <Link component={Link} to={`/categories/${type.name}`} color="inherit" style={{textDecoration: "none",}}><Button variant="contained" sx={{fontFamily: 'Poppins, sans-serif', borderRadius: '60px' ,color:'#F7FFA', backgroundColor:'#FCC783', marginX: '45%', marginTop: '2%'}}>View Variants</Button></Link>
              {/* Variant Tabs */}
              <Tabs value={variantTabValue} onChange={handleVariantTabChange} aria-label="variant tabs example" centered variant='scrollable'>
                {type.variants.map((variant, variantIndex) => (
                  <Tab label={variant.variantName} key={variantIndex} {...a11yProps(variantIndex)} />
                ))}
              </Tabs>
              {type.variants.map((variant, variantIndex) => (
                <CustomTabPanel value={variantTabValue} index={variantIndex} key={variantIndex}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea component={Link} to={`/product/${variant.variantName}`}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={variant.imgLink}
                        alt={variant.variantName}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {variant.variantName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {variant.variantName} is well known for its ability to bla bla bla
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </CustomTabPanel>
              ))}
            </CustomTabPanel>
          ))}
        </CustomTabPanel>
      ))}
    </Box>
  );
}
