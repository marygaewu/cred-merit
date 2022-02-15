import React, { useState } from "react";
import styled from "styled-components";

// import "@react-pdf-viewer/core/lib/styles/index.css";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// import "./styles.css";
//import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

function TranscriptPreview() {
  return (
    <TransCard>
      <Center>
        <p>Preview Transcript</p>
      </Center>
    </TransCard>
  );
}

const TransCard = styled.div`
  height: 100%;
  width: 50%;
  position: absolute;
  border-radius: 1rem;
  color: black;
  background-color: #e4e4e4;
  text-align: center;
  display: flex;
  justify-content: center;
  left: 45%;
  margin: 0%;
`;

const Center = styled.div`
  align-items: center;
  justify-content: center;
  padding: ;
`;

export default TranscriptPreview;
