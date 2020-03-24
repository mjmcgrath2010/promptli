import { render, useState, useEffect } from "preact/compat";
import Button from "./components/Button";
import Modal from "./components/Modal";

const App = props => {
  const [state, setState] = useState({ dialogOpen: false });

  useEffect(() => {
    setState({ ...state, ...props });
  }, [props]);

  const openDialog = () => setState({ dialogOpen: true });

  const closeDialog = () => setState({ dialogOpen: false });

  const { title, btnText, dialogOpen } = state;

  return (
    <div>
      <Button onClick={openDialog} text={btnText || "Click here"} />
      {dialogOpen && <Modal title={title} onClose={closeDialog} />}
    </div>
  );
};

export const init = (config, selector) =>
  render(<App {...config} />, document.getElementById(selector));

const wrapper = document.getElementById("promptli-widget-preview-container");
wrapper
  ? init({ title: "hello world!" }, "promptli-widget-preview-container")
  : false;
