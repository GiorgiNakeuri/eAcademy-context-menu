import { useState } from "react";
import "./App.css";
import { ContextMenu } from "./ContextMenu";

const models = ["Model S", "Model 3", "Model X", "Model Y"];

const initialState = { open: false, x: null, y: null, li: null };

function App() {
  const [contextMenuState, setContextMenuState] = useState(initialState);
  const handleContextMenuClick = (e) => {
    e.preventDefault();

    setContextMenuState({
      open: true,
      x: e.pageX,
      y: e.pageY,
      li: e.target.innerText,
    });
  };

  return (
    <div className="App">
      <p>Tesla Models </p>

      <ul>
        {models.map((models) => (
          <li key={models} onContextMenu={handleContextMenuClick}>
            {models}
          </li>
        ))}
      </ul>

      <ContextMenu
        handleOutsideClick={() => setContextMenuState(initialState)}
        {...contextMenuState}
      />
    </div>
  );
}

export default App;
