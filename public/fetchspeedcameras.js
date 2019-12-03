function loadData() {
    fetch('https://data.princegeorgescountymd.gov/resource/mnkf-cu5c.json')
    .then(res => res.json())
    .then(res => res.map(c => c.location + "," + c.posted_speed))
    .then(res => {
        var speedCameras = [];
        res.forEach(function(thing) {
            var infoSplit = thing.split(/[\n,]+/)
            var address = infoSplit[0] + ", " + infoSplit[1].trim() + ", " + infoSplit[2].trim()
            var lat = infoSplit[5].replace("(", "").trim()
            var long = infoSplit[6].replace(")", "").trim()
            var postedSpeed = infoSplit[7]
            var current = address + "|" + lat + "|" + long + "|" + postedSpeed
            speedCameras.push(current)
        })
        return speedCameras
    })
}
