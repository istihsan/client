import React from "react";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import newsData from "../data/newsData";
import Navbar from "./components/main/navbar";
import Footer from "./components/main/footer";
import WhatsAppFab from "./components/whatsappFAB/whatsappFAB";
import { useTranslation } from "react-i18next";

const NewsDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const newsItem = newsData.find(news => news.id === parseInt(id));

  if (!newsItem) {
    return <div>{t("news.not_found")}</div>;
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
          <h1>{t(newsItem.titleKey)}</h1>
          <p>{t(newsItem.descriptionKey)}</p>
          <p>
            {t("news.date")}: {new Date(newsItem.date).toLocaleDateString()}
          </p>
        </TextContainer>
        <ImageContainer>
          <img
            src={newsItem.image}
            alt={t(newsItem.titleKey)}
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
