const supporterT1 = extendContent(UnitType, "anti-air-supporter", {
	load() {
		this.super$load();
		this.region = Core.atlas.find("templex-anti-air-supporter");
	}
});

supporterT1.constructor = () => {
	const unit = extend(CommanderUnitWaterMove, {
		update() {
			this.super$update();
			unit.mounts.forEach(mount => {
				var i = Mathf.random(2, 5)
				mount.weapon.shots = i
				mount.weapon.inaccuracy = i * 4
			})

		}
	})
	return unit
}