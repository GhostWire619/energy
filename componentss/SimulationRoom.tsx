import React, { useEffect, useState, useRef } from "react";
import bulbOff from "../src/assets/pic_bulboff.jpg";
import bulbOn from "../src/assets/pic_bulbon.jpg";

const API_URL = "192.168.0.253:8000"; // Replace with your backend WebSocket URL

const SimulationRoom: React.FC = () => {
  const [connectionStatus, setConnectionStatus] =
    useState<string>("Disconnected");
  const [status, setStatus] = useState<string>("unknown"); // e.g., "on" or "off"
  const wsRef = useRef<WebSocket | null>(null);

  const connectWebSocket = () => {
    // Determine WebSocket protocol
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    wsRef.current = new WebSocket(`${protocol}//${API_URL}/ws`);

    const ws = wsRef.current;

    // Connection opened
    ws.onopen = () => {
      console.log("Connected to WebSocket");
      setConnectionStatus("Connected");
    };

    // Listen for messages
    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.status) {
          updateUI(data.status);
        }
      } catch (error) {
        console.error("Error parsing WebSocket message:", error);
      }
    };

    // Connection closed
    ws.onclose = () => {
      console.log("Disconnected from WebSocket");
      setConnectionStatus("Disconnected");
      // Optional: Implement reconnection logic
      setTimeout(connectWebSocket, 3000);
    };

    // Connection error
    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
      setConnectionStatus("Error connecting");
    };
  };

  const updateUI = (newStatus: string) => {
    setStatus(newStatus);
  };

  useEffect(() => {
    connectWebSocket();

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${status === "ON" ? bulbOn : bulbOff})`,
          backgroundSize: "cover", // Adjust the image to cover the entire element
          backgroundRepeat: "no-repeat", // Prevent repeating
          backgroundPosition: "center", // Center the image
          height: "99vh", // Set the height of the background
          width: "500px", // Set the width of the background
          zIndex: 1,
        }}
      ></div>
    </div>
  );
};

export default SimulationRoom;
