import React from "react";
import { useLayoutEffect } from "react";
import { useRef, useState } from "react";

export const Quote = ({ quote, author }) => {
  
  const refQuote = useRef();
  const [boxSize, setBoxSize] = useState({ width:0, height: 0});

  useLayoutEffect(() => {
    const { height, width } = refQuote.current.getBoundingClientRect();
    setBoxSize({height, width});
  }, [])

  return (
    <>
    <blockquote className="blockquote text-end" style={{display: 'flex'}}>
      <p className="mb-1" ref ={refQuote}>{quote}</p>
      <footer className="blockquote-footer">{author}</footer>
    </blockquote>
    <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
