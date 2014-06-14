#pragma strict

var player : GameObject;

function Start () {
	player = GameObject.FindGameObjectWithTag("Player");
}

function Update () {
	transform.position = new Vector3(player.transform.position.x - 2, -100, player.transform.position.z - 1.5);
}