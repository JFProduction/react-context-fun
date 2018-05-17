import { connect } from 'react-redux'
import { boundChangeName } from '../../redux/actions/ChangeNameAction'
import ReduxPresentation from '../presentation/ReduxPresentation'

const getName = name => {
	return name
}

const mapStateToProps = state => ({
	name: getName(state.name)
})

const mapDispatchToProps = dispatch => ({
	changeName: name => boundChangeName(name)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ReduxPresentation)