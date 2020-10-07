import React, {
  useEffect, useState, useRef, useCallback
} from 'react';
import styled from 'styled-components';

const TextField = styled.span`
  border-right: 0.08em solid var(--portfolio-font-color);
`;

const TypeWriteComponent = (props) => {
  const {
    data,
    timeout = 1000
  } = props;

  const [currTextPos, setCurrTextPos] = useState(0);
  const [text, setText] = useState('');
  const deleteMode = useRef(false);
  const totalLen = data.length;
  const currText = data[currTextPos];

  const test = useCallback(() => {
    let textToSet;
    if (deleteMode.current) {
      textToSet = currText.substring(0, text.length - 1);
    } else {
      textToSet = currText.substring(0, text.length + 1);
    }
    setText(textToSet);
  }, [currText, deleteMode, text.length]);

  useEffect(() => {
    let timeValue = 200 - Math.random() * 100;

    if (deleteMode.current) {
      timeValue /= 2;
    }
    if (deleteMode.current && text === '') {
      deleteMode.current = false;
      setCurrTextPos((currTextPos + 1) % totalLen);
      timeValue = 500;
    } else if (!(deleteMode.current) && currText === text) {
      deleteMode.current = true;
      timeValue = timeout;
    }
    const timer = setTimeout(() => {
      test();
    }, timeValue);
    return () => {
      clearTimeout(timer);
    };
  }, [currText, currTextPos, deleteMode, test, text, timeout, totalLen]);

  return (
    <h1>
      <div className="typewrite">
        <TextField>{text}</TextField>
      </div>
    </h1>
  );
};

export { TypeWriteComponent };
