<template>
  <div id="container"></div>
</template>

<script>
import * as THREE from 'three';

const OrbitControls = require('three-orbit-controls')(THREE);

export default {
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      controls: null,
    };
  },
  mounted() {
    this.init();
    this.animate();
  },
  methods: {
    // 初始化
    init() {
      //  创建场景对象Scene
      this.scene = new THREE.Scene();

      // 网格模型添加到场景中
      // const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
      // const material = new THREE.MeshNormalMaterial({
      //   color: 0xff0000,
      //   wireframe: true,
      // });
      // this.mesh = new THREE.Mesh(geometry, material);
      // this.scene.add(this.mesh);
      const sphere = new THREE.SphereGeometry();
      const object = new THREE.Mesh(sphere, new THREE.MeshNormalMaterial(0xff0000));
      const box = new THREE.BoxHelper(object);
      this.scene.add(box);

      /**
       * 相机设置
       */
      const container = document.getElementById('container');
      this.camera = new THREE.PerspectiveCamera(
        70,
        container.clientWidth / container.clientHeight,
        0.01,
        10,
      );
      this.camera.position.z = 1;

      /**
       * 创建渲染器对象
       */
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);

      // 创建控件对象
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    },

    // 动画
    animate() {
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
    },
  },
};
</script>

<style>
#container {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
