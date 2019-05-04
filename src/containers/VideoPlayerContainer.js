import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

const mapStateToProps = state => {
  return { video: state.currentVideo };
};

export default connect(mapStateToProps)(VideoPlayer);
