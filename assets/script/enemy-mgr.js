cc.Class({
    extends: cc.Component,

    properties: {
        enemy: cc.Prefab
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.schedule(this.createOneEnemy, 4);
    },

    createOneEnemy () {
        let e = cc.instantiate(this.enemy);
        e.parent = this.node;
        e.x = -300 + 600 * Math.random();
        e.y = 750;
    }
});
