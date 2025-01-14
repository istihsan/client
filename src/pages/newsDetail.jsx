import React from "react";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import newsData from "../data/newsData";
import Navbar from "./components/main/navbar";
import Footer from "./components/main/footer";
import WhatsAppFab from "./components/whatsappFAB/whatsappFAB";
import TractorIMG from "../img/336094.png";

const NewsDetail = () => {
  const { id } = useParams();
  const newsItem = newsData.find(news => news.id === parseInt(id));

  if (!newsItem) {
    return <div>News not found!</div>;
  }

  const MainContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  }));

  const ContentContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5%",
    minHeight: "55vh",
    backgroundColor: "#FFF0DD"
  }));

  const TextContainer = styled("div")(({ theme }) => ({
    flex: 1,
    paddingRight: "2%"
  }));

  const ImageContainer = styled("div")(({ theme }) => ({
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }));

  return (
    <MainContainer>
      <Navbar />
      <ContentContainer>
        <TextContainer>
          <h1>{newsItem.title}</h1>
          <p>{newsItem.description}</p>
          <p>Date: {new Date(newsItem.date).toLocaleDateString()}</p>
        </TextContainer>
        <ImageContainer>
          <img
            // src={newsItem.image} (Delete comment when data is inserted)
            src={TractorIMG}
            alt={newsItem.title}
            style={{
              maxWidth: "90%",
              maxHeight: "400px",
              objectFit: "contain"
            }}
          />
        </ImageContainer>
      </ContentContainer>
      <WhatsAppFab />
      <Footer />
    </MainContainer>
  );
};

export default NewsDetail;
