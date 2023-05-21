<!DOCTYPE html>
<html>
  <head>
    <title>Resizable Room</title>
    <style>
      #canvas {
        position: relative;
        width: 400px;
        height: 400px;
        border: 1px solid black;
      }
      #room {
        position: absolute;
        top: 50px;
        left: 50px;
        width: 200px;
        height: 200px;
        border: 1px solid red;
      }
      #left,
      #right {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 5px;
        background-color: black;
        cursor: ew-resize;
      }
      #top,
      #bottom {
        position: absolute;
        left: 0;
        right: 0;
        height: 5px;
        background-color: black;
        cursor: ns-resize;
      }
      #area {
        position: absolute;
        top: 0;
        right: 0;
      }
    </style>
  </head>
  <body>
    <div id="canvas">
      <div id="room">
        <div id="left"></div>
        <div id="right"></div>
        <div id="top"></div>
        <div id="bottom"></div>
      </div>
      <div id="area"></div>
    </div>

 
    <script>
      const room = document.querySelector("#room");
      const resizeHandles = document.querySelectorAll(".resize-handle");
      const area = document.querySelector("#area");
      let isResizing = false;
      let resizeType = "";
      let originalX = 0;
      let originalY = 0;
      let originalWidth = 0;
      let originalHeight = 0;

      for (let handle of resizeHandles) {
        handle.addEventListener("mousedown", function (e) {
          isResizing = true;
          resizeType = e.target.classList[1];
          originalX = e.clientX;
          originalY = e.clientY;
          originalWidth = room.offsetWidth;
          originalHeight = room.offsetHeight;
        });
      }

      document.addEventListener("mousemove", resize);

      document.addEventListener("mouseup", function () {
        isResizing = false;
      });

      function resize(e) {
        if (isResizing) {
          let newWidth = originalWidth;
          let newHeight = originalHeight;

          if (resizeType === "left") {
            const newX = e.clientX;
            const diffX = originalX - newX;
            newWidth = originalWidth + diffX;
            room.style.width = newWidth + "px";
            area.innerText = "Area: " + newWidth * newHeight + " sq.ft";
          }

          if (resizeType === "right") {
            const newX = e.clientX;
            const diffX = newX - originalX;
            newWidth = originalWidth + diffX;
            room.style.width = newWidth + "px";
            area.innerText = "Area: " + newWidth * newHeight + " sq.ft";
          }

          if (resizeType === "top") {
            const newY = e.clientY;
            const diffY = originalY - newY;
            newHeight = originalHeight + diffY;
            room.style.height = newHeight + "px";
            area.innerText = "Area: " + newWidth * newHeight + " sq.ft";
          }

          if (resizeType === "bottom") {
const newY = e.clientY;
const diffY = newY - originalY;
newHeight = originalHeight + diffY;
room.style.height = newHeight + "px";
area.innerText = "Area: " + newWidth * newHeight + " sq.ft";
}
}
}
</script>

  </body>
</html>
          