cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad () {
        this.dir = Math.random() > 0.5 ? 1 : -1;
        this.speed_x = 50 + Math.floor(120 * Math.random());
        this.speed_y = 20 + Math.floor(50 * Math.random());
        this.hp = 40 + Math.floor(100 * Math.random());
    },

    start () {
        this.hpLab = this.node.getComponentInChildren(cc.Label);
        this.hpLab.string = this.hp + '';
    },

    onCollisionEnter (other, self) {
        this.hp -= 1;
        if (this.hp <= 0) this.node.destroy();
        this.hpLab.string = this.hp + '';
    },

    update (dt) {
        this.node.x += this.speed_x * dt * this.dir;
        if (this.node.x < -cc.winSize.width/2 + this.node.width/2) this.dir = 1;
        if (this.node.x > cc.winSize.width/2 - this.node.width/2) this.dir = -1;

        this.node.y -= this.speed_y * dt;
        if (this.node.y < -800) this.node.y = 800;
    },
});
