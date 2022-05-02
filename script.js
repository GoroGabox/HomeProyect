xRange = document.querySelector("#x")
xText = document.querySelector("#x_text")
yRange = document.querySelector("#y")
yText = document.querySelector("#y_text")
zRange = document.querySelector("#z")
zText = document.querySelector("#z_text")


//Canvas
const canvas = document.querySelector("canvas.webgl")

//Scene
const scene = new THREE.Scene();

//Camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas:canvas
});
renderer.setSize(window.innerWidth*0.75,window.innerHeight*0.89);

//Objects
const geometry = new THREE.BoxGeometry();

//Materiales
const material = new THREE.MeshBasicMaterial();
material.color = new THREE.Color(0xE10000)

//Mesh
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

//Functions

xRange.oninput = (()=>{
    let value = xRange.value
    xText.value = value
    growX(value)
})

xText.oninput = (()=>{
    let value = xText.value
    xRange.value = value
    growX(value)
})

yRange.oninput = (()=>{
    let value = yRange.value
    yText.value = value
    growY(value)
})

yText.oninput = (()=>{
    let value = yText.value
    yRange.value = value
    growY(value);
})

zRange.oninput = (()=>{
    let value = zRange.value
    zText.value = value
    growZ(value)
})

zText.oninput = (()=>{
    let value = zText.value
    zRange.value = value
    growZ(value)
})

function growX(a) {
    cube.scale.x = a*0.1;
}

function growY(a) {
    cube.scale.y = a*0.1;
}

function growZ(a) {
    cube.scale.z = a*0.1;
}

function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x = 1;
    cube.rotation.y = 1;

    renderer.render( scene, camera );
};

animate();