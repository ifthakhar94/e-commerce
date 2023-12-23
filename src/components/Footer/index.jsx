// Footer.js

import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";

// Replace this with your actual demo component
const DemoComponent = () => {
  return (
    <div>
      <Typography variant="body2" color="text.secondary">
        Your Demo Content Goes Here. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Saepe ipsam mollitia eius minus omnis laborum maxime
        illum impedit culpa maiores?
      </Typography>
    </div>
  );
};

const Footer = () => {
  const theme = useTheme();

  return (
    <FooterContainer theme={theme}>
      <Container maxWidth="md">
        <CardContainer>
          {/* Card 1 */}
          <CardStyled>
            <CardContent>
              <DemoComponent />
            </CardContent>
          </CardStyled>

          {/* Card 2 */}
          <CardStyled>
            <CardContent>
              <DemoComponent />
            </CardContent>
          </CardStyled>

          {/* Card 3 */}
          <CardStyled>
            <CardContent>
              <DemoComponent />
            </CardContent>
          </CardStyled>
        </CardContainer>
      </Container>
    </FooterContainer>
  );
};

const FooterContainer = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(6, 0),
}));

const CardContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
}));

const CardStyled = styled(Card)(({ theme }) => ({
  minWidth: 275,
  margin: theme.spacing(2),
}));

export default Footer;
