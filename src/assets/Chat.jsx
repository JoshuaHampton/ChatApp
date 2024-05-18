import { useState } from "react";
import {
  IconButton,
  Chip,
  Container,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function Chat() {
  const [title, setTitle] = useState("Hello World");
  const [count, setCount] = useState(0);
  const [prompt, setPrompt] = useState("");
  const [input, setInput] = useState("");

  return (
    <>
      <Container component="controls">
        <h4>{title}</h4>
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="A Tale Yet To Be Told..."
          label={title}
          style={{ marginTop: "-10px", width: "100%", height: "82vh" }}
          disabled={true}
        />

        <div>
          {/* 
            Chips can be used to specify specific commands or actions.
          <Chip label="Hello" /> */}
          <Typography sx={{ display: "flex" }}>
            <TextField
              id="outlined"
              label="Prompt"
              size="small"
              sx={{
                width: "100%",
              }}
              value={input}
              onChange={(ev) => {
                setInput(ev.target.value);
              }}
              onKeyDown={(ev) => {
                if (ev.key === "Enter") {
                  setCount((count) => count + 1);
                  setPrompt(input);
                  setInput("");
                }
              }}
            />
            <IconButton
              aria-label="send"
              color="primary"
              size="small"
              onClick={(ev) => {
                setCount((count) => count + 1);
                setPrompt(input);
                setInput("");
              }}
            >
              <SendIcon />
            </IconButton>
          </Typography>
        </div>
      </Container>
    </>
  );
}

export default Chat;
