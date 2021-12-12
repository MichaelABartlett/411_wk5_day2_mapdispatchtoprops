import { connect } from 'react-redux'
import Car from '../components/Total'

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps)(Car)