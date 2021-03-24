import { all, call, takeLatest, put } from 'redux-saga/effects'
import { LOAD_MARKET, MARKETS, PRODUCERS, SELECT_MARKET } from '../contants'
import Api from '../../services/api'

const cidades = [null, 'Dois Vizinhos', 'Francisco Beltrão']

function* loadMarkets(action: any) {
  try {
    // eslint-disable-next-line spaced-comment
    const feirasRaw: Array<any> = yield call(Api.get, '/feira/')
    const feiras = feirasRaw.map((feira: any) => {
      // const cidade = yield call(Api.get, `/cidade/${feira.cidade}`)
      return {
        ...feira,
        cidade: cidades[feira.cidade],
      }
    })

    yield put({ type: MARKETS, payload: feiras })
    // eslint-disable-next-line spaced-comment
    const producers: Array<any> = yield call(
      Api.get,
      `/feira/${action.payload}/produtor/`,
    )
    yield put({ type: PRODUCERS, payload: producers })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err)
  }
}

function* loadMarket() {
  yield takeLatest(LOAD_MARKET, loadMarkets)
}
function* pickMarket() {
  yield takeLatest(SELECT_MARKET, loadMarkets)
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* rootSaga() {
  yield all([loadMarket(), pickMarket()])
}
