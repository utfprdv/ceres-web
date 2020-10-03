
import { all, call, takeLatest, put } from 'redux-saga/effects'
import { LOAD_MARKET, MARKETS, PRODUCERS, SELECT_MARKET } from 'store/contants'
import Api from 'services/api'

const cidades = [null, 'Dois Vizinhos', 'Francisco Beltrão']

function* loadMarkets(action: any) {
  try {
    const feirasRaw = yield call(Api.get, '/feira/');
    const feiras = feirasRaw.map((feira: any) => {
      // const cidade = yield call(Api.get, `/cidade/${feira.cidade}`)
      return {
        ...feira,
        cidade: cidades[feira.cidade],
      }
    })

    yield put({ type: MARKETS, payload: feiras })
    const producers = yield call(Api.get, `/feira/${action.payload}/produtor/`)
    yield put({ type: PRODUCERS, payload: producers })
  } catch (err) {
    console.error(err)
  }
}


function* loadMarket() {
  yield takeLatest(LOAD_MARKET, loadMarkets)
}
function* pickMarket() {
  yield takeLatest(SELECT_MARKET, loadMarkets)
}

export default function* rootSaga() {
  yield all([
    loadMarket(),
    pickMarket()
  ])
}