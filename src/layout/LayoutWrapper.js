import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Root, Header, Content } from "layout";
import SelectChannel from "components/SelectChannel";
import ChannelSettingsBtn from "components/ChannelSettingsBtn";

const config = {
  collapsible: {
    xs: false,
    sm: false,
    md: false,
  },
  collapsedWidth: {
    xs: 64,
    sm: 64,
    md: 64,
  },
  clipped: {
    xs: false,
    sm: false,
    md: false,
  },
  headerPosition: {
    xs: "relative",
    sm: "relative",
    md: "relative",
  },
  squeezed: {
    xs: false,
    sm: false,
    md: true,
  },
};

const LayoutWrapper = props => {
  const { children } = props;
  return (
    <Root config={config} style={{ minHeight: "100vh" }}>
      <CssBaseline />
      <Header>
        <SelectChannel />
        <ChannelSettingsBtn />
      </Header>
      <Content>{children}</Content>
    </Root>
  );
};

export default LayoutWrapper;
