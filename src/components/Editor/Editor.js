import React from 'react';

import './Editor.css';

export default function Editor({ setTitle, setSubTitle, setFont, setAlign, setText }) {
  return (
    <div className="editor">
      <div className="form-control">
        <input name="title" type="text" onChange={(event) => setTitle(event.target.value)} />
        <label htmlFor="title">Title</label>
      </div>
      <div className="form-control">
        <input type="text" onChange={(event) => setSubTitle(event.target.value)} />
        <label>Subtitle</label>
      </div>
      <div className="form-control">
        <select onChange={(event) => setFont(event.target.value)}>
          <option value="architect">{"Architect's Daughter"}</option>
          <option value="comforter">Comforter</option>
          <option value="fredoka">Fredoka</option>
          <option value="indie-flower">Indie Flower</option>
          <option value="monteserrat">Monteserrat</option>
          <option value="roboto">Roboto</option>
          <option value="roboto-mono">Roboto Mono</option>
          <option value="titillium">Titillium</option>
        </select>
        <label>Font</label>
      </div>
      <div className="form-control">
        <label>Alignment</label>
        <div className="radio-group">
          <label>
            <input
              name="align"
              type="radio"
              value="left"
              onChange={(event) => setAlign(event.target.value)}
            />
            <i className="ri-align-left"></i>
          </label>
          <label>
            <input
              name="align"
              type="radio"
              value="center"
              onChange={(event) => setAlign(event.target.value)}
            />
            <i className="ri-align-center"></i>
          </label>
          <label>
            <input
              name="align"
              type="radio"
              value="right"
              onChange={(event) => setAlign(event.target.value)}
            />
            <i className="ri-align-right"></i>
          </label>
        </div>
      </div>
      <div className="form-control">
        <textarea onChange={(event) => setText(event.target.value)} style={{ height: '250px' }} />
        <label>Text</label>
      </div>
    </div>
  );
}
