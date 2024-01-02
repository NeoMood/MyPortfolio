import React from "react";
import AnimatedCursor from "react-animated-cursor"

export default function Cursor() {
  return (
    <>
      {/* <AnimatedCursor
        // color="#fff"
        color='193, 11, 111'
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          mixBlendMode: 'exclusion'
        }}
      /> */}
      <AnimatedCursor
        innerSize={20}
        outerSize={10}
        // color='193, 11, 111'
        color="#ff0000"
        innerScale={0.7}
        outerScale={5}
        outerAlpha={0.2}
        // outerStyle={{
        //   mixBlendMode: 'exclusion'
        // }}
        // hasBlendMode={true}
        // innerStyle={{
        //   backgroundColor: 'var(#4B0082)'
        // }}
        // outerStyle={{
        //   border: '3px solid var(#4B0082)'
        // }}
      />
    </>
  );
}