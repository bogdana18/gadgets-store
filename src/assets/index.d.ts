// Declare that SVG files can be imported as React components
declare module '*.svg' {
  // Import React and its ImgHTMLAttributes interface
  import React = require('react');

  // Declare the React component that will render the SVG
  const ReactComponent: React.FC<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
  >;
  // Export the React component as the default export
  export default ReactComponent;
}
