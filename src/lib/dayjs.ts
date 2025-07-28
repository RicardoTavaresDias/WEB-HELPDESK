import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import "dayjs/locale/pt-br"
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'

dayjs.extend(relativeTime);
dayjs.extend(isSameOrBefore);
dayjs.locale("pt-br")

export { dayjs }