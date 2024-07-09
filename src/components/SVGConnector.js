import React from 'react';
import { styled } from '@mui/system';

const SVGConnectorContainer = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none', // Prevents interfering with UI elements
});

const SVGConnector = () => {
  return (
    <SVGConnectorContainer>
      <svg width="100%" height="100%">
        {/* Small circle at the top */}
        <circle cx="50%" cy="10%" r="10" fill="#1976d2" />
        
        {/* Half dotted and half solid path */}
        <path
          d="M 50% 10% 
             A 60 60 0 0 1 25% 50%" // First half is a dotted line
          stroke="#1976d2"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4, 4"
        />
        <path
          d="M 25% 50%
             A 60 60 0 0 1 50% 50%" // Second half is a solid line
          stroke="#1976d2"
          strokeWidth="2"
          fill="none"
        />
        {/* Arrow to the second circle */}
        <defs>
          <marker
            id="arrow"
            markerWidth="10"
            markerHeight="10"
            refX="6"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="#1976d2" />
          </marker>
        </defs>
        <path
          d="M 50% 50%
             L 75% 50%"
          stroke="#1976d2"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrow)"
        />
      </svg>
    </SVGConnectorContainer>
  );
};

export default SVGConnector;
