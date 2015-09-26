function update() {
    game.physics.arcade.overlap(enemyBullets, tank, bulletHitPlayer, null, this);
    if (cursors.left.isDown) {
        tank.angle -= 4;
    }
    else if (cursors.right.isDown) {
        tank.angle += 4;
    }
    if (cursors.up.isDown) {
        currentSpeed = 300;
    }
    else {
        if (currentSpeed > 0) {
            currentSpeed -= 4;
        }
    }
    if (currentSpeed > 0) {
        game.physics.arcade.velocityFromRotation(tank.rotation, currentSpeed, tank.body.velocity);
    }
    land.tilePosition.x = -game.camera.x;
    land.tilePosition.y = -game.camera.y;
    shadow.x = tank.x;
    shadow.y = tank.y;
    shadow.rotation = tank.rotation;
    turret.x = tank.x;
    turret.y = tank.y;
    turret.rotation = game.physics.arcade.angleToPointer(turret);
    if (game.input.activePointer.isDown) {
        fire();
    }
}
