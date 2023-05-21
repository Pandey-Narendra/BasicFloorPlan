<!DOCTYPE html>
<html>
	<head>
		<title>Bedroom Floor Plan</title>
        <link rel="stylesheet" href="house.css">
	</head>
	<body>
		<h1>Bedroom Floor Plan</h1>
		<h2>Room Area : <span id="roomarea"></span></h2>
		<h2>Kitchen Area : <span id="kitchenarea"></span></h2>
        <h2>Bathroom Area : <span id="bathroomarea"></span></h2>

		<div id="canvas">
			<div id="room" onmouseenter="room()">room
				<div id="roomleft"></div>
				<div id="roomright"></div>
				<div id="roomtop"></div>
				<div id="roombottom"></div>
			</div>

			<div id="kitchen" onmouseenter="kitchen()">kitchen
				<div id="kitchenleft"></div>
				<div id="kitchenright"></div>
				<div id="kitchentop"></div>
				<div id="kitchenbottom"></div>
			</div>

            <div id="bathroom" onmouseenter="bathroom()">bathroom
				<div id="bathroomleft"></div>
				<div id="bathroomright"></div>
				<div id="bathroomtop"></div>
				<div id="bathroombottom"></div>
			</div>
		</div>

        <script src="house.js"></script>
	</body>
</html>

