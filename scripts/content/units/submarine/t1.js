const vindicate = extendContent(UnitType, "vindicate", {
	load() {
		this.super$load();
		this.region = Core.atlas.find(this.name);
	}
});

vindicate.constructor = () => {
	const unit = extend(CommanderUnitWaterMove, {
		draw() {
			if (unit.deep <= 1){
				Draw.alpha(unit.deep)
			}
	        Draw.mixcol(unit.floorOn().mapColor, 1 - unit.deep);
	        Draw.rect(vindicate.region, this.x, this.y, this.rotation - 90)
			if (!unit.mounts[0].shoot) {
				if (unit.deep >= 0.1) {
					unit.deep = unit.deep - 0.02
				}
        	} else {
        		if (unit.deep <= 1) {
        			unit.deep = unit.deep + 0.03
					
				}
	        Draw.reset()
			}
		}	
	})

	unit.deep = 0
	return unit
}