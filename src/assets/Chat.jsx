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
import { GoogleGenerativeAI } from "@google/generative-ai";


const gem_api_key =  import.meta.env.VITE_GEMINI_KEY;
const genAI  = new GoogleGenerativeAI(gem_api_key);  
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

function Chat() {

  const [title, setTitle] = useState("Hello World");
  const [count, setCount] = useState(0);
  const [prompt, setPrompt] = useState("");
  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState([]);


  async function sendPrompt() {
    let curr_prompt = prompt;
    setLoading(true);
    setInput(curr_prompt);
    let result = await model.generateContent(curr_prompt);
    setApiData = await apiData.response;
    const text = response.text();
    setInput(result);
    setLoading(false);
  }

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
                  sendPrompt();
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
                sendPrompt();
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
