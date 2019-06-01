cc.Class({
    extends: cc.Component,

    properties: {
        bullet: cc.Prefab,
        player: cc.Node
    },

    onLoad () {
        cc.director.getCollisionManager().enabled = true;
        this.pool = new cc.NodePool('bullet');
        for (let i = 0; i < 100; i++) {
            this.pool.put(cc.instantiate(this.bullet));
        }
    },

    start () {
        this.schedule(this.createManyBullet, 0.4);
    },

    createManyBullet () {
        let px = this.player.x;
        let py = this.player.y + 80;
        let offset = 45;
        this.createOneBullet(px, py);
        this.createOneBullet(px + offset, py);
        this.createOneBullet(px - offset, py);
    },

    createOneBullet (x, y) {
        let b = this.pool.get(this.pool);
        if (!b) b = cc.instantiate(this.bullet);
        b.parent = this.node;
        b.x = x;
        b.y = y;
    }
});
