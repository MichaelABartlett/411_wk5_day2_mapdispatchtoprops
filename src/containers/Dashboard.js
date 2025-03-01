import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { removeCar } from '../redux/Actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        cars: state.cars
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeCar: (index) => dispatch(removeCar(index))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)