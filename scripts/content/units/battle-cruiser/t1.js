const railo = extendContent(UnitType, "railo", {
	load() {
		this.super$load();
		this.region = Core.atlas.find(this.name);
	}
});

railo.constructor = () => {
	const unit = extend(CommanderUnitWaterMove, {})

	return unit
}