#pragma strict
var speed = .001;

function Start () {
	Debug.Log(transform.rotation.y);
	animation.wrapMode = WrapMode.Loop;
	animation.Play("Take 001");
}

function Update () {
	transform.position.z += (speed * Time.deltaTime);
	if(transform.position.z > 10 && speed > 0){
		transform.Rotate(0,180,0,Space.World);
		speed *= -1;
	}
	if(transform.position.z < -10 && speed < 0){
		transform.Rotate(0,180,0,Space.World);
		speed *= -1;
	}
}