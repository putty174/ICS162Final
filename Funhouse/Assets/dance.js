#pragma strict

var pos : Vector3;
var rand : float;
public var speed : double;

function Start () {
	speed = 7;
	pos = transform.position;
	rand = Random.value * 100;
}

function Update () {
	transform.position = new Vector3(pos.x,pos.y+(Mathf.Abs(Mathf.Sin(Time.fixedTime*speed+rand))/2),pos.z);
}