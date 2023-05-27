function BoxColor(props) {

    const {r,g,b} = props


    const red = Math.max(0, Math.min(255, r));
    const green = Math.max(0, Math.min(255, g));
    const blue = Math.max(0, Math.min(255, b));


    const boxStyle = {
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        width: "200px",
        height: "100px",
        border: "1px solid black",
        margin: "10px",
      };
    
      return <div style={boxStyle}></div>;
  



}

export default BoxColor