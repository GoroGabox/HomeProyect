const xRange = document.querySelector("#x")
const xText = document.querySelector("#x_text")
const yRange = document.querySelector("#y")
const yText = document.querySelector("#y_text")
const zRange = document.querySelector("#z")
const zText = document.querySelector("#z_text")

const wood = document.querySelector("#wood")
const metal = document.querySelector("#metal")
const brick = document.querySelector("#brick")


//Canvas
const canvas = document.querySelector("canvas.webgl")

//Scene
const scene = new THREE.Scene();

//Camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 20;

//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas:canvas
});
renderer.setSize(window.innerWidth*0.75,window.innerHeight*0.89);

//Objects
const geometry = new THREE.BoxGeometry();

//Materiales
const material = new THREE.MeshBasicMaterial();
material.color = new THREE.Color(0x50EF0B)

//Mesh
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

//Functions

//Rangos e Input
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

//Escalar

function growX(a) {
    cube.scale.x = a;
}

function growZ(a) {
    cube.scale.y = a;
}

function growY(a) {
    cube.scale.z = a;
}

//Cambiar color

wood.addEventListener("click",function(){
    if (wood.checked)
        material.color = new THREE.Color(0x8C5A2A)
})

metal.addEventListener("click",function(){
    if (metal.checked)
        material.color = new THREE.Color(0x434347)
})

brick.addEventListener("click",function(){
    if (brick.checked)
        material.color = new THREE.Color(0xD60000)
})

//Renderizar

function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x = 0.2;
    cube.rotation.y = 1;

    renderer.render( scene, camera );
};

animate();