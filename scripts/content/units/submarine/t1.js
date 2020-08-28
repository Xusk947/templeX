const vindicate = extendContent(UnitType, "vindicate", {
	load() {
		this.super$load();
		this.region = Core.atlas.find(this.name);
	}
});

vindicate.constructor = () => {
	const unit = extend(CommanderUnitWaterMove, {})

	unit.deep = 0
	return unit
}
