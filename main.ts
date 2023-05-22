input.onButtonPressed(Button.A, function () {
    kitronik_air_quality.measureData()
    kitronik_air_quality.show(kitronik_air_quality.getAirQualityScore(), 1)
})
input.onButtonPressed(Button.AB, function () {
    kitronik_air_quality.measureData()
    kitronik_air_quality.show(kitronik_air_quality.getAirQualityPercent(), 3)
})
input.onButtonPressed(Button.B, function () {
    kitronik_air_quality.measureData()
    kitronik_air_quality.show(kitronik_air_quality.readeCO2(), 2)
})
kitronik_air_quality.setupGasSensor()
kitronik_air_quality.calcBaselines()
