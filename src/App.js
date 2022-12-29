import React from "react";
import "./styles.css";
import { Epg, Layout } from "planby";

// Import hooks
import { useApp } from "./useApp";

// Import components
import { Timeline, ChannelItem, ProgramItem } from "./components";

function App() {
  const { isLoading, getEpgProps, getLayoutProps } = useApp();

  return (
    <div id="main">
      <div style={{ height: "80vh", width: "100%" }}>
        <img
          src="https://envoi-common-resources.imgix.net/saas/envoi/images/landingpagelogo.png?auto=compress,enhance,format"
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
