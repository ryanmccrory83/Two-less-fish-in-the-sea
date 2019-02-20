const database = require('./database-connection')

module.exports = {
  listGettingReadyPics() {
    return database('gettingready')
  },
  listBeforeTheCeremonyPics() {
    return database('beforetheceremony')
  },
  listTheCeremonyPics() {
    return database('ceremony')
  },
  listMrAndMrsPics() {
    return database('mrandmrs')
  },
  listReceptionPics() {
    return database('reception')
  },
  listTripPhotos() {
    return database('tripphotos')
  },
  createTripPhotos(tripphotos) {
    return database('tripphotos')
      .insert(tripphotos)
      .return('*')
      .then(record => record[0])
  }
}
