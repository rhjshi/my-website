import { useEffect, useRef } from 'react';
import TextScrambler from '../util/TextScrambler';

const ScramblingText = props => {
  const textEl = useRef(null);
  useEffect(() => {
    const fx = new TextScrambler(textEl.current);
    const pm = new PhraseManager(props.phrases);
    const intervalID = setInterval(() => fx.setText(pm.getNextPhrase()), 4000);

    return () => clearInterval(intervalID);
  }, []);

  return <div ref={textEl} className={props.className}>{props.defaultText}</div>;
}

export default ScramblingText;

class PhraseManager {
  constructor (phrases) {
    this.phrases = phrases;
    this.counter = 0;
  }

  getNextPhrase() {
    if (this.phrases.length === 0) return '';
    const result = this.phrases[this.counter];
    this.counter = (this.counter + 1) % this.phrases.length;
    return result;
  }
};