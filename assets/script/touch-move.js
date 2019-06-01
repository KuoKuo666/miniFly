cc.Class({
    extends: cc.Component,

    properties: {
        player: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.node.on('touchmove', (e) => {
            let delta = e.getDelta();
            this.player.x += delta.x;
            this.player.y += delta.y;
        },this);
    },

    update (dt) {
        if (this.player.x < -cc.winSize.width/2) {
            this.player.x = -cc.winSize.width/2;
        } else if (this.player.x > cc.winSize.width/2) {
            this.player.x = cc.winSize.width/2;
        }
        if (this.player.y < -cc.winSize.height/2) {
            this.player.y = -cc.winSize.height/2;
        } else if (this.player.y > cc.winSize.height/2) {
            this.player.y = cc.winSize.height/2;
        }
    },
});
