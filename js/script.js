let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
let renderer = new THREE.WebGLRenderer();
let geometry = new THREE.BoxGeometry(2, 2, 2);

let cubeMaterial = [
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('asset/ben.jpeg'),
    side: THREE.DoubleSide
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('asset/tim.jpeg'),
    side: THREE.DoubleSide
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('asset/trevor-1.jpeg'),
    side: THREE.DoubleSide
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('asset/sara.png'),
    side: THREE.DoubleSide
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('asset/logo.png'),
    side: THREE.DoubleSide
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('asset/jen.jpg'),
    side: THREE.DoubleSide
  })
];

let material = new THREE.MeshFaceMaterial(cubeMaterial);
let cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 3;

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', function() {
  let width = window.innerWidth;
  let height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

controls = new THREE.OrbitControls(camera, renderer.domElement);

//Loop Logic

const update = () => {
  cube.rotation.y += 0.01;
};

//Draw Scene

const drawScene = () => {
  renderer.render(scene, camera);
};

//Run Loop

const runLoop = () => {
  requestAnimationFrame(runLoop);
  update();
  drawScene();
};

runLoop();
