import { connect } from 'react-redux';
import { selectLoadingCursor } from '../../redux/home/selectors';
import { TAppState } from '../../types';
import HomeComponet from './home.component';
import { exampleRequest } from '../../redux/home/action';

const mapStateToProps = (state:TAppState) => ({
    home: selectLoadingCursor(state)
});

const mapDispatchToProps = {
    exampleRequest
};


export default connect(mapStateToProps, mapDispatchToProps)(HomeComponet);