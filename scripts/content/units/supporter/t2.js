const supporterT2 = extendContent(UnitType, "mender", {
	load() {
		this.super$load();
	}
});


supporterT2.constructor = () => {
	const unit = extend(CommanderUnitWaterMove, {
	})
	return unit
}


supporterT2.abilities.add(new HealFieldAbility(15, 60 * 5, 50));
