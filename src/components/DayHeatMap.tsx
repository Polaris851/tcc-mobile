import { TouchableOpacity, Dimensions} from 'react-native';

const WEEK_DAYS = 7;
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5;
export const DAY_MARGIN_BETWEEN = 7;
export const DAY_SIZE = (Dimensions.get('screen').width / WEEK_DAYS) - (SCREEN_HORIZONTAL_PADDING + 2);

export function DayHeatMap() {
    return(
        <TouchableOpacity
        className='bg-slate-100 rounded-lg border-2 m-1 border-slate-200'
        style={{ width: DAY_SIZE, height: DAY_SIZE}}
        activeOpacity={0.7}
        />
    )}