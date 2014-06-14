#pragma strict
var done = false;
var total = 1;
var col = 0;
var hand;
var fence : GameObject;

function Start () {
	fence = GameObject.FindGameObjectWithTag("fence");
}

function Update () {
		var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
		var hit : RaycastHit;
		if (Input.GetMouseButtonDown(0) && Physics.Raycast (ray, hit, 150)) {
		var target = hit.transform.gameObject;
		Debug.Log(target.tag);
		var scale = transform.localScale;
		switch(target.tag){
			case "bottle":
				if( scale.x > 0.5F) {
					scale.x = scale.x * 0.2F;
					scale.y = scale.y * 0.2F;
					scale.z = scale.z * 0.2F;
					transform.localScale = scale;
				}
				break;
			case "Player":
				Debug.Log("Hit Player");
				scale.x = scale.x * 0.2F;
				scale.y = scale.y * 0.2F;
				scale.z = scale.z * 0.2F;
				transform.localScale = scale;
				break;
			case "box":
				scale.x = scale.x * 5F;
				scale.y = scale.y * 5F;
				scale.z = scale.z * 5F;
				transform.localScale = scale;
				transform.position = new Vector3(transform.position.x, -5 + scale.x, transform.position.z);
				break;
			case "rose":
				var newColor;
				switch(col){
				case 0:
					newColor = Color(0.537,0.196,0.196);
					break;
				case 1:
					newColor = Color(0.196,0.537,0.196);
					break;
				case 2:
					newColor = Color(0.537,0.537,0.537);
					break;
				case 3:
					newColor = Color(0.196,0.196,0.537);
					break;
				case 4:
					newColor = Color(0.196,0.196,0.196);
					break;
				case 5:
					col = 0;
					newColor = Color(0.537,0.196,0.196);
					break;
				}
				target.GetComponent(rose).color = col;
				target.renderer.material.color = newColor;
				col++;
		}
    }
    
    var pos = transform.position;
    if(pos.x > 10.5 && pos.y < -3.25 && pos.z > -0.15 && pos.z < 3.80) {
    	transform.position = new Vector3(-4.5,0,-10);
	}
	else if(pos.x > -6 && pos.x < -4.2 && pos.z > 11.5) {
			transform.position = new Vector3(2,4.5,1.8);
	}
	else if(pos.x > 0.75 && pos.x < 3.25 && pos.y < -1.5 && pos.z < -4){
		transform.position = new Vector3(-13,-5.5,-10);
	}
	else if(pos.x > -5.7 && pos.x < -4.1 && pos.y > -1.3 && pos.y < 1 && pos.z < -11.5) {
		transform.position = new Vector3(6,3,11);
	}
	else if(pos.y < -100) {
		if(done)
			transform.position = new Vector3(-10,100,0);
		else
			transform.position = new Vector3(-4.5,0,-10);
	}
	
	var roses = GameObject.FindGameObjectsWithTag("rose");
	total = 0;
	for(var r in roses)
		total += r.GetComponent(rose).color;
	Debug.Log("Total: " + total);
	if (total == 0) {
		
		done = true;
		Debug.Log("Done");
		}
	else {
		if(total < 9)
			fence.transform.position = new Vector3(-27.715,-9.455,2.514);
		else
			fence.transform.position = new Vector3(-27.715,-6.713,2.514);
		done = false;
	}
}