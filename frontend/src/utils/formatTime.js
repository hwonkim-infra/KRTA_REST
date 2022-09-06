import { format, getTime } from 'date-fns'
import { formatDistanceToNow } from 'date-fns/esm';

export function fDate(date){ return format(new Date(date), 'dd MMMM yyyy'); }

export function fDateTime(date){ return format(new Date(date), 'dd MMMM yyyy HH:mm'); }

export function fTimestamp(date){ return getTime(new Date(date))}

export function fDateTimeSuffix(date){ return format(new Date(date), 'dd/MM/yyyy hh:mm p'); }

export function fToNow(date){ return formatDistanceToNow(new Date(date), { addSuffix: true}); }
