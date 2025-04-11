import React, { useState } from "react";
import { Box, Typography, Modal } from "@mui/material";

const PhotoGallery = ({ photos }) => {
  const [open, setOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleOpen = photo => {
    setSelectedPhoto(photo);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPhoto(null);
  };

  if (!photos || photos.length === 0) {
    return null;
  }

  return (
    <Box sx={{ textAlign: "center", padding: "20px" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px",
          justifyContent: "center"
        }}
      >
        {photos.map((photo, index) => (
          <Box
            key={index}
            component="img"
            src={photo}
            alt={`Photo ${index + 1}`}
            onClick={() => handleOpen(photo)}
            sx={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.05)"
              }
            }}
          />
        ))}
      </Box>

      {/* Modal for displaying the large image */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 2,
            outline: "none",
            maxWidth: "90%",
            maxHeight: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {selectedPhoto && (
            <Box
              component="img"
              src={selectedPhoto}
              alt="Selected"
              sx={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain", // Ensures the image fits within the modal
                borderRadius: "8px"
              }}
            />
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default PhotoGallery;
