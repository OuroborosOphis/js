
import {
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR
} from '../constants.js';

function logger(log, type=TYPE_LOG) {
  console[type](log);
}

// chi co the export 1 default 
export default logger;