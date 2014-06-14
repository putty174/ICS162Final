#pragma strict

var color = 0;

function Start () {
	Debug.Log(renderer.material.color);
	renderer.material.color = Color(0.537,0.537,0.537);
}

function Update () {
}