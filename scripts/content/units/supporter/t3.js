const supporterT3 = extendContent(UnitType, "wolmer", {
	load() {
		this.super$load();
	}
});


supporterT3.constructor = () => {
	const unit = extend(CommanderUnitWaterMove, {
	})
	return unit
}


supporterT3.abilities.add(new ForceFieldAbility(150, 5, 700, 600));