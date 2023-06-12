input.onButtonPressed(Button.A, function () {
    kitronik_air_quality.measureData()
    kitronik_air_quality.show(kitronik_air_quality.getAirQualityScore(), 1, kitronik_air_quality.ShowAlign.Left)
})
input.onButtonPressed(Button.AB, function () {
    kitronik_air_quality.measureData()
    kitronik_air_quality.show(kitronik_air_quality.getAirQualityPercent(), 3, kitronik_air_quality.ShowAlign.Left)
})
input.onButtonPressed(Button.B, function () {
    kitronik_air_quality.measureData()
    kitronik_air_quality.show(kitronik_air_quality.readeCO2(), 2, kitronik_air_quality.ShowAlign.Left)
})
kitronik_air_quality.setupGasSensor()
kitronik_air_quality.calcBaselines()
