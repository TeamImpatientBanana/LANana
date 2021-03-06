function update () {

    game.physics.arcade.overlap(enemyBullets, tank, bulletHitPlayer, null, this);

    // enemiesAlive = 0;
    //
    // for (var i = 0; i < enemies.length; i++)
    // {
    //     if (enemies[i].alive)
    //     {
    //         enemiesAlive++;
    //         game.physics.arcade.collide(tank, enemies[i].tank);
    //         game.physics.arcade.overlap(bullets, enemies[i].tank, bulletHitEnemy, null, this);
    //         enemies[i].update();
    //     }
    // }

    if (cursors.left.isDown) {
        tank.angle -= 4;
    }
    else if (cursors.right.isDown) {
        tank.angle += 4;
    }

    if (cursors.up.isDown) {
        //  The speed we'll travel at
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

    //  Position all the parts and align rotations
    shadow.x = tank.x;
    shadow.y = tank.y;
    shadow.rotation = tank.rotation;

    turret.x = tank.x;
    turret.y = tank.y;

    turret.rotation = game.physics.arcade.angleToPointer(turret);

    if (game.input.activePointer.isDown) {
        //  Boom!
        fire();
    }

}
