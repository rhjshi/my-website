import { useEffect } from 'react';
import TextScrambler from '../util/TextScrambler';

const ScramblingText = (props) => {
  useEffect(() => {
    const el = document.querySelector(`#${props.id}`);
    const fx = new TextScrambler(el);
    const pm = new PhraseManager(props.phrases);
    const next = () => {
      fx.setText(pm.getNextPhrase()).then(() => {
        setTimeout(next, 2500)
      })
    };
    next();
  }, []);
  return <div id={props.id} className={props.className}/>;
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