'use strict';

const Renderer = require('incheon').render.Renderer;

class MyRenderer extends Renderer {

    constructor(gameEngine, clientEngine) {
        super(gameEngine, clientEngine);
        this.sprites = {};
    }

    draw() {
        super.draw();
    }

    addObject(objData, options) {
        let sprite = {};

        // add this object to the renderer:
        // if (objData.class == PlayerAvatar) {
        //     ...
        // }

        Object.assign(sprite, options);
        this.sprites[objData.id] = sprite;

        return sprite;
    }

    removeObject(obj) {
        obj.destroy();
        delete this.sprites[obj.id];
    }

}

module.exports = MyRenderer;
