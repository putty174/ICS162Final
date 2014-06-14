#pragma strict

var player : GameObject;

function Start () {
	player = GameObject.FindGameObjectWithTag("Player");
}

function Update () {
	var fwd = transform.TransformDirection (Vector3.forward);
	var scale = player.transform.localScale;
	if (Input.GetMouseButtonDown(0) && scale.x < 0.5F && Physics.Raycast (transform.position, fwd, 10)) {
		print ("There is a box in front of the object!");
		animation.Play("box_open");
	}
}