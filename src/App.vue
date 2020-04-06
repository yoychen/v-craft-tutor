<template>
  <div id="app">
    <Editor component='div' class="container" :resolverMap="resolverMap">
      <div class="row">
        <div class="col">
          <Export />
          <hr />

          <Blueprint component="button" class="btn btn-outline-dark">
            Paragraph
            <template v-slot:blueprint>
              <Paragraph />
            </template>
          </Blueprint>
           <Blueprint component="button" class="btn btn-outline-dark">
            Container
            <template v-slot:blueprint>
              <Canvas component="Container" />
            </template>
          </Blueprint>

          <hr />

          <SettingPanel />
        </div>
        <div class="col-8">
          <Frame component="div" class="preview-panel">
            <Canvas component="Container">
              <Paragraph content="demo text" />
            </Canvas>
          </Frame>
        </div>
      </div>
    </Editor>
  </div>
</template>

<script>
import {
  Canvas, Editor, Frame, Blueprint,
} from '@v-craft/core';
import Container from './components/elements/Container.vue';
import Paragraph from './components/elements/Paragraph.vue';
import SettingPanel from './components/SettingPanel.vue';
import Export from './components/Export.vue';

export default {
  name: 'App',
  components: {
    Canvas, Editor, Frame, Paragraph, SettingPanel, Blueprint, Export,
  },
  data() {
    return {
      resolverMap: {
        Canvas, Container, Paragraph,
      },
    };
  },
};
</script>
