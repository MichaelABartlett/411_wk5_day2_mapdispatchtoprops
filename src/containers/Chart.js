import { connect } from 'react-redux'
import Car from '../components/Chart'

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps)(Car)