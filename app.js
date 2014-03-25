con = can.getContext('2d')
sky = {
	color: '#F74',
	x:0,
	y:0,
	draw: function(){
		con.fillStyle = this.color;
		con.fillRect(this.x,this.y,can.width,can.height);
	}
}

var Mountain = (function(){

	function Mountain(){
		this.color = 'black';
		this.y = can.height/2;
		this.hilly = 0.1;
		this.start = -50;
		this.dipCount = 5;
		
		this.end = can.width;
		this.resetDips();
	}

	Mountain.prototype.resetDips = function(){
		this.dips = [];
		for(var i = 0; i <= this.dipCount; i ++){
			this.dips.push({
				x:(this.end/this.dipCount*i),
				y:this.y+(this.y*Math.random()*this.hilly)
			});
			var dip = this.dips[this.dips.length-1];
		}
	};

	Mountain.prototype.draw = function(){
		var end = can.width;
		con.beginPath();
		con.moveTo(0,this.y);
		con.fillStyle = this.color;
		for(var i = 0; i < this.dips.length; i ++){
			var dip = this.dips[i];
			con.lineTo(dip.x,dip.y)
		}
		con.lineTo(end,end);
		con.lineTo(0,end);
		con.fill();
	};

	return Mountain;
})();


sky.draw();
var m = new Mountain();
m.draw();

// con.globalCompositeOperation = 'color-burn';
// con.translate(can.width/2,can.height/2)
// con.fillStyle = 'orange'
// con.fillRect(0,0,150,150)

// con.shadowColor = '#000';
// radgrad = con.createRadialGradient(75,75,0,75,75,60);
// radgrad.addColorStop(0, 'rgba(0,0,0,1)');
// radgrad.addColorStop(1, 'rgba(0,0,0,0)');
// con.fillStyle = radgrad;
// con.rect(0,0,150,150);
// con.fill()