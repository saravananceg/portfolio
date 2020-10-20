import React, {
  useEffect, useState, useRef, useCallback
} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextField = styled.span`
  border-right: 0.08em solid var(--portfolio-font-color) ;
`;

const TypeWriterComponent = (props) => {
  const {
    data,
    timeout = 1000
  } = props;

  const [currTextPos, setCurrTextPos] = useState(0);
  const [text, setText] = useState('');

  /* Backspace / delete mode */
  const deleteMode = useRef(false);

  const totalLen = data.length;
  /* Current text in display */
  const currText = data[currTextPos];

  const updateText = useCallback(() => {
    let textToSet;
    if (deleteMode.current) {
      textToSet = currText.substring(0, text.length - 1);
    } else {
      textToSet = currText.substring(0, text.length + 1);
    }
    setText(textToSet);
  }, [currText, text]);

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
      updateText();
    }, timeValue);

    return () => {
      clearTimeout(timer);
    };
  }, [currText, currTextPos, updateText, text, timeout, totalLen]);

  return (
    <h1>
      <div className="typewrite">
        <TextField>{text}</TextField>
      </div>
    </h1>
  );
};

TypeWriterComponent.defaultProps = {
  timeout: 1000
};

TypeWriterComponent.propTypes = {
  /*
    Array of strings to produce the typewriter effect
    data: ["I do Javascript", "I do React", "I do SCSS"]
  */
  data: PropTypes.arrayOf(PropTypes.number).isRequired,

  /*
    After complete delete of a word, the time for next word to appear
  */
  timeout: PropTypes.number
};

export default TypeWriterComponent;
