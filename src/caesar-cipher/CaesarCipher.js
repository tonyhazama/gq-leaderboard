import { Input } from 'antd';
import React, { useState } from 'react';
import './CaesarCipher.css';

export default function CaesarCipher() {
  const [value, setValue] = useState('');
  const [timestamp, setTimeStamp] = useState('');
  const correctValue = ['o sole mio', '\'o sole mio'];
  const onChange = (val) => {
    if (typeof val === 'string') {
      const realValue = val.toLowerCase();
      if (correctValue.includes(realValue) && !timestamp) {
        setTimeStamp(Date.now());
      }

    }
    setValue(val);
  };

  return (
    <div 
      className="CaesarCipher" 
      style={{  
        backgroundImage: `url('${process.env.PUBLIC_URL}/bg.jpg')`,
      }}
    > 
      <div className="title">Translate this text</div>
      <br />
      {/* <div className="form">
        <div>Che bella cosa na jurnata 'e sole [8]</div>
        <div>N'aria serena doppo na tempesta [3]</div>
        <div>Pe' ll'aria fresca pare gia' na festa [7]</div>
        <div>Che bella cosa na jurnata 'e sole [4]</div>
      </div> */}
      <div>
        <div>Kpm jmtti kwai vi rczvibi 'm awtm [8]</div>
        <div>Q'duld vhuhqd grssr qd whpshvwd [3]</div>
        <div>Wl' ss'hyph mylzjh whyl nph' uh mlzah [7]</div>
        <div>Gli fippe gswe re nyvrexe 'i wspi [4]</div>
      </div>
      <div>
      <br />
      </div>
      <div className="title">Find out the meaning of it</div>
      <br />
      <div>
        <input className="CaesarInput" value={value} onChange={e => {onChange(e.target.value)}} maxLength={14} />
      </div>
      <br />
      <div className="title">{timestamp ? (
        'Your answer is correct, screenshot this and send it the Grandmaster ' + timestamp
      ) : !!value ? 'wrong answer' : ''}</div>
    </div>
  )
}
