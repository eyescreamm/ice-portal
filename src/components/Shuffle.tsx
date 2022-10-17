import React, { useEffect, useState } from 'react';

type Props = {
  className?: string;
  text: string;
  newLine?: boolean;
};

const Shuffle = ({ className, text, newLine }: Props) => {
  const [textShuffled, setTextShuffled] = useState('');

  const endShuffledArrayBoolean = (endShuffledArray: Array<boolean>): void => {
    // Randomly determine the number of character that ends the shuffle
    for (let i = 0; i < 2; i++) {
      const randomNum = Math.floor(Math.random() * text.length);
      if (endShuffledArray[randomNum] === false) {
        endShuffledArray[randomNum] = true;
        break;
      }
    }
  };

  const isFilled = (endShuffled: Array<boolean>): boolean => {
    return !endShuffled.includes(false);
  };

  useEffect(() => {
    let endShuffledArray = Array(text.length).fill(false);
    const sym = [',', '.', '/', '^', '¥', '*', '*', '_', '#', '$', '!', '&'];

    // update text at set time interval
    const updateText = setInterval(() => {
      // judge all char have finished shuffling
      if (isFilled(endShuffledArray)) {
        clearInterval(updateText);
        return;
      }

      for (let i = 0; i < 2; i++) {
        endShuffledArrayBoolean(endShuffledArray);
      }

      const newText = text.split('').map((char, index) => {
        if (endShuffledArray[index]) {
          return char;
        } else {
          if (char === ' ') {
            return ' ';
          }
          return sym[Math.floor(Math.random() * sym.length)];
        }
      });

      setTextShuffled(newText.join(''));
    }, 30);

    return () => clearInterval(updateText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return newLine === false ? (
    <span className={className}>{textShuffled}</span>
  ) : (
    <div className={className}>{textShuffled}</div>
  );
};

export default Shuffle;
