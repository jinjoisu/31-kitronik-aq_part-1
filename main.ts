input.onButtonPressed(Button.A, function () {
    kitronik_air_quality.measureData()
    kitronik_air_quality.show(kitronik_air_quality.readTemperature(kitronik_air_quality.TemperatureUnitList.F), 1)
})
input.onButtonPressed(Button.AB, function () {
    kitronik_air_quality.measureData()
    kitronik_air_quality.show(kitronik_air_quality.readHumidity(), 3)
})
input.onButtonPressed(Button.B, function () {
    kitronik_air_quality.measureData()
    kitronik_air_quality.show(kitronik_air_quality.readPressure(kitronik_air_quality.PressureUnitList.Pa), 2)
})
kitronik_air_quality.setupGasSensor()
kitronik_air_quality.calcBaselines()
