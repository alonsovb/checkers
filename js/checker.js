var x = $(document);
var checker;
var actualPlayer = 1;
var player1 = "img/lemon.png";
var player2 = "img/grape.png";
x.ready(initialize);

function initialize() {
	$("#dialog").dialog({buttons: [
		{
			text: "Ok",
			click: function() {
				generate(8,8);
				$(this).dialog("close");
			}
		}
		]});
}

function generate(x, y) {

	var colors = ['white','black'];
	var players =[player1,player2];

	checker = new Array(x);

	for (var i = 0; i < x; i++) {

		checker[i] = new Array(y);

		for (var j = 0; j < y; j++) {

			// Set value at this position
			if ((j+i)%2==1) {

				// i < 3 means first 3 lines
				if (i < 3) {
					checker[i][j] = 1;
				}
				// i >x-4 means last 3 lines
				else if (i > x-4) {
					checker[i][j] = 2;
				}
			}
			else {
				// set empty when white cell
				checker[i][j] = 0;
			}

			var img = '';
			if (checker[i][j] > 0) {
				img = '<img class="token" src="'+players[checker[i][j]-1]+'"/>';
			}

			// Get actual color
			var color = colors[(i+j)%2];
			$("#checker").append("<div class='"+color+"' id='"+j+","+i+"'>"+img+"</div>");
		}

		// Jump to next line
		$("#checker").append("<div class='clear'></div>");
	}

	$(".black,.white").hover(select,unselect);
	$(".black,.white").droppable({
		drop:tokenDropped
	});
	$(".token").draggable();

}

function select() {
	$(this).css("border", "2px solid #eee");
}

function unselect() {
	$(this).css("border", "2px solid black");
}

function tokenDropped() {
	var x = this.id.split(',');
	checker[x[0],x[1]] = 5;
	alert(checker);
}