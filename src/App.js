import React from "react";
import "./styles.css";
import { Epg, Layout } from "planby";

// Import hooks
import { useApp } from "./useApp";

// Import components
import { Timeline, ChannelItem, ProgramItem } from "./components";

function App() {
  const { isLoading, getEpgProps, getLayoutProps } = useApp();

  let location = window.location.href

  let logoSrc
  if (location.includes('1111') || location.includes('11eleven')) {
    logoSrc = 'https://vlive.imgix.net/1111/screening/images/landingpagelogo.png?auto=compress,format'
  } else if (location.includes('revolt')) {
    logoSrc = 'https://revolt.imgix.net/screening/images/landingpagelogo.png?auto=compress,format'
  } else {
    logoSrc = '"https://envoi-common-resources.imgix.net/saas/envoi/images/landingpagelogo.png?auto=compress,enhance,format"'
  }

  return (
    <div id="main">
      <div style={{ height: "80vh", width: "100%" }}>
        <img
          src={logoSrc}
          alt="logo"
        />

        <Epg isLoading={isLoading} {...getEpgProps()}>
          <Layout
            {...getLayoutProps()}
            renderTimeline={(props) => <Timeline {...props} />}
            renderProgram={({ program, ...rest }) => (
              <ProgramItem key={program.data.id} program={program} {...rest} />
            )}
            renderChannel={({ channel }) => (
              <ChannelItem key={channel.uuid} channel={channel} />
            )}
          />
        </Epg>
      </div>
    </div>
  );
}

export default App;
