import "./chat.css";
import { useEffect, useState, useRef } from "react";
import EmojiPicker from "emoji-picker-react";

function Chat() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    endRef?.current?.scrollIntoView({ behavior: "smooth" });
  });

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>

        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>

      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut sequi
              temporibus sunt sapiente similique, libero, eius saepe excepturi
              totam unde inventore aliquid. Natus, facilis. Voluptates.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut sequi
              temporibus sunt sapiente similique, libero, eius saepe excepturi
              totam unde inventore aliquid. Natus, facilis. Voluptates.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <div className="texts">
            <img src="./avatar.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut sequi
              temporibus sunt sapiente similique, libero, eius saepe excepturi
              totam unde inventore aliquid. Natus, facilis. Voluptates.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <div className="texts">
            <img src="./avatar.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut sequi
              temporibus sunt sapiente similique, libero, eius saepe excepturi
              totam unde inventore aliquid. Natus, facilis. Voluptates.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="https://plus.unsplash.com/premium_photo-1664640733639-ba75346e87e6?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut sequi
              temporibus sunt sapiente similique, libero, eius saepe excepturi
              totam unde inventore aliquid. Natus, facilis. Voluptates.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>

      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>

        <input
          type="text"
          value={text}
          placeholder="Type a message..."
          onChange={(e) => setText(e.target.value)}
        />

        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={() => setOpen(!open)} />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
}

export default Chat;
