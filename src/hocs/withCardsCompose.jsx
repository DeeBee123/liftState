import { compose } from 'recompose';
import withCardsLoading from './withCardsLoading';
import {Cards} from '../components/task6/Cards'

const withCardsCompose= compose(
    withCardsLoading
)

export default withCardsCompose(Cards)