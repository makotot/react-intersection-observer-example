import * as React from 'react';
import './style.css';
import { InView } from 'react-intersection-observer';

export default function App() {
  return (
    <div>
      {new Array(10).fill(1).map((_, index) => {
        return (
          <div key={index}>
            <InView triggerOnce threshold={0.45}>
              {({ inView, ref }) => (
                <div ref={ref}>
                  <div
                    style={{
                      height: '100vh',
                      padding: '1rem',
                      backgroundColor: inView ? '#1a86ff' : '#ff4e4e',
                      borderBottom: '1px dotted #fff',
                      color: '#fff',
                      fontWeight: 'bold',
                    }}
                  >
                    {inView ? 'Y' : 'N'}
                  </div>
                </div>
              )}
            </InView>
          </div>
        );
      })}
    </div>
  );
}
