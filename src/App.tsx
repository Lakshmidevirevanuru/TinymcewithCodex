import React, { useEffect, useState } from "react";
import "./App.css";
import RealTimeTinymceEditor from "./RealTimeTinymceEditor";

function App() {
  const { Codox } = window;

  const apiKey = "";
  const username = "LakshmiDevi";

  const [codox, setCodoxInstance] = useState<any>(null);

  useEffect(() => {
    const codoxInstance = new Codox();
    setCodoxInstance(codoxInstance);
  }, []);

  const updateContent = (docId: string, content: string) => {};

  return (
    <div className="App">
      <div id="app">
        <div className="main-container">
          <div className="document-container"></div>
          <div className="editors">
            <RealTimeTinymceEditor
              username={username}
              apiKey={apiKey}
              codox={codox}
              docId="Test"
              model="Test"
              updateContent={updateContent}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
