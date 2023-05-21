
function room(){

    const room = document.getElementById("room");
    const roomleftWall = document.getElementById("roomleft");
    const roomrightWall = document.getElementById("roomright");
    const roomtopWall = document.getElementById("roomtop");
    const roombottomWall = document.getElementById("roombottom");

    let roomisResizing = false;
    let roomoriginalX = 0;
    let roomoriginalY = 0;
    let roomoriginalWidth = 0;
    let roomoriginalHeight = 0;
    let roomresizeType = "";

    roomleftWall.addEventListener("mousedown", function (e) {
        roomisResizing = true;
        roomoriginalX = e.clientX;
        roomoriginalWidth = parseFloat(getComputedStyle(room, null).getPropertyValue("width").replace("px", ""));
        e.preventDefault();
        roomresizeType = "roomleft";
    });

    roomrightWall.addEventListener("mousedown", function (e) {
        roomisResizing = true;
        roomoriginalX = e.clientX;
        roomoriginalWidth = parseFloat(getComputedStyle(room, null).getPropertyValue("width").replace("px", ""));
        e.preventDefault();
        roomresizeType = "roomright";
     
    });

    roomtopWall.addEventListener("mousedown", function (e) {
        roomisResizing = true;
        roomoriginalY = e.clientY;
        roomoriginalHeight = parseFloat(getComputedStyle(room, null).getPropertyValue("height").replace("px", ""));
        e.preventDefault();
        roomresizeType = "roomtop";
       
    });

    roombottomWall.addEventListener("mousedown", function (e) {
        roomisResizing = true;
        roomoriginalY = e.clientY;
        roomoriginalHeight = parseFloat(getComputedStyle(room, null).getPropertyValue("height").replace("px", ""));
        e.preventDefault();
        roomresizeType = "roombottom"; 
    });

    document.addEventListener("mousemove", function (e) {
        roomresize(e);
    });

    document.addEventListener("mouseup", function (e) {
        roomisResizing = false;
    });


    function roomresize(e) {
        if (!roomisResizing) return;
        switch (roomresizeType) {
            case "roomleft":
            const roomnewWidthLeft = roomoriginalWidth + (roomoriginalX - e.clientX);
            if (roomnewWidthLeft > 0) {  
                room.style.width = roomnewWidthLeft + "px";
                room.style.left = e.clientX + "px";
            }
            roomcalculateArea();
            break;

            case "roomright":
            const roomnewWidthRight = roomoriginalWidth + (e.clientX - roomoriginalX);
            if (roomnewWidthRight > 0) {
                room.style.width = roomnewWidthRight + "px";
            }
            roomcalculateArea();
            break;

            case "roomtop":
            const roomnewHeightTop = roomoriginalHeight + (roomoriginalY - e.clientY);
            if (roomnewHeightTop > 0) {
                room.style.height = roomnewHeightTop + "px";
                room.style.top = e.clientY + "px";
            }
            roomcalculateArea();
            break;

            case "roombottom":
            const roomnewHeightBottom = roomoriginalHeight + (e.clientY - roomoriginalY);
            if (roomnewHeightBottom > 0) {
                room.style.height = roomnewHeightBottom + "px";
            }
            roomcalculateArea();
            break;
        }
    }

    function roomcalculateArea() {
        const roomWidth = parseFloat(getComputedStyle(room, null).getPropertyValue("width").replace("px", ""));
        const roomHeight = parseFloat(getComputedStyle(room, null).getPropertyValue("height").replace("px", ""));
        const roomareaAfterStretching = (roomWidth * roomHeight)*0.0002645833 + 'cm';
        document.getElementById("roomarea").innerHTML = roomareaAfterStretching;
    }
}


function kitchen(){

    const kitchen = document.getElementById("kitchen");
    const kitchenleftWall = document.getElementById("kitchenleft");
    const kitchenrightWall = document.getElementById("kitchenright");
    const kitchentopWall = document.getElementById("kitchentop");
    const kitchenbottomWall = document.getElementById("kitchenbottom");

    let kitchenisResizing = false;
    let kitchenoriginalX = 0;
    let kitchenoriginalY = 0;
    let kitchenoriginalWidth = 0;
    let kitchenoriginalHeight = 0;
    let kitchenresizeType = "";

    kitchenleftWall.addEventListener("mousedown", function (e) {
        kitchenisResizing = true;
        kitchenoriginalX = e.clientX;
        kitchenoriginalWidth = parseFloat(getComputedStyle(kitchen, null).getPropertyValue("width").replace("px", ""));
        e.preventDefault();
        kitchenresizeType = "kitchenleft";
    });

    kitchenrightWall.addEventListener("mousedown", function (e) {
        kitchenisResizing = true;
        kitchenoriginalX = e.clientX;
        kitchenoriginalWidth = parseFloat(getComputedStyle(kitchen, null).getPropertyValue("width").replace("px", ""));
        e.preventDefault();
        kitchenresizeType = "kitchenright";
    });

    kitchentopWall.addEventListener("mousedown", function (e) {
        kitchenisResizing = true;
        kitchenoriginalY = e.clientY;
        kitchenoriginalHeight = parseFloat(getComputedStyle(kitchen, null).getPropertyValue("height").replace("px", ""));
        e.preventDefault();
        kitchenresizeType = "kitchentop";
    });

    kitchenbottomWall.addEventListener("mousedown", function (e) {
        kitchenisResizing = true;
        kitchenoriginalY = e.clientY;
        kitchenoriginalHeight = parseFloat(getComputedStyle(kitchen, null).getPropertyValue("height").replace("px", ""));
        e.preventDefault();
        kitchenresizeType = "kitchenbottom";
    });

    document.addEventListener("mousemove", function (e) {
        kitchenresize(e);
    });

    document.addEventListener("mouseup", function (e) {
        kitchenisResizing = false;
    });

    function kitchenresize(e) {
        if (!kitchenisResizing) return;
        switch (kitchenresizeType) {
            case "kitchenleft":
            const kitchennewWidthLeft = kitchenoriginalWidth + (kitchenoriginalX - e.clientX);
            if (kitchennewWidthLeft > 0) {
                kitchen.style.width = kitchennewWidthLeft + "px";
                kitchen.style.left = e.clientX + "px";
            }
            kitchencalculateArea();                                     
            break;

            case "kitchenright":
            const kitchennewWidthRight = kitchenoriginalWidth + (e.clientX - kitchenoriginalX);
            if (kitchennewWidthRight > 0) {
                kitchen.style.width = kitchennewWidthRight + "px";
            }
            kitchencalculateArea();
            break;

            case "kitchentop":
            const kitchennewHeightTop = kitchenoriginalHeight + (kitchenoriginalY - e.clientY);
            if (kitchennewHeightTop > 0) {
                kitchen.style.height = kitchennewHeightTop + "px";
                kitchen.style.top = e.clientY + "px";
            }
            kitchencalculateArea();
            break;

            case "kitchenbottom":
            const kitchennewHeightBottom = kitchenoriginalHeight + (e.clientY - kitchenoriginalY);
            if (kitchennewHeightBottom > 0) {
                kitchen.style.height = kitchennewHeightBottom + "px";
            }
            kitchencalculateArea();
            break;
        }
    }

    	function kitchencalculateArea() {
            const kitchenWidth = parseFloat(getComputedStyle(kitchen, null).getPropertyValue("width").replace("px", ""));
            const kitchenHeight = parseFloat(getComputedStyle(kitchen, null).getPropertyValue("height").replace("px", ""));
            const kitchenareaAfterStretching = (kitchenWidth * kitchenHeight)*0.0002645833 + 'cm';
            document.getElementById("kitchenarea").innerHTML = kitchenareaAfterStretching;
        }
}



function bathroom(){

    const bathroom = document.getElementById("bathroom");
    const bathroomleftWall = document.getElementById("bathroomleft");
    const bathroomrightWall = document.getElementById("bathroomright");
    const bathroomtopWall = document.getElementById("bathroomtop");
    const bathroombottomWall = document.getElementById("bathroombottom");

    let bathroomisResizing = false;
    let bathroomoriginalX = 0;
    let bathroomoriginalY = 0;
    let bathroomoriginalWidth = 0;
    let bathroomoriginalHeight = 0;
    let bathroomresizeType = "";

    bathroomleftWall.addEventListener("mousedown", function (e) {
        bathroomisResizing = true;
        bathroomoriginalX = e.clientX;
        bathroomoriginalWidth = parseFloat(getComputedStyle(bathroom, null).getPropertyValue("width").replace("px", ""));
        e.preventDefault();
        bathroomresizeType = "bathroomleft";
    });

    bathroomrightWall.addEventListener("mousedown", function (e) {
        bathroomisResizing = true;
        bathroomoriginalX = e.clientX;
        bathroomoriginalWidth = parseFloat(getComputedStyle(bathroom, null).getPropertyValue("width").replace("px", ""));
        e.preventDefault();
        bathroomresizeType = "bathroomright";
    });

    bathroomtopWall.addEventListener("mousedown", function (e) {
        bathroomisResizing = true;
        bathroomoriginalY = e.clientY;
        bathroomoriginalHeight = parseFloat(getComputedStyle(bathroom, null).getPropertyValue("height").replace("px", ""));
        e.preventDefault();
        bathroomresizeType = "bathroomtop";
    });

    bathroombottomWall.addEventListener("mousedown", function (e) {
        bathroomisResizing = true;
        bathroomoriginalY = e.clientY;
        bathroomoriginalHeight = parseFloat(getComputedStyle(bathroom, null).getPropertyValue("height").replace("px", ""));
        e.preventDefault();
        bathroomresizeType = "bathroombottom";
    });

    document.addEventListener("mousemove", function (e) {
        bathroomresize(e);
    });

    document.addEventListener("mouseup", function (e) {
        bathroomisResizing = false;
    });

    function bathroomresize(e) {
        if (!bathroomisResizing) return;
        switch (bathroomresizeType) {
            case "bathroomleft":
            const bathroomnewWidthLeft = bathroomoriginalWidth + (bathroomoriginalX - e.clientX);
            if (bathroomnewWidthLeft > 0) {
                bathroom.style.width = bathroomnewWidthLeft + "px";
                bathroom.style.left = e.clientX + "px";
            }
            bathroomcalculateArea();                                     
            break;

            case "bathroomright":
            const bathroomnewWidthRight = bathroomoriginalWidth + (e.clientX - bathroomoriginalX);
            if (bathroomnewWidthRight > 0) {
                bathroom.style.width = bathroomnewWidthRight + "px";
            }
            bathroomcalculateArea();
            break;

            case "bathroomtop":
            const bathroomnewHeightTop = bathroomoriginalHeight + (bathroomoriginalY - e.clientY);
            if (bathroomnewHeightTop > 0) {
                bathroom.style.height = bathroomnewHeightTop + "px";
                bathroom.style.top = e.clientY + "px";
            }
            bathroomcalculateArea();
            break;

            case "bathroombottom":
            const bathroomnewHeightBottom = bathroomoriginalHeight + (e.clientY - bathroomoriginalY);
            if (bathroomnewHeightBottom > 0) {
                bathroom.style.height = bathroomnewHeightBottom + "px";
            }
            bathroomcalculateArea();
            break;
        }
    }

    	function bathroomcalculateArea() {
            const bathroomWidth = parseFloat(getComputedStyle(bathroom, null).getPropertyValue("width").replace("px", ""));
            const bathroomHeight = parseFloat(getComputedStyle(bathroom, null).getPropertyValue("height").replace("px", ""));
            const bathroomareaAfterStretching = (bathroomWidth * bathroomHeight)*0.0002645833 + 'cm';
            document.getElementById("bathroomarea").innerHTML = bathroomareaAfterStretching;
        }
}