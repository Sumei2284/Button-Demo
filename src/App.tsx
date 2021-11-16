import React from 'react';
import FirstLayout from './firstlayut';

function App() {
  const firstlayout = ['TEST1','TEST2','TEST3'];
  const secondlayout = ['AAA','BBB','CCC'];

  return (
    <div className="App">
      <FirstLayout btnName={firstlayout[0]} secondbtnName={secondlayout[0]} />
      <FirstLayout btnName={firstlayout[1]} secondbtnName={secondlayout[1]} />
      <FirstLayout btnName={firstlayout[2]} secondbtnName={secondlayout[2]} />
      <button >console log</button>
    </div>
  );
}

export default App;

